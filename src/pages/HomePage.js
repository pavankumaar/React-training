import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Layout from '../components/Layout';
import DayCard from '../components/DayCard';
import CompletionContext from '../context/CompletionContext';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
`;

// RefreshButton removed as requested

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const ShimmerCardWrapper = styled.div`
  background: #f6f7f8;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  height: 380px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, 
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 468px 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }
`;

const ShimmerHeader = styled.div`
  height: 24px;
  background: #e0e0e0;
  margin: 20px 20px 15px;
  border-radius: 4px;
  width: 70%;
`;

const ShimmerSubheader = styled.div`
  height: 16px;
  background: #e0e0e0;
  margin: 0 20px 20px;
  border-radius: 4px;
  width: 90%;
`;

const ShimmerLine = styled.div`
  height: 12px;
  background: #e0e0e0;
  margin: 10px 20px;
  border-radius: 4px;
  width: ${props => props.width || '85%'};
`;

const ShimmerProgressBar = styled.div`
  height: 8px;
  background: #e0e0e0;
  margin: 30px 20px 15px;
  border-radius: 4px;
  width: 80%;
`;

const ShimmerButton = styled.div`
  height: 36px;
  background: #e0e0e0;
  margin: 30px 20px 20px;
  border-radius: 18px;
  width: 120px;
