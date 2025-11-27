import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import PostForm from '../components/PostForm';
import Post from '../components/Post';
import avtar from '../assets/MinLogo4.png';
import { 
  PlusCircle, 
  TrendingUp, 
  Users, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  Rocket
} from 'lucide-react';

const Home = () => {
  const { posts, getPosts, createPost, deletePost, isLoading } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    if (!isLoading) {
      getPosts();
    }
  }, [deletePost, isLoading, createPost, getPosts]);

  // Attractive Welcome Post
  const welcomePost = {
    _id: "welcome-1",
    text: "🚀 Welcome to LinkedIn Mini! This is your professional playground. Share your achievements, connect with others, and grow your network. Start by creating your first post below!",
    user: { 
  _id: "team",
  name: "LinkedIn Mini Team",
  avatar: avtar,
  isTeam: true
},

    date: new Date().toISOString(),
    isWelcome: true
  };

  // Stats for the header
  const stats = [
    { icon: Users, value: posts.length, label: 'Total Posts' },
    { icon: TrendingUp, value: Math.ceil(posts.length * 2.3), label: 'Engagements' },
    { icon: Sparkles, value: 'New', label: 'Community' }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">LinkedIn Mini</h1>
                <p className="text-gray-600 text-sm">Your professional community</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="hidden md:flex items-center space-x-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <stat.icon className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-900">{stat.value}</span>
                  </div>
                  <span className="text-xs text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Side - Post Form Card */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <PlusCircle className="w-6 h-6 text-white" />
                    <h2 className="text-xl font-bold text-white">Create Post</h2>
                  </div>
                  <p className="text-blue-100 text-sm mt-1">
                    Share what's on your mind with the community
                  </p>
                </div>
                
                {/* Post Form */}
                <div className="p-6">
                  <PostForm onPostCreated={createPost} />
                </div>
                
                {/* Tips */}
                <div className="bg-blue-50 border-t border-blue-100 px-6 py-4">
                  <h4 className="font-semibold text-blue-900 text-sm mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Pro Tips
                  </h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Share your professional achievements</li>
                    <li>• Ask thoughtful questions</li>
                    <li>• Engage with others' posts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Posts Feed */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Feed Header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">Community Feed</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4" />
                    <span>Latest updates</span>
                  </div>
                </div>
              </div>

              {/* Posts Container */}
              <div className="p-6">
                {isLoading ? (
                  <div className="flex justify-center items-center py-12">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-gray-600">Loading posts...</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Welcome Post with special styling */}
                    <div className="relative">
                      <div className="absolute -left-2 top-3 w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                      <Post 
                        post={welcomePost} 
                        onDelete={null}
                        className="border-2 border-blue-100 bg-blue-50"
                      />
                    </div>

                    {/* User Posts */}
                    {totalPosts === 0 ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          No posts yet
                        </h4>
                        <p className="text-gray-600 max-w-sm mx-auto">
                          Be the first to share something with the community!
                        </p>
                      </div>
                    ) : (
                      <>
                        {currentPosts.map((post, index) => (
                          <div key={post._id} className="relative group">
                            {index === 0 && currentPage === 1 && (
                              <div className="absolute -left-3 top-4 w-1 h-8 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}
                            <Post post={post} onDelete={deletePost} />
                          </div>
                        ))}

                        {/* Pagination */}
                        {totalPages > 1 && (
                          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                            <button
                              onClick={handlePrev}
                              disabled={currentPage === 1}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                                currentPage === 1
                                  ? "text-gray-400 cursor-not-allowed"
                                  : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                            >
                              <ArrowLeft className="w-4 h-4" />
                              <span>Previous</span>
                            </button>
                            
                            <div className="flex items-center space-x-2">
                              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                                    currentPage === page
                                      ? "bg-blue-600 text-white"
                                      : "text-gray-600 hover:bg-gray-100"
                                  }`}
                                >
                                  {page}
                                </button>
                              ))}
                            </div>

                            <button
                              onClick={handleNext}
                              disabled={currentPage === totalPages}
                              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                                currentPage === totalPages
                                  ? "text-gray-400 cursor-not-allowed"
                                  : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                            >
                              <span>Next</span>
                              <ArrowRight className="w-4 h-4" />
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
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useContext, useState } from 'react';
// import { AuthContext } from '../context/auth';
// import PostForm from '../components/PostForm';
// import Post from '../components/Post';

// const Home = () => {
//   const { posts, getPosts, createPost, deletePost, isLoading, user } = useContext(AuthContext);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [showPostModal, setShowPostModal] = useState(false);

//   const postsPerPage = 5;

//   useEffect(() => {
//     if (!isLoading) {
//       getPosts();
//     }
//   }, [isLoading, getPosts]);

//   const welcomePost = {
//     _id: "welcome-1",
//     text: "👋 Welcome to LinkedIn Mini! Start by creating your first post.",
//     user: { _id: "user-1", name: "MiniLinkedIn" },
//     date: new Date().toISOString(),
//   };

//   const totalPosts = posts.length;
//   const totalPages = Math.ceil(totalPosts / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">

//       {/* CREATE POST CARD */}
//       {user && (
//         <div
//           onClick={() => setShowPostModal(true)}
//           className="bg-white rounded-xl shadow p-4 cursor-pointer hover:bg-gray-50 transition"
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
//               {user.name.charAt(0)}
//             </div>
//             <div className="flex-1 text-gray-500 border rounded-full px-4 py-2">
//               Start a post...
//             </div>
//           </div>
//         </div>
//       )}

//       {/* POSTS */}
//       <div className="space-y-4">
//         <Post post={welcomePost} onDelete={null} />

//         {isLoading ? (
//           <div className="flex justify-center py-10">
//             <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//         ) : (
//           <>
//             {currentPosts.map(post => (
//               <Post key={post._id} post={post} onDelete={deletePost} />
//             ))}

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center gap-4 mt-4">
//                 <button
//                   onClick={() => setCurrentPage(p => p - 1)}
//                   disabled={currentPage === 1}
//                   className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
//                 >
//                   Previous
//                 </button>
//                 <span className="px-2 py-2">
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => setCurrentPage(p => p + 1)}
//                   disabled={currentPage === totalPages}
//                   className="px-4 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>

//       {/* CREATE POST MODAL */}
//       {showPostModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-lg">
//             <h2 className="text-lg font-semibold mb-4">Create a post</h2>

//             <PostForm
//               onPostCreated={(text) => {
//                 createPost(text);
//                 setShowPostModal(false);
//               }}
//             />

//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={() => setShowPostModal(false)}
//                 className="px-4 py-2 border rounded hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
