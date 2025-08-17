


// // pages/Home.jsx
// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../context/auth';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const { user, posts, createPost, getPosts, isLoading } = useContext(AuthContext);
//   const [formData, setFormData] = useState({ text: '' });
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   useEffect(() => {
//     if (!isLoading) {
//       getPosts();
//     }
//   }, [getPosts, isLoading]);

//   const { text } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, text: e.target.value });
//     if (errors.text || errors.msg) {
//       setErrors({ ...errors, text: '', msg: '' });
//     }
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!text.trim()) {
//       setErrors({ text: 'Post content is required' });
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       await createPost(text);
//       setFormData({ text: '' });
//       setIsSubmitting(false);
//     } catch (err) {
//       setErrors(err);
//       setIsSubmitting(false);
//     }
//   };

//   if (isLoading) {
//     return <div className="text-center text-gray-600 py-8">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
//         Community Feed 📰
//       </h2>

//       {user ? (
//         <form onSubmit={onSubmit} className="bg-white/90 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg mb-10 transition-all">
//           <div className="flex gap-4 items-start">
//             <div className="w-12 h-12 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">
//               {user.name.charAt(0)}
//             </div>
//             <div className="flex-1">
//               <textarea
//                 name="text"
//                 placeholder="What's on your mind?"
//                 value={text}
//                 onChange={onChange}
//                 disabled={isSubmitting}
//                 className={`w-full p-4 border ${errors.text ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none`}
//                 rows="4"
//               />
//               {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text}</p>}
//               {errors.msg && <p className="text-red-500 text-sm mt-1 text-center">{errors.msg}</p>}
//               <div className="text-right mt-3">
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
//                 >
//                   {isSubmitting ? 'Posting...' : 'Post'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       ) : (
//         <p className="text-center text-gray-600 mb-6">
//           Please{' '}
//           <Link to="/login" className="text-blue-600 hover:underline font-medium">
//             login
//           </Link>{' '}
//           to post your thoughts.
//         </p>
//       )}

//       <div className="space-y-6">
//         {posts.length === 0 ? (
//           <p className="text-center text-gray-500">No posts yet. Be the first to start the conversation!</p>
//         ) : (
//           posts.map((post) => (
//             <div
//               key={post._id}
//               className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex justify-between items-center mb-2">
//                 <Link
//                   to={`/profile/${post.user._id}`}
//                   className="text-blue-700 font-semibold hover:underline"
//                 >
//                   {post.user.name}
//                 </Link>
//                 <span className="text-gray-500 text-xs">
//                   {new Date(post.date).toLocaleString(undefined, {
//                     dateStyle: 'medium',
//                     timeStyle: 'short',
//                   })}
//                 </span>
//               </div>
//               <p className="text-gray-800 whitespace-pre-line">{post.text}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../context/auth';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

const Home = () => {
  const { posts, getPosts, createPost, deletePost, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!isLoading) {
      getPosts();
    }
  }, [isLoading]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <PostForm onPostCreated={createPost} />
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Posts</h3>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts yet.</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Post key={post._id} post={post} onDelete={deletePost} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;