`;

// Shimmer Card Component
const ShimmerCard = () => (
  <ShimmerCardWrapper>
    <ShimmerHeader />
    <ShimmerSubheader />
    <ShimmerLine width="60%" />
    <ShimmerLine width="75%" />
    <ShimmerLine width="65%" />
    <ShimmerLine width="80%" />
    <ShimmerLine width="70%" />
    <ShimmerProgressBar />
    <ShimmerButton />
  </ShimmerCardWrapper>
);

// API URL - Try to get from environment or use relative path
const API_URL = process.env.REACT_APP_API_URL || '/api';

// Hardcoded fallback data
const FALLBACK_COMPLETED_TOPICS = {
  day1: ['HTML Basics', 'Headings', 'Paragraphs & Text', 'Attributes'],
  day2: ['CSS Introduction', 'Selectors'],
  day3: ['Flexbox & Grid'],
  day4: [],
  day5: []
};

const FALLBACK_DAY_STATS = {
  day1: { completed: 4, total: 7, topics: ['HTML Basics', 'Headings', 'Paragraphs & Text', 'Attributes'] },
  day2: { completed: 2, total: 5, topics: ['CSS Introduction', 'Selectors'] },
  day3: { completed: 1, total: 3, topics: ['Flexbox & Grid'] },
  day4: { completed: 0, total: 3, topics: [] },
  day5: { completed: 0, total: 3, topics: [] }
};

const HomePage = () => {
  // Get the completion context to check if we're using fallback data
  const { usesFallback } = useContext(CompletionContext);
  
  const [completedTopics, setCompletedTopics] = useState(FALLBACK_COMPLETED_TOPICS);
  
  const [dayStats, setDayStats] = useState(FALLBACK_DAY_STATS);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  
  const fetchDayStats = async () => {
    try {
      setLoading(true);
      console.log('Checking server health...');
      
      // Only use fallback data if explicitly using fallback from context
      if (usesFallback) {
        console.log('Using fallback data for day stats (from context)');
        setDayStats(FALLBACK_DAY_STATS);
        setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
        setUsingFallbackData(true);
        setError(null);
        return;
      }
      
      console.log('Fetching stats from:', `${API_URL}/stats/days`);
      
      // First try to get the topics to see if the server is responding at all
      let topicsResponse;
      try {
        topicsResponse = await axios.get(`${API_URL}/topics`, { timeout: 5000 });
        console.log('Topics API response:', topicsResponse.data);
      } catch (topicsErr) {
        console.error('Topics API error:', topicsErr);
        // If we can't even get the topics, use fallback data
        console.log('Using fallback data due to topics API error');
        setDayStats(FALLBACK_DAY_STATS);
        setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
        setUsingFallbackData(true);
        setError(null);
        return;
      }
      
      // Add a timeout to ensure we don't wait forever
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      console.log('Now fetching stats...');
      let response;
      try {
        response = await axios.get(`${API_URL}/stats/days`, {
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        console.log('Stats response:', response.data);
        
        // Ensure all days are present in the response data
        const completeStats = {
          day1: response.data.day1 || FALLBACK_DAY_STATS.day1,
          day2: response.data.day2 || FALLBACK_DAY_STATS.day2,
          day3: response.data.day3 || FALLBACK_DAY_STATS.day3,
          day4: response.data.day4 || FALLBACK_DAY_STATS.day4,
          day5: response.data.day5 || FALLBACK_DAY_STATS.day5
        };
        
        // Check if we got any completed topics
        const hasCompletedTopics = Object.values(completeStats).some(
          day => day.completed > 0 && day.topics.length > 0
        );
        
        if (hasCompletedTopics) {
          console.log('Using API data for day stats');
          setDayStats(completeStats);
          
          // Update completed topics from the stats
          setCompletedTopics({
            day1: completeStats.day1.topics || [],
            day2: completeStats.day2.topics || [],
            day3: completeStats.day3.topics || [],
            day4: completeStats.day4.topics || [],
            day5: completeStats.day5.topics || []
          });
          
          setUsingFallbackData(false);
        } else {
          console.log('API returned no completed topics, using fallback data');
          setDayStats(FALLBACK_DAY_STATS);
          setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
          setUsingFallbackData(true);
        }
        
        setError(null);
      } catch (statsErr) {
        console.error('Stats API error:', statsErr);
        clearTimeout(timeoutId);
        
        // Use fallback data
        console.log('Using fallback data due to stats API error');
        setDayStats(FALLBACK_DAY_STATS);
        setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
        setUsingFallbackData(true);
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching day statistics:', err);
      
      // Use fallback data
      console.log('Using fallback data due to general error');
      setDayStats(FALLBACK_DAY_STATS);
      setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
      setUsingFallbackData(true);
      setError(null);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch stats on component mount
  useEffect(() => {
    const initializeData = async () => {
      // Don't force fallback data in production anymore
      console.log('Initializing data, environment:', process.env.NODE_ENV);
      
      // In development, try to fetch from API first
      const isServerRunning = await checkServerStatus();
      
      if (isServerRunning) {
        fetchDayStats();
      } else {
        console.log('Server appears to be offline, using fallback data');
        setDayStats(FALLBACK_DAY_STATS);
        setCompletedTopics(FALLBACK_COMPLETED_TOPICS);
        setUsingFallbackData(true);
        setLoading(false);
      }
    };
    
    initializeData();
  }, []);
  
  // handleRefresh function removed as it's no longer needed
  
  // Function to check if the server is running
  const checkServerStatus = async () => {
    try {
      console.log('Checking server status at:', `${API_URL}/topics`);
      const response = await axios.get(`${API_URL}/topics`, { timeout: 5000 });
      console.log('Server status check response:', response.data);
      return true;
    } catch (err) {
      console.error('Server status check failed:', err);
      console.error('Error details:', err.message);
      if (err.response) {
        console.error('Response status:', err.response.status);
        console.error('Response data:', err.response.data);
      }
      return false;
    }
  };
  
  return (
    <Layout>
      <Title>React Training Course</Title>
      <Subtitle>A comprehensive journey from HTML basics to React mastery</Subtitle>
      
      {error && (
        <div style={{ 
          color: 'var(--danger-color)', 
          textAlign: 'center', 
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: '#ffeeee',
          borderRadius: 'var(--border-radius)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            Error Loading Statistics
          </div>
          <div>
            {error.includes('Server is not running') 
              ? 'Unable to connect to the server. If you\'re on a mobile device, please note that you need to be on the same network as the server.' 
              : error}
          </div>
        </div>
      )}
      
      {usingFallbackData && !error && (
        <div style={{ 
          color: 'var(--primary-color)', 
          textAlign: 'center', 
          marginBottom: '1rem',
          padding: '0.5rem',
          backgroundColor: '#f0f8ff',
          borderRadius: 'var(--border-radius)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem',
          fontSize: '0.9rem'
        }}>
          <div>
            Using demo data for course progress. Your actual progress will be tracked when connected to the server.
          </div>
        </div>
      )}
      
      {loading ? (
        <>
          <div style={{ 
            textAlign: 'center', 
            margin: '1rem auto 2rem',
            color: 'var(--dark-gray)'
          }}>
            <div style={{ fontSize: '1.2rem', color: 'var(--primary-color)' }}>
              Loading course content...
            </div>
          </div>
          <DaysContainer>
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
          </DaysContainer>
        </>
      ) : (
        <DaysContainer>
          <DayCard 
            day={1}
            title="HTML Fundamentals"
            description="Introduction to HTML and its core elements for building web pages."
            topics={[
              'HTML Basics',
              'Headings',
              'Paragraphs & Text',
              'Attributes',
              'Tables',
              'Forms',
              'Images'
            ]}
            link="/day1"
            completedTopics={completedTopics.day1}
            stats={dayStats.day1}
          />
          
          <DayCard 
            day={2}
            title="CSS Fundamentals"
            description="Learn how to style HTML elements using CSS."
            topics={[
              'CSS Introduction',
              'Selectors',
              'Classes & IDs',
              'Div & Span Elements',
              'Box Model'
            ]}
            link="/day2"
            completedTopics={completedTopics.day2}
            stats={dayStats.day2}
          />
          
          <DayCard 
            day={3}
            title="Advanced CSS"
            description="Master advanced CSS techniques for modern web design."
            topics={[
              'Flexbox & Grid',
              'Styling Forms & Buttons',
              'Responsive Design'
            ]}
            link="/day3"
            completedTopics={completedTopics.day3}
            stats={dayStats.day3}
          />
          
          <DayCard 
            day={4}
            title="JavaScript Fundamentals - Part 1"
            description="Introduction to JavaScript variables, data types, operators, and conditional statements."
            topics={[
              'Variables (let, const)',
              'Data Types',
              'Operators & Conditionals'
            ]}
            link="/day4"
            completedTopics={completedTopics.day4}
            stats={dayStats.day4}
          />
          
          <DayCard 
            day={5}
            title="JavaScript Fundamentals - Part 2"
            description="Advanced JavaScript concepts including functions, arrays, objects, and loops."
            topics={[
              'Functions',
              'Arrays & Objects',
              'Loops (for, forEach, map)'
            ]}
            link="/day5"
            completedTopics={completedTopics.day5}
            stats={dayStats.day5}
          />
        </DaysContainer>
      )}
      
      {!loading && error && error.includes('Server is not running') && (
        <div style={{ 
          maxWidth: '600px', 
          margin: '2rem auto', 
          padding: '1rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--medium-gray)'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Server Connection Instructions</h3>
          <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
            <li>Open a terminal or command prompt</li>
            <li>Navigate to the project directory: <code>cd "C:\Users\PP2107\Documents\React training\react-version"</code></li>
            <li>Start the server: <code>npm run server</code></li>
            <li>Keep the terminal window open</li>
            <li>Refresh the page to try again</li>
          </ol>
          <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
            The server needs to be running to fetch completion statistics from the database.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;