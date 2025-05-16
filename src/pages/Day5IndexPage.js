import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import TopicCard from '../components/TopicCard';
import Navigation from '../components/Navigation';

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

const Day5IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day5_functions',
      'completed_day5_arrays-objects',
      'completed_day5_loops'
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
        prevLink="/day4" 
        nextLink="/"
        title="Day 5: JavaScript Fundamentals - Part 2"
        subtitle="Advanced JavaScript concepts including functions, arrays, objects, and loops."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="Functions"
          description="Learn about JavaScript functions, including declarations, expressions, arrow functions, and closures."
          link="/day5/functions"
          completed={completedTopics['completed_day5_functions']}
        />
        
        <TopicCard 
          title="Arrays and Objects"
          description="Explore JavaScript arrays and objects, including creation, manipulation, and common methods."
          link="/day5/arrays-objects"
          completed={completedTopics['completed_day5_arrays-objects']}
        />
        
        <TopicCard 
          title="Loops (for, forEach, map)"
          description="Learn about different types of loops in JavaScript and how to use array methods for iteration."
          link="/day5/loops"
          completed={completedTopics['completed_day5_loops']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day5IndexPage;