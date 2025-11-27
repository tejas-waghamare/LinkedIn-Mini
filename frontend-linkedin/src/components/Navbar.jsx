


// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth';
// import { AdminContext } from '../context/admin';
// import { LogOut, User, Home, LogIn, UserPlus, Menu, X } from 'lucide-react';
// import Logo from '../assets/MinLogo4.png';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const { admin, adminLogout } = useContext(AdminContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl flex ml-0 sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
//         >
//           <img src={Logo} alt="" className='h-10 mx-5 animate-bounce' />
//           MiniLinkedIn
//         </Link>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-4 text-sm sm:text-base font-medium">

//           <Link
//             to="/"
//             className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
//           >
//             <Home size={18} />
//             Home
//           </Link>

//           {/* ✅ ADMIN PANEL BUTTON */}
//           {admin && (
//             <Link
//               to="/admin/dashboard"
//               className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white hover:opacity-90 transition"
//             >
//               🛡 Admin Panel
//             </Link>
//           )}

//           {/* USER CONTROLS */}
//           {user ? (
//             <>
//               <Link
//                 to={`/profile/${user._id}`}
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
//               >
//                 <User size={18} />
//                 Profile
//               </Link>

//               <button
//                 onClick={() => {
//                   logout(navigate);
//                   closeMenu();
//                 }}
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white transition"
//               >
//                 <LogIn size={18} />
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
//               >
//                 <UserPlus size={18} />
//                 Register
//               </Link>
//             </>
//           )}

//           {/* ✅ ADMIN LOGOUT */}
//           {admin && (
//             <button
//               onClick={() => adminLogout(navigate)}
//               className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-700 border border-red-400 hover:bg-red-600 hover:text-white transition"
//             >
//               <LogOut size={18} />
//               Admin Logout
//             </button>
//           )}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-2">

//           <Link
//             to="/"
//             onClick={closeMenu}
//             className="block px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
//           >
//             <Home size={18} className="inline mr-2" />
//             Home
//           </Link>

//           {/* ✅ ADMIN PANEL MOBILE */}
//           {admin && (
//             <Link
//               to="/admin/dashboard"
//               onClick={closeMenu}
//               className="block px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white"
//             >
//               🛡 Admin Panel
//             </Link>
//           )}

//           {user ? (
//             <>
//               <Link
//                 to={`/profile/${user._id}`}
//                 onClick={closeMenu}
//                 className="block px-4 py-2 rounded-lg text-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 transition"
//               >
//                 <User size={18} className="inline mr-2" />
//                 Profile
//               </Link>

//               <button
//                 onClick={() => {
//                   logout(navigate);
//                   closeMenu();
//                 }}
//                 className="w-full text-left px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white transition"
//               >
//                 <LogOut size={18} className="inline mr-2" />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 onClick={closeMenu}
//                 className="block px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white transition"
//               >
//                 <LogIn size={18} className="inline mr-2" />
//                 Login
//               </Link>

//               <Link
//                 to="/register"
//                 onClick={closeMenu}
//                 className="block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition"
//               >
//                 <UserPlus size={18} className="inline mr-2" />
//                 Register
//               </Link>
//             </>
//           )}

//           {/* ✅ ADMIN LOGOUT MOBILE */}
//           {admin && (
//             <button
//               onClick={() => adminLogout(navigate)}
//               className="w-full text-left px-4 py-2 rounded-lg text-red-700 border border-red-400 hover:bg-red-600 hover:text-white"
//             >
//               <LogOut size={18} className="inline mr-2" />
//               Admin Logout
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth';
// import { AdminContext } from '../context/admin';
// import { LogOut, User, Home, LogIn, UserPlus, Menu, X, Shield } from 'lucide-react';
// import Logo from '../assets/MinLogo4.png';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);
//   const { admin, adminLogout } = useContext(AdminContext);
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl flex sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"
//         >
//           <img src={Logo} alt="" className='h-10 mx-5 animate-bounce' />
//           MiniLinkedIn
//         </Link>

//         {/* Hamburger */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* ================= DESKTOP MENU ================= */}
//         <div className="hidden md:flex items-center gap-4 font-medium">

//           <Link
//             to="/"
//             className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition"
//           >
//             <Home size={18} /> Home
//           </Link>

//           {/* ✅ ADMIN LOGIN BUTTON (when no admin session) */}
//           {!admin && (
//             <Link
//               to="/admin/login"
//               className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
//             >
//               <Shield size={18} />
//               Admin Login
//             </Link>
//           )}

