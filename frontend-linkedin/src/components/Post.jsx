
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';

// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);

//   const handleDelete = async () => {
//     try {
//       if (!post._id) return;
//       await axios.delete(`https://linkedin-mini-backend-linkedin.onrender.com/api/posts/${post._id}`, {
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

//   const userInfo = post.user || {};

//   return (
//     <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-5 mb-6 border border-gray-200 hover:shadow-lg transition duration-300">
      
//       {/* Header */}
//       <div className="flex items-center justify-between flex-wrap gap-y-2 mb-4">
//         <div className="flex items-center gap-3">
//           {userInfo.avatar ? (
//             <img
//               src={userInfo.avatar}
//               alt="Avatar"
//               className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-purple-400 shadow"
//             />
//           ) : (
//             <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white flex items-center justify-center font-bold shadow">
//               {getInitials(userInfo.name)}
//             </div>
//           )}
//           <div>
//             <Link
//               to={`/profile/${userInfo._id}`}
//               className="text-sm sm:text-base font-semibold text-gray-800 hover:text-indigo-600 transition"
//             >
//               {userInfo.name || 'User'}
//             </Link>
//             <p className="text-xs text-gray-500">{moment(post.date).fromNow()}</p>
//           </div>
//         </div>

//         {user && user._id === userInfo._id && (
//           <button
//             onClick={handleDelete}
//             className="text-red-500 text-sm hover:text-red-700 cursor-pointer transition"
//             title="Delete Post"
//           >
//             🗑
//           </button>
//         )}
//       </div>

//       {/* Post Text */}
//       <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 break-words">
//         {post.text}
//       </p>

//       {/* Like / Comment (Static UI) */}
//       <div className="flex flex-wrap justify-between items-center gap-3">
//         <div className="flex gap-4">
//           <button className="text-sm sm:text-base text-gray-600 hover:text-pink-500 transition flex items-center gap-1">
//             ❤️ <span>Like</span>
//           </button>
//           <button className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
//             💬 <span>Comment</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;


// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import { AuthContext } from '../context/auth';
// import axios from 'axios';
// import { MdDeleteForever } from "react-icons/md";


// const Post = ({ post, onDelete }) => {
//   const { user } = useContext(AuthContext);
//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleDelete = async () => {
//     try {
//       if (!post._id) return;
//       await axios.delete(
//         `https://linkedin-mini-backend-linkedin.onrender.com/api/posts/${post._id}`,
//         {
//           headers: {
//             'x-auth-token': localStorage.getItem('token'),
//           },
//         }
//       );
//       onDelete(post._id);
//       setShowConfirm(false);
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

//   const userInfo = post.user || {};

//   return (
//     <>
//       <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-5 mb-6 border border-gray-200 hover:shadow-lg transition duration-300">
//         {/* Header */}
//         <div className="flex items-center justify-between flex-wrap gap-y-2 mb-4">
//           <div className="flex items-center gap-3">
//             {userInfo.avatar ? (
//               <img
//                 src={userInfo.avatar}
//                 alt="Avatar"
//                 className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-purple-400 shadow"
//               />
//             ) : (
//               <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white flex items-center justify-center font-bold shadow">
//                 {getInitials(userInfo.name)}
//               </div>
//             )}
//             <div>
//               <Link
//                 to={`/profile/${userInfo._id}`}
//                 className="text-sm sm:text-base font-semibold text-gray-800 hover:text-indigo-600 transition"
//               >
//                 {userInfo.name || 'User'}
//               </Link>
//               <p className="text-xs text-gray-500">
//                 {moment(post.date).fromNow()}
//               </p>
//             </div>
//           </div>

//           {user && user._id === userInfo._id && (
//             <button
//               onClick={() => setShowConfirm(true)}
//               className="text-white text-xl p-1 border rounded-full bg-red-500 hover:bg-red-800 cursor-pointer transition"
//               title="Delete Post"
//             >
//               <MdDeleteForever />
//             </button>
//           )}
//         </div>

//         {/* Post Text */}
//         <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 break-words">
//           {post.text}
//         </p>

//         {/* Like / Comment (Static UI) */}
//         <div className="flex flex-wrap justify-between items-center gap-3">
//           <div className="flex gap-4">
//             <button className="text-sm sm:text-base text-gray-600 hover:text-pink-500 transition flex items-center gap-1">
//               ❤️ <span>Like</span>
//             </button>
//             <button className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
//               💬 <span>Comment</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Confirmation Modal */}
//       {showConfirm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
//             <h2 className="text-lg font-semibold text-gray-800 mb-3">
//               Confirm Delete
//             </h2>
//             <p className="text-sm text-gray-600 mb-5">
//               Are you sure you want to delete this post? This action cannot be undone.
//             </p>
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowConfirm(false)}
//                 className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Post;


import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../context/auth';
import axios from 'axios';
import { MdDeleteForever } from "react-icons/md";

const Post = ({ post, onDelete }) => {
  const { user } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleDelete = async () => {
    try {
      if (!post._id) return;
      await axios.delete(
        `https://linkedin-mini-backend-linkedin.onrender.com/api/posts/${post._id}`,
        {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        }
      );
      onDelete(post._id);
      setShowConfirm(false);
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

  const handleLike = () => {
    setLiked(!liked);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300); // reset animation after 300ms
  };

  const userInfo = post.user || {};

  return (
    <>
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
              <p className="text-xs text-gray-500">
                {moment(post.date).fromNow()}
              </p>
            </div>
          </div>

          {user && user._id === userInfo._id && (
            <button
              onClick={() => setShowConfirm(true)}
              className="text-white text-xl p-1 border rounded-full bg-red-500 hover:bg-red-800 cursor-pointer transition"
              title="Delete Post"
            >
              <MdDeleteForever />
            </button>
          )}
        </div>

        {/* Post Text */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 break-words">
          {post.text}
        </p>

        {/* Like / Comment */}
        <div className="flex flex-wrap justify-between items-center gap-3">
          <div className="flex gap-4">
            <button
              onClick={handleLike}
              className={`text-sm sm:text-base flex items-center gap-1 transition 
                ${liked ? "text-pink-500" : "text-gray-600 hover:text-pink-500"}`}
            >
              <span
                className={`text-lg transform transition-transform duration-300 
                  ${animating ? "animate-ping scale-250" : "scale-100"}`}
              >
                {liked ? "❤️" : "🩶"}
              </span>
              <span>{liked ? "Liked" : "Like"}</span>
            </button>

            <button className="text-sm sm:text-base text-gray-600 hover:text-blue-500 transition flex items-center gap-1">
              💬 <span>Comment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Delete
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
