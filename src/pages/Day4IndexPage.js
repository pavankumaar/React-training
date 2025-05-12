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
  gap: 1.5rem;
`;

const Day4IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day4_variables',
      'completed_day4_data-types',
      'completed_day4_operators-conditionals'
    ];
    
    const completed = {};
    
    topicKeys.forEach(key => {
      completed[key] = localStorage.getItem(key) === 'true';
    });
    
    setCompletedTopics(completed);
  }, []);
  
  return (
    <Layout>
      <Navigation prevLink="/day3" nextLink="/day5" />
      
      <Title>Day 4: JavaScript Fundamentals - Part 1</Title>
      <Description>
        Introduction to JavaScript variables, data types, operators, and conditional statements.
      </Description>
      
      <TopicsContainer>
        <TopicCard 
          title="Variables (let, const)"
          description="Learn about JavaScript variables, including declaration, initialization, and scope using let and const."
          link="/day4/variables"
          completed={completedTopics['completed_day4_variables']}
        />
        
        <TopicCard 
          title="Data Types"
          description="Explore JavaScript's primitive and reference data types, including strings, numbers, booleans, and objects."
          link="/day4/data-types"
          completed={completedTopics['completed_day4_data-types']}
        />
        
        <TopicCard 
          title="Operators and Conditionals"
          description="Learn about JavaScript operators and how to use conditional statements to control program flow."
          link="/day4/operators-conditionals"
          completed={completedTopics['completed_day4_operators-conditionals']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day4IndexPage;