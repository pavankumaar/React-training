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

const Day1IndexPage = () => {
  const [completedTopics, setCompletedTopics] = useState({});
  
  useEffect(() => {
    // Check localStorage for completed topics
    const topicKeys = [
      'completed_day1_html-basics',
      'completed_day1_headings',
      'completed_day1_paragraphs-text',
      'completed_day1_attributes',
      'completed_day1_tables',
      'completed_day1_forms',
      'completed_day1_images'
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
        prevLink="/" 
        nextLink="/day2"
        title="Day 1: HTML Fundamentals"
        subtitle="Introduction to HTML and its core elements for building web pages."
      />
      
      <TopicsContainer>
        <TopicCard 
          title="HTML Basics"
          description="Learn the fundamentals of HTML, including document structure and basic elements."
          link="/day1/html-basics"
          completed={completedTopics['completed_day1_html-basics']}
        />
        
        <TopicCard 
          title="Headings"
          description="Understand how to use HTML heading elements (h1-h6) to structure your content."
          link="/day1/headings"
          completed={completedTopics['completed_day1_headings']}
        />
        
        <TopicCard 
          title="Paragraphs & Text"
          description="Learn how to work with paragraphs and text formatting in HTML."
          link="/day1/paragraphs-text"
          completed={completedTopics['completed_day1_paragraphs-text']}
        />
        
        <TopicCard 
          title="Attributes"
          description="Understand how to use HTML attributes to provide additional information about elements."
          link="/day1/attributes"
          completed={completedTopics['completed_day1_attributes']}
        />
        
        <TopicCard 
          title="Tables"
          description="Learn how to create and structure tables in HTML."
          link="/day1/tables"
          completed={completedTopics['completed_day1_tables']}
        />
        
        <TopicCard 
          title="Forms"
          description="Understand how to create interactive forms with various input types."
          link="/day1/forms"
          completed={completedTopics['completed_day1_forms']}
        />
        
        <TopicCard 
          title="Images"
          description="Learn how to add and optimize images in your HTML documents."
          link="/day1/images"
          completed={completedTopics['completed_day1_images']}
        />
      </TopicsContainer>
    </Layout>
  );
};

export default Day1IndexPage;