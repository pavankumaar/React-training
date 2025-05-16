import React, { createContext, useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Create context
const ToastContext = createContext();

// Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning'
};

// Animation for toast
const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

// Toast container
const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Toast item
const ToastItem = styled.div`
  min-width: 250px;
  max-width: 350px;
  margin-top: 10px;
  padding: 12px 16px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${props => props.isExiting ? slideOut : slideIn} 0.3s ease forwards;
  background-color: ${props => {
    switch (props.type) {
      case TOAST_TYPES.SUCCESS:
        return 'var(--success-color, #2ecc71)';
      case TOAST_TYPES.ERROR:
        return 'var(--danger-color, #e74c3c)';
      case TOAST_TYPES.WARNING:
        return 'var(--warning-color, #f39c12)';
      case TOAST_TYPES.INFO:
      default:
        return 'var(--primary-color, #3498db)';
    }
  }};
  color: white;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
  }
`;

// Toast provider component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // Add a new toast
  const addToast = (message, type = TOAST_TYPES.INFO, duration = 5000) => {
    const id = Date.now();
    const newToast = { id, message, type, isExiting: false };
    
    setToasts(prevToasts => [...prevToasts, newToast]);
    
    // Auto remove toast after duration
    if (duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
    
    return id;
  };

  // Mark toast for removal with exit animation
  const removeToast = (id) => {
    setToasts(prevToasts => 
      prevToasts.map(toast => 
        toast.id === id ? { ...toast, isExiting: true } : toast
      )
    );
    
    // Remove from state after animation completes
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, 300); // Match animation duration
  };

  // Convenience methods for different toast types
  const showSuccess = (message, duration) => addToast(message, TOAST_TYPES.SUCCESS, duration);
  const showError = (message, duration) => addToast(message, TOAST_TYPES.ERROR, duration);
  const showInfo = (message, duration) => addToast(message, TOAST_TYPES.INFO, duration);
  const showWarning = (message, duration) => addToast(message, TOAST_TYPES.WARNING, duration);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, showSuccess, showError, showInfo, showWarning }}>
      {children}
      <ToastContainer>
        {toasts.map(toast => (
          <ToastItem key={toast.id} type={toast.type} isExiting={toast.isExiting}>
            <span>{toast.message}</span>
            <CloseButton onClick={() => removeToast(toast.id)}>×</CloseButton>
          </ToastItem>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

// Custom hook to use the toast context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastContext;