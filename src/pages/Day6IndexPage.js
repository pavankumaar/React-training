import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import TopicCard from '../components/TopicCard';
import Navigation from '../components/Navigation';

const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

const Day6IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day6_getelementbyid-queryselector',
      'completed_day6_event-handling',
      'completed_day6_modifying-dom'
    ];
    
    const completed = {};
    
    topicKeys.forEach(key => {
      completed[key] = localStorage.getItem(key) === 'true';
    });
    
    setCompletedTopics(completed);
  }, []);
  
  return (
    <Layout>
      <Navigation 
        prevLink="/day5" 
        nextLink="/day7"
        title="Day 6: DOM Manipulation"
        subtitle="Learn how to interact with and modify the Document Object Model (DOM) using JavaScript."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="getElementById, querySelector"
          description="Learn how to select and access DOM elements using various selector methods."
          link="/day6/getelementbyid-queryselector"
          completed={completedTopics['completed_day6_getelementbyid-queryselector']}
        />
        
        <TopicCard 
          title="Event Handling with addEventListener"
          description="Understand how to handle user interactions by attaching event listeners to DOM elements."
          link="/day6/event-handling"
          completed={completedTopics['completed_day6_event-handling']}
        />
        
        <TopicCard 
          title="Modifying DOM Elements"
          description="Learn how to dynamically create, modify, and remove elements from the DOM."
          link="/day6/modifying-dom"
          completed={completedTopics['completed_day6_modifying-dom']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day6IndexPage;