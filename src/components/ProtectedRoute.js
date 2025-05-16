import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isLocalAuth, setIsLocalAuth] = useState(false);

  useEffect(() => {
    // Check localStorage directly to handle new tab cases
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsLocalAuth(authStatus === 'true');
    setIsChecking(false);
    
    // Log for debugging
    if (!isAuthenticated && authStatus !== 'true' && location.pathname !== '/login') {
      console.log('User not authenticated, redirecting to login');
    }
  }, [isAuthenticated, location.pathname]);

  // Show nothing while checking authentication to prevent flicker
  if (isChecking) {
    return null;
  }

  // Use either context auth or local storage auth
  if (!isAuthenticated && !isLocalAuth) {
    // Save the current location to redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;