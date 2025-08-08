// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';

// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <AuthProvider>
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         <Navbar />
//         <main className="flex-grow container mx-auto px-4 py-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/profile/:userId" element={<Profile />} />
//             <Route
//               path="/login"
//               element={
//                 <AuthRoute navigate={navigate}>
//                   <Login navigate={navigate} />
//                 </AuthRoute>
//               }
//             />
//             <Route
//               path="/register"
//               element={
//                 <AuthRoute navigate={navigate}>
//                   <Register navigate={navigate} />
//                 </AuthRoute>
//               }
//             />
//           </Routes>
//         </main>
//         <footer className="bg-white border-t border-gray-200 py-4">
//           <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} Mini LinkedIn
//           </div>
//         </footer>
//       </div>
//     </AuthProvider>
//   );
// };

// export default AppWrapper;

// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <AuthProvider>
//       <div className="min-h-screen bg-gray-50 flex flex-col">
//         <Navbar />
//         <main className="flex-grow container mx-auto px-4 py-8">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/profile/:userId" element={<Profile />} />
//             <Route
//               path="/login"
//               element={
//                 <AuthRoute navigate={navigate}>
//                   <Login navigate={navigate} />
//                 </AuthRoute>
//               }
//             />
//             <Route
//               path="/register"
//               element={
//                 <AuthRoute navigate={navigate}>
//                   <Register navigate={navigate} />
//                 </AuthRoute>
//               }
//             />
//           </Routes>
//         </main>
//         <footer className="bg-white border-t border-gray-200 py-4">
//           <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
//             © {new Date().getFullYear()} Mini LinkedIn
//           </div>
//         </footer>
//       </div>
//     </AuthProvider>
//   );
// };

// export default AppWrapper;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import { AuthProvider } from './context/auth';
// import AuthRoute from './util/AuthRoute';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// const App = () => {
//   const navigate = useNavigate();

//   return (
//     <AuthProvider>
//       <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-blue-100 to-purple-100">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow container mx-auto px-4 py-10">
//           <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 max-w-5xl mx-auto transition-all duration-300 ease-in-out">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/profile/:userId" element={<Profile />} />
//               <Route
//                 path="/login"
//                 element={
//                   <AuthRoute navigate={navigate}>
//                     <Login navigate={navigate} />
//                   </AuthRoute>
//                 }
//               />
//               <Route
//                 path="/register"
//                 element={
//                   <AuthRoute navigate={navigate}>
//                     <Register navigate={navigate} />
//                   </AuthRoute>
//                 }
//               />
//             </Routes>
//           </div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-white/70 border-t border-gray-200 py-5 shadow-inner">
//           <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
//             © {new Date().getFullYear()} <span className="font-semibold">Mini LinkedIn</span>. All rights reserved.
//           </div>
//         </footer>
//       </div>
//     </AuthProvider>
//   );
// };

// export default AppWrapper;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const App = () => {
  const navigate = useNavigate();

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-200 via-fuchsia-200 to-cyan-100">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow w-full px-4 sm:px-6 py-6 sm:py-10">
          <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-sky-100 via-indigo-200 to-pink-200 shadow-xl rounded-2xl p-4 sm:p-8 transition-all duration-300 ease-in-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:userId" element={<Profile />} />
              <Route
                path="/login"
                element={
                  <AuthRoute navigate={navigate}>
                    <Login navigate={navigate} />
                  </AuthRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <AuthRoute navigate={navigate}>
                    <Register navigate={navigate} />
                  </AuthRoute>
                }
              />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/30 border-t border-gray-200 py-4 sm:py-5 text-center text-sm text-gray-600 shadow-inner">
          © {new Date().getFullYear()} <span className="font-semibold">Mini LinkedIn</span>. All rights reserved.
        </footer>
      </div>
    </AuthProvider>
  );
};

export default AppWrapper;
