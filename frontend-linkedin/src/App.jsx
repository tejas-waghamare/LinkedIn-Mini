

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
//       <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-200 via-fuchsia-200 to-cyan-100">
        
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow w-full px-4 sm:px-6 py-6 sm:py-10">
//           <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-sky-100 via-indigo-200 to-pink-200 shadow-xl rounded-2xl p-4 sm:p-8 transition-all duration-300 ease-in-out">
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
//         <footer className="bg-black/30 border-t border-gray-200 py-4 sm:py-5 text-center text-sm text-gray-600 shadow-inner">
//           © {new Date().getFullYear()} <span className="font-semibold">Mini LinkedIn</span>. All rights reserved.
//         </footer>
//       </div>
//     </AuthProvider>
//   );
// };

// export default AppWrapper;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import AdminProvider from './context/admin';
import AuthRoute from './util/AuthRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AboutTeam from './pages/AboutTeam';

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
    <AdminProvider>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-200 via-fuchsia-200 to-cyan-100">
          
          <Navbar />

          <main className="flex-grow w-full px-2 sm:px-6 py-6 sm:py-4">
            <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-sky-100 via-indigo-200 to-pink-200 shadow-xl rounded-2xl p-4 sm:p-8 transition-all duration-300 ease-in-out">
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

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/about" element={<AboutTeam />} />
              </Routes>

            </div>
          </main>

          <footer className="bg-black/30 border-t border-gray-200 py-4 sm:py-5 text-center text-sm text-gray-600 shadow-inner">
            © {new Date().getFullYear()} <span className="font-semibold">Mini LinkedIn</span>. All rights reserved.
          </footer>
        </div>
      </AuthProvider>
    </AdminProvider>
  );
};

export default AppWrapper;
