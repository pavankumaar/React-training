import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

// Create the context
const CompletionContext = createContext();

// API URL - Try to get from environment or use relative path
const API_URL = process.env.REACT_APP_API_URL || '/api';

// Custom hook to use the completion context
export const useCompletion = () => useContext(CompletionContext);



// Provider component
export const CompletionProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState({});
  const [loading, setLoading] = useState(true);
  const [usesFallback, setUsesFallback] = useState(false);
  const auth = useAuth();
  
  // Function to fetch completed topics from the database
  const fetchCompletedTopics = async () => {
    try {
      setLoading(true);
      
      // Only fetch completed topics if user is admin
      if (auth && auth.isAdmin()) {
        const response = await axios.get(`${API_URL}/topics`, { timeout: 10000 });
        
        const topics = {};
        if (Array.isArray(response.data)) {
          response.data.forEach(topic => {
            if (topic && topic.completed) {
              topics[topic.topic_path] = true;
            }
          });
          
          // Always use the API data, even if empty
          setCompletedTopics(topics);
          setUsesFallback(false);
        } else {
          // Just set an empty object
          setCompletedTopics({});
          setUsesFallback(false);
        }
      } else {
        // For non-admin users, just set an empty object
        setCompletedTopics({});
        setUsesFallback(false);
      }
    } catch (error) {
      // Just set an empty object if there's an error
      setCompletedTopics({});
      setUsesFallback(false);
    } finally {
      setLoading(false);
    }
  };
  
  // Load completed topics from server on initial render and when auth changes
  useEffect(() => {
    fetchCompletedTopics();
  }, [auth?.isAdmin()]); // Re-fetch when admin status changes
  
  // Function to mark a topic as completed
  const markAsCompleted = async (topicPath) => {
    // Only allow admin users to mark topics as completed
    if (!auth || !auth.isAdmin()) {
      return;
    }
    
    try {
      setLoading(true);
      await axios.post(`${API_URL}/topics`, {
        topicPath,
        completed: true
      }, {
        timeout: 10000
      });
      
      // Fetch the updated list from the database
      await fetchCompletedTopics();
    } catch (error) {
      // Handle error silently and ensure loading state is reset
      setLoading(false);
    }
  };
  
  // Function to mark a topic as not completed
  const markAsNotCompleted = async (topicPath) => {
    // Only allow admin users to mark topics as not completed
    if (!auth || !auth.isAdmin()) {
      return;
    }
    
    try {
      setLoading(true);
      await axios.post(`${API_URL}/topics`, {
        topicPath,
        completed: false
      }, {
        timeout: 10000
      });
      
      // Fetch the updated list from the database
      await fetchCompletedTopics();
    } catch (error) {
      // Handle error silently and ensure loading state is reset
      setLoading(false);
    }
  };
  
  // Function to check if a topic is completed
  const isTopicCompleted = (topicPath) => {
    // Only show completion status for admin users
    if (!auth || !auth.isAdmin()) {
      return false;
    }
    return completedTopics[topicPath] === true;
  };
  
  // Value to be provided by the context
  const value = {
    completedTopics,
    markAsCompleted,
    markAsNotCompleted,
    isTopicCompleted,
    loading,
    refreshTopics: fetchCompletedTopics,
    usesFallback
  };
  
  return (
    <CompletionContext.Provider value={value}>
      {children}
    </CompletionContext.Provider>
  );
};

export default CompletionContext;