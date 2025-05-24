import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Layout from '../components/Layout';
import DayCard from '../components/DayCard';
import { useAuth } from '../context/AuthContext';
import { useCompletion } from '../context/CompletionContext';
import { getFromCache, saveToCache } from '../utils/apiCache';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--dark-gray);
  margin-bottom: 1.5rem;
`;

const IntroductionContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
`;

const IntroTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  
  svg {
    font-size: 1.8rem;
    color: var(--text-color);
  }
`;

const IntroText = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--text-color);
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  color: var(--primary-color);
  font-size: 1.2rem;
  vertical-align: middle;
`;

const HighlightList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;
`;

const HighlightItem = styled.li`
  margin-bottom: 0.75rem;
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  
  strong {
    color: var(--primary-color);
  }
  
  svg {
    margin-top: 0.2rem;
    font-size: 1.2rem;
    color: var(--primary-color);
    flex-shrink: 0;
  }
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
  background: var(--card-background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
  position: relative;
  height: 380px;
  transition: background-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, 
      rgba(128, 128, 128, 0) 0%,
      rgba(128, 128, 128, 0.2) 50%,
      rgba(128, 128, 128, 0) 100%
    );
    background-size: 468px 100%;
    animation: ${shimmer} 1.5s infinite linear;
  }
`;

const ShimmerHeader = styled.div`
  height: 24px;
  background: var(--medium-gray);
  margin: 20px 20px 15px;
  border-radius: 4px;
  width: 70%;
  transition: background-color var(--transition-speed) ease;
`;

const ShimmerSubheader = styled.div`
  height: 16px;
  background: var(--medium-gray);
  margin: 0 20px 20px;
  border-radius: 4px;
  width: 90%;
  transition: background-color var(--transition-speed) ease;
`;

const ShimmerLine = styled.div`
  height: 12px;
  background: var(--medium-gray);
  margin: 10px 20px;
  border-radius: 4px;
  width: ${props => props.width || '85%'};
  transition: background-color var(--transition-speed) ease;
`;

const ShimmerProgressBar = styled.div`
  height: 8px;
  background: var(--medium-gray);
  margin: 30px 20px 15px;
  border-radius: 4px;
  width: 80%;
  transition: background-color var(--transition-speed) ease;
`;

const ShimmerButton = styled.div`
  height: 36px;
  background: var(--medium-gray);
  margin: 30px 20px 20px;
  border-radius: 18px;
  width: 120px;
  transition: background-color var(--transition-speed) ease;
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

// Cache keys
const STATS_CACHE_KEY = 'dayStatsCache';