//           {/* ✅ SHOW WHEN ADMIN LOGGED IN */}
//           {admin && (
//             <>
//               <Link
//                 to="/admin/dashboard"
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-800 text-white"
//               >
//                 🛡 Admin Panel
//               </Link>

//               <button
//                 onClick={() => adminLogout(navigate)}
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-400 hover:bg-red-600 hover:text-white transition"
//               >
//                 <LogOut size={18} />
//                 Admin Logout
//               </button>
//             </>
//           )}

//           {/* ✅ USER CONTROLS (hidden when admin is logged in) */}
//           {!admin && user && (
//             <>
//               <Link
//                 to={`/profile/${user._id}`}
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white transition"
//               >
//                 <User size={18} />
//                 Profile
//               </Link>

//               <button
//                 onClick={() => logout(navigate)}
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white transition"
//               >
//                 <LogOut size={18} />
//                 Logout
//               </button>
//             </>
//           )}

//           {/* ✅ USER LOGIN & REGISTER (ONLY when no admin and no user) */}
//           {!admin && !user && (
//             <>
//               <Link
//                 to="/login"
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white transition"
//               >
//                 <LogIn size={18} />
//                 Login
//               </Link>

//               <Link
//                 to="/register"
//                 className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
//               >
//                 <UserPlus size={18} />
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {menuOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-2">

//           <Link to="/" onClick={closeMenu} className="block px-4 py-2">Home</Link>

//           {!admin && (
//             <Link to="/admin/login" onClick={closeMenu} className="block px-4 py-2 bg-red-600 text-white rounded-lg">
//               🛡 Admin Login
//             </Link>
//           )}

//           {admin && (
//             <>
//               <Link to="/admin/dashboard" onClick={closeMenu} className="block px-4 py-2 bg-red-700 text-white">
//                 Admin Panel
//               </Link>
//               <button
//                 onClick={() => adminLogout(navigate)}
//                 className="block w-full text-left px-4 py-2 text-red-600"
//               >
//                 Admin Logout
//               </button>
//             </>
//           )}

//           {!admin && user && (
//             <>
//               <Link to={`/profile/${user._id}`} onClick={closeMenu}>Profile</Link>
//               <button onClick={() => logout(navigate)} className="block">Logout</button>
//             </>
//           )}

//           {!admin && !user && (
//             <>
//               <Link to="/login" onClick={closeMenu}>Login</Link>
//               <Link to="/register" onClick={closeMenu}>Register</Link>
//             </>
//           )}

//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { AdminContext } from '../context/admin';
import { LogOut, User, Home, LogIn, UserPlus, Menu, X, Shield } from 'lucide-react';
import Logo from '../assets/MinLogo4.png';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { admin, adminLogout } = useContext(AdminContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // ✅ show admin login ONLY on login & register pages
  const showAdminLoginButton =
    !user &&
    !admin &&
    (location.pathname === "/login" || location.pathname === "/register");

  return (
    <nav className="bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl flex sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          <img src={Logo} alt="" className='h-10 mx-5 animate-bounce' />
          MiniLinkedIn
        </Link>

        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-4 font-medium">

          <Link to="/" className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white">
            <Home size={18} /> Home
          </Link>

          {/* ✅ Admin Login only on login/register page */}
          {showAdminLoginButton && (
            <Link to="/admin/login" className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-600 text-white">
              <Shield size={18} />
              Admin Login
            </Link>
          )}

          {/* ✅ Admin Logged In */}
          {admin && (
            <>
              <Link to="/admin/dashboard" className="flex items-center gap-1 px-4 py-2 rounded-lg bg-red-700 text-white">
                🛡 Admin Panel
              </Link>
              <button onClick={() => adminLogout(navigate)} className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-400 hover:bg-red-600 hover:text-white">
                <LogOut size={18} />
                Admin Logout
              </button>
            </>
          )}

          {/* ✅ User Logged In */}
          {!admin && user && (
            <>
              <Link to={`/profile/${user._id}`} className="flex items-center gap-1 px-4 py-2 rounded-lg">
                <User size={18} /> Profile
              </Link>

              <button onClick={() => logout(navigate)} className="flex items-center gap-1 px-4 py-2 rounded-lg text-red-600 border border-red-300 hover:bg-red-600 hover:text-white">
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

          {/* ✅ Normal Login/Register */}
          {!admin && !user && (
            <>
              <Link to="/login" className="flex items-center gap-1 px-4 py-2 rounded-lg text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white">
                <LogIn size={18} />
                Login
              </Link>
              <Link to="/register" className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <UserPlus size={18} />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
