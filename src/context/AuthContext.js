import React, { createContext, useState, useContext, useEffect } from 'react';
import CryptoJS from 'crypto-js';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Secret key for encryption (in a real app, this would be an environment variable)
const SECRET_KEY = 'react-training-app-secret-key-2024';

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('user'); // Default to regular user
  
  // Check if user is authenticated on initial load
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      // Verify the auth token
      const token = localStorage.getItem('authToken');
      if (token) {
        const tokenData = verifyToken(token);
        if (tokenData) {
          setIsAuthenticated(true);
          setUserRole(tokenData.role);
        } else {
          // Token is invalid or expired, log out
          setIsAuthenticated(false);
          setUserRole('user');
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('authToken');
          localStorage.removeItem('userRole');
          localStorage.removeItem('isAdmin');
        }
      } else {
        // No token found, but isAuthenticated is true (legacy)
        setIsAuthenticated(true);
        
        // For backward compatibility, check userRole
        const storedRole = localStorage.getItem('userRole');
        if (storedRole) {
          setUserRole(storedRole);
          
          // Generate a token for this session
          const newToken = generateSecureToken(storedRole);
          localStorage.setItem('authToken', newToken);
        }
      }
    }
    
    // Listen for storage events to sync auth state across tabs
    const handleStorageChange = (e) => {
      if (e.key === 'isAuthenticated') {
        setIsAuthenticated(e.newValue === 'true');
      }
      if (e.key === 'authToken') {
        if (e.newValue) {
          const tokenData = verifyToken(e.newValue);
          if (tokenData) {
            setUserRole(tokenData.role);
          }
        } else {
          setUserRole('user');
        }
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  // Generate a secure token with expiration
  const generateSecureToken = (role) => {
    const now = new Date();
    const expirationTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours
    
    const tokenData = {
      role: role,
      exp: expirationTime.getTime(),
      iat: now.getTime()
    };
    
    // Encrypt the token
    return CryptoJS.AES.encrypt(JSON.stringify(tokenData), SECRET_KEY).toString();
  };
  
  // Verify and decode a token
  const verifyToken = (token) => {
    try {
      // Decrypt the token
      const bytes = CryptoJS.AES.decrypt(token, SECRET_KEY);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      
      // Check if token is expired
      const now = new Date().getTime();
      if (decryptedData.exp < now) {
        return null;
      }
      
      return decryptedData;
    } catch (error) {
      return null;
    }
  };
  
  // Login function with role parameter
  const login = (role = 'user') => {
    setIsAuthenticated(true);
    setUserRole(role);
    
    // Generate secure token
    const token = generateSecureToken(role);
    
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('authToken', token);
    
    // For backward compatibility
    if (role === 'admin') {
      localStorage.setItem('isAdmin', 'true');
    } else {
      localStorage.removeItem('isAdmin');
    }
  };
  
  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('isAdmin');
  };
  
  // Check if user is admin - verify using the secure token
  const isAdmin = () => {
    // First check state
    if (userRole === 'admin') {
      return true;
    }
    
    // Then verify token
    const token = localStorage.getItem('authToken');
    if (token) {
      const tokenData = verifyToken(token);
      return tokenData && tokenData.role === 'admin';
    }
    
    return false;
  };
  
  // Value to be provided by the context
  const value = {
    isAuthenticated,
    userRole,
    login,
    logout,
    isAdmin
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;