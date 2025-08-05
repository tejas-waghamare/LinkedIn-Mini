// // client/src/components/PostForm.js
// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const PostForm = ({ onPostCreated }) => {
//   const [text, setText] = useState('');
//   const [error, setError] = useState('');
//   const { user } = useContext(AuthContext);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (!text.trim()) {
//       setError('Text is required');
//       return;
//     }
//     try {
//       const res = await axios.post('http://localhost:5000/api/posts', { text });
//       onPostCreated(res.data);
//       setText('');
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.errors?.[0]?.msg || 'Something went wrong');
//     }
//   };

//   if (!user) return null;

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//       <h3 className="text-lg font-semibold mb-4">Create a Post</h3>
//       {error && (
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4">
//           {error}
//         </div>
//       )}
//       <form onSubmit={onSubmit}>
//         <div className="mb-4">
//           <textarea
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows="3"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="What's on your mind?"
//           ></textarea>
//         </div>
//         <button 
//           type="submit" 
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
//         >
//           Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostForm;

import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/auth';

const PostForm = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { user, createPost } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Text is required');
      return;
    }
    try {
      await createPost(text); // Will update posts via context
      setText('');
      setError('');
    } catch (err) {
      setError(err.msg || 'Failed to create post.');
    }
  };

  if (!user) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-semibold mb-4">Create a Post</h3>
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4">
          {error}
        </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className='flex justify-center'>
            <button
          type="submit"
          className="bg-gradient-to-br from-purple-400 via-indigo-300 to-fuchsia-700 hover:bg-blue-700 cursor-pointer text-black px-6 py-2 rounded-md transition"
        >
          Post
        </button></div>
      </form>
    </div>
  );
};

export default PostForm;
