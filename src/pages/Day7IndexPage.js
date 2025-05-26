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

const Day7IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day7_arrow-functions-template-literals',
      'completed_day7_destructuring-spread-rest',
      'completed_day7_array-methods'
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
        prevLink="/day6" 
        nextLink="/"
        title="Day 7: ES6+ Features"
        subtitle="Explore modern JavaScript features introduced in ES6 and beyond that make code more concise and powerful."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="Arrow Functions & Template Literals"
          description="Learn about concise function syntax and improved string formatting in modern JavaScript."
          link="/day7/arrow-functions-template-literals"
          completed={completedTopics['completed_day7_arrow-functions-template-literals']}
        />
        
        <TopicCard 
          title="Destructuring, Spread & Rest"
          description="Understand powerful ways to extract values from arrays and objects, and how to use the spread and rest operators."
          link="/day7/destructuring-spread-rest"
          completed={completedTopics['completed_day7_destructuring-spread-rest']}
        />
        
        <TopicCard 
          title="Array Methods: map, filter, reduce"
          description="Master functional programming techniques with powerful array methods for transforming and processing data."
          link="/day7/array-methods"
          completed={completedTopics['completed_day7_array-methods']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day7IndexPage;