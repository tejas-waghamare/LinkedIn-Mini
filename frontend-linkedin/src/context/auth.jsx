

// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const setAuthToken = (token) => {
//     if (token) {
//       axios.defaults.headers.common['x-auth-token'] = token;
//     } else {
//       delete axios.defaults.headers.common['x-auth-token'];
//     }
//   };

//   const register = async (userData) => {
//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/auth/register',
//         userData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       localStorage.setItem('token', res.data.token);
//       setAuthToken(res.data.token);
//       return res.data;
//     } catch (err) {
//       throw err.response?.data || { msg: 'Registration failed. Please try again.' };
//     }
//   };

//   const login = async (credentials) => {
//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/auth/login',
//         credentials,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       localStorage.setItem('token', res.data.token);
//       setAuthToken(res.data.token);
//       await loadUser();
//     } catch (err) {
//       throw err.response?.data || { msg: 'Login failed. Please try again.' };
//     }
//   };

//   const loadUser = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/users/me');
//       setUser(res.data);
//     } catch (err) {
//       console.error('Load user error:', err);
//       setUser(null);
//       localStorage.removeItem('token');
//       setAuthToken(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const createPost = async (text) => {
//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/posts',
//         { text },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setPosts((prevPosts) => [res.data, ...prevPosts]);
//     } catch (err) {
//       throw err.response?.data || { msg: 'Failed to create post' };
//     }
//   };

//   const getPosts = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/posts');
//       setPosts(res.data);
//     } catch (err) {
//       console.error('Get posts error:', err);
//       setPosts([]);
//     }
//   };

//   const getUserProfile = async (userId) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
//       return res.data;
//     } catch (err) {
//       throw err.response?.data || { msg: 'Failed to fetch user profile' };
//     }
//   };

//   const updateUserProfile = async ({ bio, jobTitle, skills }) => {
//     try {
//       console.log('Sending PUT /api/users/me:', { bio, jobTitle, skills });
//       const res = await axios.put(
//         'http://localhost:5000/api/users/me',
//         { bio, jobTitle, skills },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       console.log('Received from PUT /api/users/me:', res.data);
//       setUser((prevUser) => ({ ...prevUser, ...res.data }));
//       return res.data;
//     } catch (err) {
//       console.error('Update user profile error:', err);
//       throw err.response?.data || { msg: 'Failed to update profile' };
//     }
//   };

//   const logout = (navigate) => {
//     localStorage.removeItem('token');
//     setAuthToken(null);
//     setUser(null);
//     setPosts([]);
//     setIsLoading(false);
//     navigate('/login', { replace: true });
//   };

//   // Initialize token and user on load
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setAuthToken(token);
//       loadUser();
//     } else {
//       setIsLoading(false);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{ user, posts, isLoading, register, login, logout, createPost, getPosts, getUserProfile, updateUserProfile }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;



import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
  };

  const register = async (userData) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/register',
        userData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      setAuthToken(res.data.token);
      return res.data;
    } catch (err) {
      throw err.response?.data || { msg: 'Registration failed. Please try again.' };
    }
  };

  const login = async (credentials) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        credentials,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      localStorage.setItem('token', res.data.token);
      setAuthToken(res.data.token);
      await loadUser();
    } catch (err) {
      throw err.response?.data || { msg: 'Login failed. Please try again.' };
    }
  };

  const loadUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users/me');
      setUser(res.data);
    } catch (err) {
      console.error('Load user error:', err);
      setUser(null);
      localStorage.removeItem('token');
      setAuthToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const createPost = async (text) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/posts',
        { text },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setPosts((prevPosts) => [res.data, ...prevPosts]);
      return res.data;
    } catch (err) {
      throw err.response?.data || { msg: 'Failed to create post' };
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
    } catch (err) {
      console.error('Delete post error:', err.response?.data || err.message);
      throw err.response?.data || { msg: 'Failed to delete post' };
    }
  };

  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Get posts error:', err);
      setPosts([]);
    }
  };

  const getUserProfile = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
      return res.data;
    } catch (err) {
      throw err.response?.data || { msg: 'Failed to fetch user profile' };
    }
  };

  const updateUserProfile = async ({ bio, jobTitle, skills }) => {
    try {
      console.log('Sending PUT /api/users/me:', { bio, jobTitle, skills });
      const res = await axios.put(
        'http://localhost:5000/api/users/me',
        { bio, jobTitle, skills },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Received from PUT /api/users/me:', res.data);
      setUser((prevUser) => ({ ...prevUser, ...res.data }));
      return res.data;
    } catch (err) {
      console.error('Update user profile error:', err);
      throw err.response?.data || { msg: 'Failed to update profile' };
    }
  };

  const logout = (navigate) => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
    setPosts([]);
    setIsLoading(false);
    navigate('/login', { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      loadUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, posts, isLoading, register, login, logout, createPost, deletePost, getPosts, getUserProfile, updateUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;