const HomePage = () => {
  const { isAdmin } = useAuth();
  const { statsUpdated } = useCompletion();
  const [completedTopics, setCompletedTopics] = useState({
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: []
  });
  
  const [dayStats, setDayStats] = useState({
    day1: { completed: 0, total: 7, topics: [] },
    day2: { completed: 0, total: 5, topics: [] },
    day3: { completed: 0, total: 3, topics: [] },
    day4: { completed: 0, total: 3, topics: [] },
    day5: { completed: 0, total: 3, topics: [] }
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch stats only once on mount and when statsUpdated changes
  useEffect(() => {
    // Only fetch stats for admin users
    if (!isAdmin()) {
      setLoading(false);
      return;
    }
    
    // Determine if we should force refresh
    const forceRefresh = statsUpdated > 0;
    
    // Function to fetch data
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Try to get stats from cache if not forcing refresh
        if (!forceRefresh) {
          const cachedStats = getFromCache(STATS_CACHE_KEY);
          if (cachedStats) {
            setDayStats(cachedStats);
            
            // Update completed topics from the cached stats
            const updatedCompletedTopics = {
              day1: cachedStats.day1.topics || [],
              day2: cachedStats.day2.topics || [],
              day3: cachedStats.day3.topics || [],
              day4: cachedStats.day4.topics || [],
              day5: cachedStats.day5.topics || []
            };
            
            setCompletedTopics(updatedCompletedTopics);
            setLoading(false);
            return;
          }
        }
        
        // Make the API call
        const response = await axios.get(`${API_URL}/stats/days`, {
          timeout: 10000
        });
        
        // Ensure all days are present in the response data
        const completeStats = {
          day1: response.data.day1 || { completed: 0, total: 7, topics: [] },
          day2: response.data.day2 || { completed: 0, total: 5, topics: [] },
          day3: response.data.day3 || { completed: 0, total: 3, topics: [] },
          day4: response.data.day4 || { completed: 0, total: 3, topics: [] },
          day5: response.data.day5 || { completed: 0, total: 3, topics: [] }
        };
        
        // Save to localStorage cache
        saveToCache(STATS_CACHE_KEY, completeStats);
        
        setDayStats(completeStats);
        
        // Update completed topics from the stats
        const updatedCompletedTopics = {
          day1: completeStats.day1.topics || [],
          day2: completeStats.day2.topics || [],
          day3: completeStats.day3.topics || [],
          day4: completeStats.day4.topics || [],
          day5: completeStats.day5.topics || []
        };
        
        setCompletedTopics(updatedCompletedTopics);
      } catch (err) {
        // Try to use cached data if available
        const cachedStats = getFromCache(STATS_CACHE_KEY);
        if (cachedStats) {
          setDayStats(cachedStats);
          
          // Update completed topics from the cached stats
          const updatedCompletedTopics = {
            day1: cachedStats.day1.topics || [],
            day2: cachedStats.day2.topics || [],
            day3: cachedStats.day3.topics || [],
            day4: cachedStats.day4.topics || [],
            day5: cachedStats.day5.topics || []
          };
          
          setCompletedTopics(updatedCompletedTopics);
        } else {
          setError("Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    };
    
    // Execute the fetch function
    fetchData();
    
    // Only re-run when statsUpdated changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statsUpdated]);
  
  return (
    <Layout>      
      <IntroductionContainer>
        <IntroTitle><FaGraduationCap /> Your Web Development Journey</IntroTitle>
        <IntroText>
          <IconWrapper><FaLaptopCode /></IconWrapper>
          In this comprehensive course, you will be learning the essential technologies that power modern web development, 
          starting with the fundamentals and progressing to advanced React concepts.
        </IntroText>
        <IntroText>
          You will be building a strong foundation in web development by mastering HTML, CSS, JavaScript, and React. 
          Each day introduces new concepts that build upon previous knowledge, creating a seamless learning path.
        </IntroText>
        <HighlightList>
          <HighlightItem>
            <FaHtml5 />
            <div>
              <strong>HTML</strong> - Starting with the building blocks of the web, you'll learn how to structure content 
              with semantic elements, forms, tables, and more.
            </div>
          </HighlightItem>
          <HighlightItem>
            <FaCss3Alt />
            <div>
              <strong>CSS</strong> - Moving to styling, you'll master selectors, the box model, and advanced layout techniques 
              like Flexbox and Grid to create responsive, beautiful designs.
            </div>
          </HighlightItem>
          <HighlightItem>
            <FaJs />
            <div>
              <strong>JavaScript</strong> - The programming language of the web will enable you to add interactivity, 
              with topics covering variables, functions, arrays, objects, and modern ES6+ features.
            </div>
          </HighlightItem>
          <HighlightItem>
            <FaReact />
            <div>
              <strong>React</strong> - Finally, you'll learn how these technologies come together in React, 
              building reusable components and creating dynamic user interfaces with this powerful library.
            </div>
          </HighlightItem>
        </HighlightList>
        <IntroText>
          <IconWrapper><FaGraduationCap /></IconWrapper>
          By the end of this course, you'll have the skills to create modern, interactive web applications 
          and a solid understanding of front-end development principles.
        </IntroText>
      </IntroductionContainer>
      
      {error && (
        <div style={{ 
          color: 'var(--danger-color)', 
          textAlign: 'center', 
          marginBottom: '1rem',
          padding: '1rem',
          backgroundColor: 'var(--light-gray)',
          borderRadius: 'var(--border-radius)',
          maxWidth: '800px',
          margin: '0 auto 1.5rem',
          border: '1px solid var(--danger-color)',
          transition: 'background-color var(--transition-speed) ease'
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
      

      
      {loading ? (
        <>
          <div style={{ 
            textAlign: 'center', 
            margin: '1rem auto 2rem',
            color: 'var(--text-secondary)',
            transition: 'color var(--transition-speed) ease'
          }}>
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
          backgroundColor: 'var(--card-background)', 
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--border-color)',
          transition: 'background-color var(--transition-speed) ease, border-color var(--transition-speed) ease'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Server Connection Instructions</h3>
          <ol style={{ textAlign: 'left', paddingLeft: '1.5rem', color: 'var(--text-color)' }}>
            <li>Open a terminal or command prompt</li>
            <li>Navigate to the project directory: <code style={{ backgroundColor: 'var(--code-background)', padding: '2px 4px', borderRadius: '3px' }}>cd "C:\Users\PP2107\Documents\React training\react-version"</code></li>
            <li>Start the server: <code style={{ backgroundColor: 'var(--code-background)', padding: '2px 4px', borderRadius: '3px' }}>npm run server</code></li>
            <li>Keep the terminal window open</li>
            <li>Refresh the page to try again</li>
          </ol>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            The server needs to be running to fetch completion statistics from the database.
          </p>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;