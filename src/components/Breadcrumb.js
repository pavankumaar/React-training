import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--text-color);
  background-color: var(--light-gray);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: background-color var(--transition-speed) ease;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    padding: 0.6rem 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.7rem;
  }
`;

const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  
  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    transform: rotate(45deg);
    margin: 0 0.6rem;
    opacity: 0.7;
    
    @media (max-width: 576px) {
      width: 5px;
      height: 5px;
      margin: 0 0.4rem;
    }
  }
  
  @media (max-width: 576px) {
    &:not(:last-child):not(:first-child) {
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    &:last-child {
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const BreadcrumbLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  transition: all 0.2s ease;
  display: flex;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
  }
  
  @media (max-width: 576px) {
    padding: 0.15rem 0.3rem;
  }
`;

const CurrentPage = styled.span`
  color: var(--text-secondary);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.2rem 0.4rem;
  background-color: var(--card-background);
  border-radius: 3px;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 576px) {
    padding: 0.15rem 0.3rem;
  }
`;

// Shorter names for mobile display
const getMobileFriendlyName = (name, isMobile) => {
  if (!isMobile) return name;
  
  const shortNames = {
    'Day 1: HTML Fundamentals': 'Day 1',
    'Day 2: CSS Basics': 'Day 2',
    'Day 3: CSS Advanced': 'Day 3',
    'Day 4: JavaScript Basics': 'Day 4',
    'Day 5: JavaScript Advanced': 'Day 5',
    'Paragraphs & Text': 'Paragraphs',
    'Styling Forms & Buttons': 'Forms & Buttons',
    'Operators & Conditionals': 'Operators',
    'Arrays & Objects': 'Arrays'
  };
  
  return shortNames[name] || name;
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const isMobile = windowWidth <= 576;
  
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Map of route paths to readable names
  const routeNames = {
    '': 'Home',
    'day1': 'Day 1: HTML Fundamentals',
    'day2': 'Day 2: CSS Basics',
    'day3': 'Day 3: CSS Advanced',
    'day4': 'Day 4: JavaScript Basics',
    'day5': 'Day 5: JavaScript Advanced',
    'html-basics': 'HTML Basics',
    'headings': 'Headings',
    'paragraphs-text': 'Paragraphs & Text',
    'attributes': 'Attributes',
    'tables': 'Tables',
    'forms': 'Forms',
    'images': 'Images',
    'css-introduction': 'CSS Introduction',
    'css-selectors': 'CSS Selectors',
    'classes-ids': 'Classes & IDs',
    'div-span': 'Div & Span',
    'box-model': 'Box Model',
    'flexbox-grid': 'Flexbox & Grid',
    'styling-forms-buttons': 'Styling Forms & Buttons',
    'responsive-design': 'Responsive Design',
    'variables': 'Variables',
    'data-types': 'Data Types',
    'operators-conditionals': 'Operators & Conditionals',
    'functions': 'Functions',
    'arrays-objects': 'Arrays & Objects',
    'loops': 'Loops',
    'login': 'Login'
  };

  // Don't show breadcrumbs on login page or home page
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <BreadcrumbContainer aria-label="Breadcrumb navigation">
      <BreadcrumbItem>
        <BreadcrumbLink to="/" title="Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
          </svg>
        </BreadcrumbLink>
      </BreadcrumbItem>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = routeNames[name] || name;
        const mobileFriendlyName = getMobileFriendlyName(displayName, isMobile);
        
        return (
          <BreadcrumbItem key={name}>
            {isLast ? (
              <CurrentPage title={displayName}>{mobileFriendlyName}</CurrentPage>
            ) : (
              <BreadcrumbLink to={routeTo} title={displayName}>
                {mobileFriendlyName}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;