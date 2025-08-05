// // src/util/AuthRoute.jsx
// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth';

// const AuthRoute = ({ children, navigate }) => {
//   const { user } = useContext(AuthContext);
  
//   if (user) {
//     return <Navigate to="/" replace />;
//   }

//   return React.cloneElement(children, { navigate });
// };

// export default AuthRoute;

// util/AuthRoute.jsx
// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../context/auth';

// const AuthRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);

//   if (user) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default AuthRoute;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const AuthRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div className="text-center text-gray-600 py-8">Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRoute;