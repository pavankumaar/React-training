import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { getFromCache, saveToCache, clearCache } from '../utils/apiCache';

// Create the context
const CompletionContext = createContext();

// API URL - Try to get from environment or use relative path
const API_URL = process.env.REACT_APP_API_URL || '/api';

// Cache key for topics
const TOPICS_CACHE_KEY = 'topicsCache';

// Custom hook to use the completion context
export const useCompletion = () => useContext(CompletionContext);



// Provider component
export const CompletionProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState({});
  const [loading, setLoading] = useState(true);
  const [usesFallback, setUsesFallback] = useState(false);
  const [statsUpdated, setStatsUpdated] = useState(0);
  const auth = useAuth();
  
  // Function to fetch completed topics from the database
  const fetchCompletedTopics = async (forceRefresh = false) => {
    try {
      setLoading(true);
      
      // Only fetch completed topics if user is admin
      if (auth && auth.isAdmin()) {
        // Use cache if available and not forcing refresh
        if (!forceRefresh) {
          const cachedTopics = getFromCache(TOPICS_CACHE_KEY);
          if (cachedTopics) {
            setCompletedTopics(cachedTopics);
            setLoading(false);
            return;
          }
        }
        
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
          // Update cache
          saveToCache(TOPICS_CACHE_KEY, topics);
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
      // If error, try to use cache
      const cachedTopics = getFromCache(TOPICS_CACHE_KEY);
      if (cachedTopics) {
        setCompletedTopics(cachedTopics);
      } else {
        // Just set an empty object if there's an error and no cache
        setCompletedTopics({});
      }
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
      
      // Clear the topics cache
      clearCache(TOPICS_CACHE_KEY);
      
      // Force refresh the cache
      await fetchCompletedTopics(true);
      
      // Increment statsUpdated to trigger a refresh of the stats
      setStatsUpdated(prev => prev + 1);
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
      
      // Clear the topics cache
      clearCache(TOPICS_CACHE_KEY);
      
      // Force refresh the cache
      await fetchCompletedTopics(true);
      
      // Increment statsUpdated to trigger a refresh of the stats
      setStatsUpdated(prev => prev + 1);
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
    usesFallback,
    statsUpdated
  };
  
  return (
    <CompletionContext.Provider value={value}>
      {children}
    </CompletionContext.Provider>
  );
};

export default CompletionContext;