

// import React, { useEffect, useContext } from 'react';
// import { AuthContext } from '../context/auth';
// import PostForm from '../components/PostForm';
// import Post from '../components/Post';

// const Home = () => {
//   const { posts, getPosts, createPost, deletePost, isLoading } = useContext(AuthContext);

//   useEffect(() => {
//     if (!isLoading) {
//       getPosts();
//     }
//   }, [deletePost, isLoading, createPost]);

//   // Hardcoded Welcome Post (always shown at the top)
//   const welcomePost = {
//     _id: "welcome-1",
//     text: "👋 Welcome to LinkedIn Mini! Start by creating your first post.",
//     user: { _id: "user-1", name: "MiniLinkedin" },
//     date: new Date().toISOString(),
//   };

//   return (
//     <div className="flex max-w-4xl gap-6 mx-auto h-screen px-4 ">
//       <div className="w-full py-14">
//         <PostForm onPostCreated={createPost} />
//       </div>
//       <div className='w-full  p-2'>
//         <div>
//           <h3 className="text-xl font-semibold flex justify-end text-gray-800 mb-4">Posts</h3>
//         </div>
//         <div className='overflow-y-auto w-full  p-2 '>

//           {isLoading ? (
//             <div className="flex justify-center ">
//               <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ) : (
//             <div className=" space-y-4  ">
//               {/* Always render Welcome Post first */}
//               <Post post={welcomePost} onDelete={null} />

//               {/* Then render user posts */}
//               {posts.length === 0 ? (
//                 <p className="text-center text-gray-600">No posts yet.</p>
//               ) : (
//                 posts.map((post) => (
//                   <Post key={post._id} post={post} onDelete={deletePost} />
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useContext } from 'react';
// import { AuthContext } from '../context/auth';
// import PostForm from '../components/PostForm';
// import Post from '../components/Post';

// const Home = () => {
//   const { posts, getPosts, createPost, deletePost, isLoading } = useContext(AuthContext);

//   useEffect(() => {
//     if (!isLoading) {
//       getPosts();
//     }
//   }, [deletePost, isLoading, createPost]);

//   // Hardcoded Welcome Post (always shown at the top)
//   const welcomePost = {
//     _id: "welcome-1",
//     text: "👋 Welcome to LinkedIn Mini! Start by creating your first post.",
//     user: { _id: "user-1", name: "MiniLinkedin" },
//     date: new Date().toISOString(),
//   };

//   return (
//     <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 gap-6">
      
//       {/* Left Side - Post Form */}
//       <div className="w-full md:w-1/3 py-6 md:py-14">
//         <PostForm onPostCreated={createPost} />
//       </div>

//       {/* Right Side - Posts */}
//       <div className="w-full md:w-2/3 p-2 overflow-y-auto flex flex-col">
//         <div>
//           <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center md:text-right">
//             Posts
//           </h3>
//         </div>

//         <div className="flex-1 overflow-y-auto p-2">
//           {isLoading ? (
//             <div className="flex justify-center overflow-y-auto py-10">
//               <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ) : (
//             <div className="space-y-4 overflow-y-auto">
//               {/* Always render Welcome Post first */}
//               <Post post={welcomePost} onDelete={null} />

//               {/* Then render user posts */}
//               {posts.length === 0 ? (
//                 <p className="text-center text-gray-600">No posts yet.</p>
//               ) : (
//                 posts.map((post) => (
//                   <Post key={post._id} post={post} onDelete={deletePost} />
//                 ))
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

const Home = () => {
  const { posts, getPosts, createPost, deletePost, isLoading } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    if (!isLoading) {
      getPosts();
    }
  }, [deletePost, isLoading, createPost, getPosts]);

  // Hardcoded Welcome Post (always shown at the top)
  const welcomePost = {
    _id: "welcome-1",
    text: "👋 Welcome to LinkedIn Mini! Start by creating your first post.",
    user: { _id: "user-1", name: "MiniLinkedin" },
    date: new Date().toISOString(),
  };

  // Pagination Logic
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 gap-6">
      
      {/* Left Side - Post Form */}
      <div className="w-full md:w-1/3 py-6 md:py-14">
        <PostForm onPostCreated={createPost} />
      </div>

      {/* Right Side - Posts */}
      <div className="w-full md:w-2/3 p-2 overflow-y-auto flex flex-col">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center md:text-right">
            Posts
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {isLoading ? (
            <div className="flex justify-center overflow-y-auto py-10">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-auto">
              {/* Always render Welcome Post first */}
              <Post post={welcomePost} onDelete={null} />

              {/* Then render paginated posts */}
              {totalPosts === 0 ? (
                <p className="text-center text-gray-600">No posts yet.</p>
              ) : (
                <>
                  {currentPosts.map((post) => (
                    <Post key={post._id} post={post} onDelete={deletePost} />
                  ))}

                  {/* Pagination Controls */}
                  {totalPages > 1 && (
                    <div className="flex justify-center gap-4 mt-4">
                      <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === 1
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        Previous
                      </button>
                      <span className="px-2 py-2 text-gray-700">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg ${
                          currentPage === totalPages
                            ? "bg-gray-300 cursor-not-allowed"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
