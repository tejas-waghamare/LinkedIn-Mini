
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
      await axios.delete(`https://linkedin-mini-backend-linkedin.onrender.com/api/posts/${post._id}`, {
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
            className="text-red-500 text-sm hover:text-red-700 cursor-pointer transition"
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
