import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useCompletion } from '../context/CompletionContext';
import { useAuth } from '../context/AuthContext';

const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.completed ? 'var(--success-color)' : 'var(--primary-color)'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color var(--transition-speed) ease;
  margin-top: 1rem;
  opacity: ${props => props.disabled ? 0.7 : 1};
  
  &:hover {
    background-color: ${props => props.completed ? '#27ae60' : '#2980b9'};
  }
`;

const CompleteButton = () => {
  const location = useLocation();
  const topicPath = location.pathname;
  const { isTopicCompleted, markAsCompleted, markAsNotCompleted, loading } = useCompletion();
  const { isAdmin } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // If user is not admin, don't render the button
  if (!isAdmin()) {
    return null;
  }
  
  const completed = isTopicCompleted(topicPath);
  
  const handleClick = async () => {
    if (isUpdating || loading) return;
    
    setIsUpdating(true);
    // Toggle completion status
    if (completed) {
      await markAsNotCompleted(topicPath);
    } else {
      await markAsCompleted(topicPath);
    }
    setIsUpdating(false);
  };
  
  return (
    <Button 
      completed={completed} 
      onClick={handleClick}
      disabled={isUpdating || loading}
    >
      {isUpdating 
        ? 'Updating...' 
        : completed 
          ? 'Completed ✓' 
          : 'Mark as Complete'
      }
    </Button>
  );
};

export default CompleteButton;