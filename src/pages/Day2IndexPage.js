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

const Day2IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day2_css-introduction',
      'completed_day2_css-selectors',
      'completed_day2_classes-ids',
      'completed_day2_div-span',
      'completed_day2_box-model'
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
        prevLink="/day1" 
        nextLink="/day3"
        title="Day 2: CSS Fundamentals"
        subtitle="Learn how to style HTML elements using CSS."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="CSS Introduction"
          description="Learn the basics of CSS and how to apply styles to HTML elements."
          link="/day2/css-introduction"
          completed={completedTopics['completed_day2_css-introduction']}
        />
        
        <TopicCard 
          title="CSS Selectors"
          description="Understand how to target specific HTML elements with various CSS selectors."
          link="/day2/css-selectors"
          completed={completedTopics['completed_day2_css-selectors']}
        />
        
        <TopicCard 
          title="Classes & IDs"
          description="Learn how to use classes and IDs to apply styles to specific elements."
          link="/day2/classes-ids"
          completed={completedTopics['completed_day2_classes-ids']}
        />
        
        <TopicCard 
          title="Div & Span Elements"
          description="Understand how to use div and span elements for grouping and styling content."
          link="/day2/div-span"
          completed={completedTopics['completed_day2_div-span']}
        />
        
        <TopicCard 
          title="Box Model"
          description="Learn about the CSS box model and how to control spacing with margin and padding."
          link="/day2/box-model"
          completed={completedTopics['completed_day2_box-model']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day2IndexPage;