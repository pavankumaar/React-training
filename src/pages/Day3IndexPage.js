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

const Day3IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day3_flexbox-grid',
      'completed_day3_styling-forms-buttons',
      'completed_day3_responsive-design'
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
        prevLink="/day2" 
        nextLink="/"
        title="Day 3: Advanced CSS"
        subtitle="Master advanced CSS techniques for modern web design."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="Flexbox & Grid"
          description="Learn how to create flexible and responsive layouts using CSS Flexbox and Grid."
          link="/day3/flexbox-grid"
          completed={completedTopics['completed_day3_flexbox-grid']}
        />
        
        <TopicCard 
          title="Styling Forms & Buttons"
          description="Understand how to style forms and buttons to create a better user experience."
          link="/day3/styling-forms-buttons"
          completed={completedTopics['completed_day3_styling-forms-buttons']}
        />
        
        <TopicCard 
          title="Responsive Design"
          description="Learn how to create websites that look great on all devices using responsive design techniques."
          link="/day3/responsive-design"
          completed={completedTopics['completed_day3_responsive-design']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day3IndexPage;