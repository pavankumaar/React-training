import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

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
  
  // Function to fetch completed topics from the database
  const fetchCompletedTopics = async () => {
    try {
      setLoading(true);
      console.log('Fetching completed topics from:', `${API_URL}/topics`);
      
      const response = await axios.get(`${API_URL}/topics`, { timeout: 8000 });
      console.log('Topics API response:', response.data);
      
      const topics = {};
      if (Array.isArray(response.data)) {
        response.data.forEach(topic => {
          if (topic && topic.completed) {
            topics[topic.topic_path] = true;
            console.log('Marked as completed:', topic.topic_path);
          }
        });
        
        // Always use the API data, even if empty
        console.log('Using API data for completed topics');
        setCompletedTopics(topics);
        setUsesFallback(false);
      } else {
        console.error('Unexpected response format:', response.data);
        // Just set an empty object
        setCompletedTopics({});
        setUsesFallback(false);
      }
    } catch (error) {
      console.error('Error loading completed topics:', error);
      console.error('Error details:', error.message);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }
      
      // Just set an empty object if there's an error
      setCompletedTopics({});
      setUsesFallback(false);
    } finally {
      setLoading(false);
    }
  };
  
  // Load completed topics from server on initial render
  useEffect(() => {
    fetchCompletedTopics();
  }, []);
  
  // Function to mark a topic as completed
  const markAsCompleted = async (topicPath) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/topics`, {
        topicPath,
        completed: true
      });
      
      // Fetch the updated list from the database
      await fetchCompletedTopics();
    } catch (error) {
      console.error('Error marking topic as completed:', error);
    }
  };
  
  // Function to mark a topic as not completed
  const markAsNotCompleted = async (topicPath) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/topics`, {
        topicPath,
        completed: false
      });
      
      // Fetch the updated list from the database
      await fetchCompletedTopics();
    } catch (error) {
      console.error('Error marking topic as not completed:', error);
    }
  };
  
  // Function to check if a topic is completed
  const isTopicCompleted = (topicPath) => {
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