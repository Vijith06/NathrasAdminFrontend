import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authData = JSON.parse(localStorage.getItem('auth'));

  // Check if the user is logged in and if the session is valid
  if (!authData || !authData.loggedIn || Date.now() > authData.expiry) {
    // Remove invalid auth data if expired
    localStorage.removeItem('auth');
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, show the requested component
};

export default PrivateRoute;
