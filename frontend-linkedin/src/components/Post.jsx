// // client/src/components/Post.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
//       onDelete(post._id);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//       <div className="flex justify-between items-start mb-4">
//         <Link 
//           to={`/profile/${post.user}`} 
//           className="text-blue-600 hover:text-blue-800 font-medium text-lg"
//         >
//           {post.name}
//         </Link>
//         <span className="text-gray-500 text-sm">
//           {moment(post.date).fromNow()}
//         </span>
//       </div>
//       <p className="text-gray-700 mb-4">{post.text}</p>
//       {user && user._id === post.user && (
//         <button
//           onClick={handleDelete}
//           className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };

// export default Post;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${post._id}`);
//       onDelete(post._id);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6 border border-gray-100/30 hover:shadow-xl transition-all duration-300">
//       <div className="flex justify-between items-start mb-4">
//         <Link
//           to={`/profile/${post.user}`}
//           className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 ease-in-out"
//         >
//           {post.name}
//         </Link>
//         <span className="text-gray-500 text-sm font-medium">
//           {moment(post.date).fromNow()}
//         </span>
//       </div>
//       <p className="text-gray-800 text-base leading-relaxed mb-6">{post.text}</p>
//       {user && user._id === post.user && (
//         <button
//           onClick={handleDelete}
//           className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };

// export default Post;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       });
//       onDelete(post._id);
//     } catch (err) {
//       console.error('Delete post error:', err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-6 border border-gray-100/30 hover:shadow-xl transition-all duration-300">
//       <div className="flex justify-between items-start mb-4">
//         <Link
//           to={`/profile/${post.user._id}`}
//           className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 ease-in-out"
//         >
//           {post.user.name}
//         </Link>
//         <span className="text-gray-500 text-sm font-medium">
//           {moment(post.date).fromNow()}
//         </span>
//       </div>
//       <p className="text-gray-800 text-base leading-relaxed mb-6">{post.text}</p>
//       {user && user._id === post.user._id && (
//         <button
//           onClick={handleDelete}
//           className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };

// // export default Post;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       });
//       onDelete(post._id);
//     } catch (err) {
//       console.error('Delete post error:', err.response?.data || err.message);
//     }
//   };

//   // Generates initials if avatar missing
//   const getInitials = (name) => {
//     return name
//       .split(' ')
//       .map((word) => word[0])
//       .join('')
//       .toUpperCase();
//   };

//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 mb-6 border border-gray-300/50 hover:shadow-2xl transition-all duration-300">
      
//       {/* Header: Avatar + Name + Time */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-3">
//           {post.user.avatar ? (
//             <img
//               src={post.user.avatar}
//               alt="Avatar"
//               className="w-10 h-10 rounded-full object-cover border-2 border-purple-400 shadow"
//             />
//           ) : (
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white flex items-center justify-center font-bold shadow">
//               {getInitials(post.user.name)}
//             </div>
//           )}
//           <div>
//             <Link
//               to={`/profile/${post.user._id}`}
//               className="text-base font-semibold text-gray-800 hover:text-indigo-600 transition"
//             >
//               {post.user.name}
//             </Link>
//             <p className="text-xs text-gray-500">{moment(post.date).fromNow()}</p>
//           </div>
//         </div>
        
//         {/* Delete if owner */}
//         {user && user._id === post.user._id && (
//           <button
//             onClick={handleDelete}
//             className="text-red-500 text-sm hover:text-red-700 transition"
//             title="Delete Post"
//           >
//             🗑
//           </button>
//         )}
//       </div>

//       {/* Post Content */}
//       <p className="text-gray-700 text-sm leading-relaxed mb-4">
//         {post.text}
//       </p>

//       {/* Action Buttons */}
//       <div className="flex items-center justify-between">
//         <div className="flex gap-4">
//           <button className="text-sm text-gray-600 hover:text-pink-500 transition flex items-center gap-1">
//             ❤️ <span>Like</span>
//           </button>
//           <button className="text-sm text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
//             💬 <span>Comment</span>
//           </button>
//         </div>
//         <p className="text-xs text-gray-400">12 Likes</p> {/* optional dynamic */}
//       </div>
//     </div>
//   );
// };

// export default Post;


// src/components/Post.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
//         headers: {
//           'x-auth-token': localStorage.getItem('token'),
//         },
//       });
//       onDelete(post._id);
//     } catch (err) {
//       console.error('Delete post error:', err.response?.data || err.message);
//     }
//   };

//   const getInitials = (name) => {
//     if (!name) return 'U';
//     return name
//       .split(' ')
//       .map((word) => word[0])
//       .join('')
//       .toUpperCase();
//   };

//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 mb-6 border border-gray-300/50 hover:shadow-2xl transition-all duration-300">
      
//       {/* Header: Avatar + Name + Time */}
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-3">
//           {post.user.avatar ? (
//             <img
//               src={post.user.avatar}
//               alt="Avatar"
//               className="w-10 h-10 rounded-full object-cover border-2 border-purple-400 shadow"
//             />
//           ) : (
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white flex items-center justify-center font-bold shadow">
//               {getInitials(post.user.name)}
//             </div>
//           )}
//           <div>
//             <Link
//               to={`/profile/${post.user._id}`}
//               className="text-base font-semibold text-gray-800 hover:text-indigo-600 transition"
//             >
//               {post.user.name}
//             </Link>
//             <p className="text-xs text-gray-500">{moment(post.date).fromNow()}</p>
//           </div>
//         </div>

//         {user && user._id === post.user._id && (
//           <button
//             onClick={handleDelete}
//             className="text-red-500 text-sm hover:text-red-700 transition"
//             title="Delete Post"
//           >
//             🗑
//           </button>
//         )}
//       </div>

//       {/* Actual post content */}
//       <p className="text-gray-700 text-sm leading-relaxed mb-4">
//         {post.text}
//       </p>

//       {/* Like / Comment (Optional UI only) */}
//       <div className="flex items-center justify-between">
//         <div className="flex gap-4">
//           <button className="text-sm text-gray-600 hover:text-pink-500 transition flex items-center gap-1">
//             ❤️ <span>Like</span>
//           </button>
//           <button className="text-sm text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
//             💬 <span>Comment</span>
//           </button>
//         </div>
//         {/* Optional static like count */}
//         {/* <p className="text-xs text-gray-400">12 Likes</p> */}
//       </div>
//     </div>
//   );
// };

// export default Post;


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/auth';
import axios from 'axios';

const Post = ({ post, onDelete }) => {
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      if (!post._id) return;
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      onDelete(post._id);
    } catch (err) {
      console.error('Delete post error:', err.response?.data || err.message);
    }
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const userInfo = post.user || {};

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-5 mb-6 border border-gray-200 hover:shadow-lg transition duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-y-2 mb-4">
        <div className="flex items-center gap-3">
          {userInfo.avatar ? (
            <img
              src={userInfo.avatar}
              alt="Avatar"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-purple-400 shadow"
            />
          ) : (
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white flex items-center justify-center font-bold shadow">
              {getInitials(userInfo.name)}
            </div>
          )}
          <div>
            <Link
              to={`/profile/${userInfo._id}`}
              className="text-sm sm:text-base font-semibold text-gray-800 hover:text-indigo-600 transition"
            >
              {userInfo.name || 'User'}
            </Link>
            <p className="text-xs text-gray-500">{moment(post.date).fromNow()}</p>
          </div>
        </div>

        {user && user._id === userInfo._id && (
          <button
            onClick={handleDelete}
            className="text-red-500 text-sm hover:text-red-700 cursor-not-allowed transition"
            title="Delete Post"
          >
            🗑
          </button>
        )}
      </div>

      {/* Post Text */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 break-words">
        {post.text}
      </p>

      {/* Like / Comment (Static UI) */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex gap-4">
          <button className="text-sm sm:text-base text-gray-600 hover:text-pink-500 transition flex items-center gap-1">
            ❤️ <span>Like</span>
          </button>
          <button className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
            💬 <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
