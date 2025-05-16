import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  
  @media (max-width: 576px) {
    margin-top: 2rem;
    padding-top: 1.25rem;
  }
`;

const NavButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: var(--box-shadow);
  min-width: 160px;
  
  &:hover {
    background-color: var(--primary-darker);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
  
  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    min-width: 130px;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.3;
  
  .day {
    font-size: 0.8rem;
    opacity: 0.9;
    font-weight: 400;
  }
  
  .topic {
    font-weight: 600;
  }
  
  @media (max-width: 576px) {
    .day {
      font-size: 0.75rem;
    }
    
    .topic {
      font-size: 0.9rem;
    }
  }
`;

const PrevButton = styled(NavButton)`
  svg {
    margin-right: 0.75rem;
  }
`;

const NextButton = styled(NavButton)`
  svg {
    margin-left: 0.75rem;
  }
  
  ${ButtonContent} {
    align-items: flex-end;
  }
`;

const Spacer = styled.div`
  width: 1rem;
`;

// Navigation structure
const allDays = [
  { path: '/day1', name: 'Day 1: HTML Fundamentals' },
  { path: '/day2', name: 'Day 2: CSS Basics' },
  { path: '/day3', name: 'Day 3: CSS Advanced' },
  { path: '/day4', name: 'Day 4: JavaScript Basics' },
  { path: '/day5', name: 'Day 5: JavaScript Advanced' }
];

const dayTopics = {
  'day1': [
    { path: '/day1/html-basics', name: 'HTML Basics' },
    { path: '/day1/headings', name: 'Headings' },
    { path: '/day1/paragraphs-text', name: 'Paragraphs & Text' },
    { path: '/day1/attributes', name: 'Attributes' },
    { path: '/day1/tables', name: 'Tables' },
    { path: '/day1/forms', name: 'Forms' },
    { path: '/day1/images', name: 'Images' }
  ],
  'day2': [
    { path: '/day2/css-introduction', name: 'CSS Introduction' },
    { path: '/day2/css-selectors', name: 'CSS Selectors' },
    { path: '/day2/classes-ids', name: 'Classes & IDs' },
    { path: '/day2/div-span', name: 'Div & Span' },
    { path: '/day2/box-model', name: 'Box Model' }
  ],
  'day3': [
    { path: '/day3/flexbox-grid', name: 'Flexbox & Grid' },
    { path: '/day3/styling-forms-buttons', name: 'Styling Forms & Buttons' },
    { path: '/day3/responsive-design', name: 'Responsive Design' }
  ],
  'day4': [
    { path: '/day4/variables', name: 'Variables' },
    { path: '/day4/data-types', name: 'Data Types' },
    { path: '/day4/operators-conditionals', name: 'Operators & Conditionals' }
  ],
  'day5': [
    { path: '/day5/functions', name: 'Functions' },
    { path: '/day5/arrays-objects', name: 'Arrays & Objects' },
    { path: '/day5/loops', name: 'Loops' }
  ]
};

const PageNavigation = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  // Don't show navigation on login page or home page
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }
  
  let prevLink = null;
  let nextLink = null;
  let prevDay = '';
  let prevTopic = '';
  let nextDay = '';
  let nextTopic = '';
  
  // Helper function to extract day name from full day name
  const extractDayName = (fullName) => {
    return fullName.split(':')[0].trim(); // "Day 1: HTML Fundamentals" -> "Day 1"
  };
  
  // If we're on a day index page (e.g., /day1, /day2)
  if (pathnames.length === 1 && pathnames[0].match(/^day[1-5]$/)) {
    const currentDayIndex = allDays.findIndex(day => day.path === `/${pathnames[0]}`);
    const currentDayName = allDays[currentDayIndex].name;
    
    // Previous day
    if (currentDayIndex > 0) {
      prevLink = allDays[currentDayIndex - 1].path;
      prevDay = extractDayName(allDays[currentDayIndex - 1].name);
      prevTopic = "Overview";
    }
    
    // Next day
    if (currentDayIndex < allDays.length - 1) {
      nextLink = allDays[currentDayIndex + 1].path;
      nextDay = extractDayName(allDays[currentDayIndex + 1].name);
      nextTopic = "Overview";
    }
    
    // If there are topics for this day, add the first topic as next
    if (dayTopics[pathnames[0]] && dayTopics[pathnames[0]].length > 0) {
      nextLink = dayTopics[pathnames[0]][0].path;
      nextDay = extractDayName(currentDayName);
      nextTopic = dayTopics[pathnames[0]][0].name;
    }
  }
  // If we're on a topic page (e.g., /day1/html-basics)
  else if (pathnames.length === 2 && pathnames[0].match(/^day[1-5]$/)) {
    const day = pathnames[0];
    const dayIndex = allDays.findIndex(d => d.path === `/${day}`);
    const currentDayName = allDays[dayIndex].name;
    const topics = dayTopics[day];
    const currentTopicIndex = topics.findIndex(topic => topic.path === `/${day}/${pathnames[1]}`);
    
    // Previous topic or day
    if (currentTopicIndex > 0) {
      // Previous topic in the same day
      prevLink = topics[currentTopicIndex - 1].path;
      prevDay = extractDayName(currentDayName);
      prevTopic = topics[currentTopicIndex - 1].name;
    } else {
      // Go to day index
      prevLink = `/${day}`;
      prevDay = extractDayName(currentDayName);
      prevTopic = "Overview";
    }
    
    // Next topic or day
    if (currentTopicIndex < topics.length - 1) {
      // Next topic in the same day
      nextLink = topics[currentTopicIndex + 1].path;
      nextDay = extractDayName(currentDayName);
      nextTopic = topics[currentTopicIndex + 1].name;
    } else {
      // Go to next day
      if (dayIndex < allDays.length - 1) {
        nextLink = allDays[dayIndex + 1].path;
        nextDay = extractDayName(allDays[dayIndex + 1].name);
        nextTopic = "Overview";
      }
    }
  }
  
  return (
    <NavigationContainer>
      {prevLink ? (
        <PrevButton to={prevLink}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          <ButtonContent>
            <span className="day">{prevDay}</span>
            <span className="topic">{prevTopic}</span>
          </ButtonContent>
        </PrevButton>
      ) : (
        <Spacer />
      )}
      
      {nextLink ? (
        <NextButton to={nextLink}>
          <ButtonContent>
            <span className="day">{nextDay}</span>
            <span className="topic">{nextTopic}</span>
          </ButtonContent>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </NextButton>
      ) : (
        <Spacer />
      )}
    </NavigationContainer>
  );
};

export default PageNavigation;