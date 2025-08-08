

// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/auth';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const { name, email, password, password2 } = formData;

//   const onChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (errors[e.target.name] || errors.msg) {
//       setErrors({ ...errors, [e.target.name]: '', msg: '' });
//     }
//   };

//   const validateEmail = (email) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const newErrors = {};
//     if (!name.trim()) newErrors.name = 'Name is required';
//     if (!email) newErrors.email = 'Email is required';
//     else if (!validateEmail(email)) newErrors.email = 'Invalid email';
//     if (!password) newErrors.password = 'Password is required';
//     else if (password.length < 6) newErrors.password = 'Must be at least 6 characters';
//     if (password !== password2) newErrors.password2 = 'Passwords do not match';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const success = await register({ name, email, password });
//       if (success !== false) {
//         navigate('/login');
//       }
//     } catch (err) {
//       setErrors(err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
//           Create Account
//         </h2>

//         {errors.msg && (
//           <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded text-center text-sm">
//             {errors.msg}
//           </div>
//         )}

//         <form onSubmit={onSubmit} className="space-y-5">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={name}
//               onChange={onChange}
//               disabled={isSubmitting}
//               className={`w-full px-4 py-2 border ${
//                 errors.name ? 'border-red-500' : 'border-gray-300'
//               } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>

//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={onChange}
//               disabled={isSubmitting}
//               className={`w-full px-4 py-2 border ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={onChange}
//               disabled={isSubmitting}
//               className={`w-full px-4 py-2 border ${
//                 errors.password ? 'border-red-500' : 'border-gray-300'
//               } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//           </div>

//           <div>
//             <input
//               type="password"
//               name="password2"
//               placeholder="Confirm Password"
//               value={password2}
//               onChange={onChange}
//               disabled={isSubmitting}
//               className={`w-full px-4 py-2 border ${
//                 errors.password2 ? 'border-red-500' : 'border-gray-300'
//               } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
//             />
//             {errors.password2 && (
//               <p className="text-red-500 text-sm mt-1">{errors.password2}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-200"
//           >
//             {isSubmitting ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         <div className="mt-6 text-sm text-center text-gray-600">
//           Already have an account?{' '}
//           <span
//             className="text-purple-600 hover:underline cursor-pointer"
//             onClick={() => navigate('/login')}
//           >
//             Login
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name] || errors.msg) {
      setErrors({ ...errors, [e.target.name]: '', msg: '' });
    }
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Must be at least 6 characters';
    if (password !== password2) newErrors.password2 = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const success = await register({ name, email, password });
      if (success !== false) {
        alert('User registered successfully!');
        navigate('/login');
      }
    } catch (err) {
      setErrors(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 🔄 Full-screen loading spinner */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center">
          <svg
            className="animate-spin h-20 w-20 text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
         <span className='text-3xl py-5 font-serif text-sky-400  animate-pulse'>Registering User...</span>

        </div>
      )}

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-purple-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
            Create Account
          </h2>

          {errors.msg && (
            <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded text-center text-sm">
              {errors.msg}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password2"
                placeholder="Confirm Password"
                value={password2}
                onChange={onChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 border ${
                  errors.password2 ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
              />
              {errors.password2 && (
                <p className="text-red-500 text-sm mt-1">{errors.password2}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <span
              className="text-purple-600 hover:underline cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
