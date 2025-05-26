import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
  transition: background-color var(--transition-speed) ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 0.75rem;
  }
`;

const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  
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
      width: 7px;
      height: 7px;
      margin: 0 0.5rem;
      border-width: 2.5px;
    }
  }
  
  @media (max-width: 576px) {
    &:not(:last-child):not(:first-child) {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    &:last-child {
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const BreadcrumbLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    text-decoration: none;
  }
  
  @media (max-width: 576px) {
    padding: 0.3rem 0.5rem;
    font-weight: 500;
  }
`;

const CurrentPage = styled.span`
  color: var(--text-secondary);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.2rem 0.4rem;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  border-radius: var(--form-border-radius);
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  cursor: ${props => props.hasDropdown ? 'pointer' : 'default'};
  
  @media (max-width: 576px) {
    padding: 0.3rem 0.5rem;
    font-weight: 600;
  }
`;

const DropdownIcon = styled.span`
  display: inline-flex;
  margin-left: 4px;
  align-items: center;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  svg {
    width: 10px;
    height: 10px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  min-width: 180px;
  max-height: 300px;
  overflow-y: auto;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  @media (max-width: 576px) {
    min-width: 200px;
    max-height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: 90vw;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    border: 1px solid var(--border-color);
    margin-top: 0;
    z-index: 11;
  }
`;

const DropdownBackdrop = styled.div`
  display: none;
  
  @media (max-width: 576px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  
  &:hover {
    background-color: var(--light-gray);
    color: var(--primary-color);
  }
  
  &.active {
    background-color: var(--primary-color-light);
    color: var(--primary-color);
    font-weight: 500;
  }
  
  @media (max-width: 576px) {
    padding: 0.7rem 1rem;
    font-size: 1rem;
    border-bottom: 1px solid var(--border-color-light, rgba(0,0,0,0.05));
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

// Dropdown component to handle rendering the dropdown menu
const BreadcrumbDropdown = ({ isOpen, header, items, currentPath, onClose, theme }) => {
  if (!isOpen) return null;
  
  return (
    <DropdownMenu isOpen={isOpen} theme={theme}>
      <StyledDropdownHeader>
        <span>{header}</span>
        <CloseButton onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </CloseButton>
      </StyledDropdownHeader>
      {items.map((item) => (
        <DropdownItem 
          key={item.path} 
          to={item.path}
          className={currentPath === item.path || currentPath.startsWith(item.path + '/') ? 'active' : ''}
          onClick={onClose}
        >
          {item.name}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
};

const StyledDropdownHeader = styled.div`
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0;
  display: none;
  width: 24px;
  height: 24px;
  
  &:hover {
    color: var(--primary-color);
  }
  
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
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
    'Day 6: DOM Manipulation': 'Day 6',
    'Day 7: ES6+ Features': 'Day 7',
    'Paragraphs & Text': 'Paragraphs',
    'Styling Forms & Buttons': 'Forms & Buttons',
    'Operators & Conditionals': 'Operators',
    'Arrays & Objects': 'Arrays',
    'getElementById & querySelector': 'DOM Selectors',
    'Arrow Functions & Template Literals': 'Arrow Functions',
    'Destructuring, Spread & Rest': 'Destructuring'
  };
  
  return shortNames[name] || name;
};

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 576;
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    const handleClickOutside = (event) => {
      if (openDropdown && dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);
  
  // Map of route paths to readable names
  const routeNames = {
    '': 'Home',
    'day1': 'Day 1: HTML Fundamentals',
    'day2': 'Day 2: CSS Basics',
    'day3': 'Day 3: CSS Advanced',
    'day4': 'Day 4: JavaScript Basics',
    'day5': 'Day 5: JavaScript Advanced',
    'day6': 'Day 6: DOM Manipulation',
    'day7': 'Day 7: ES6+ Features',
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
    'getelementbyid-queryselector': 'getElementById & querySelector',
    'event-handling': 'Event Handling',
    'modifying-dom': 'Modifying DOM Elements',
    'arrow-functions-template-literals': 'Arrow Functions & Template Literals',
    'destructuring-spread-rest': 'Destructuring, Spread & Rest',
    'array-methods': 'Array Methods',
    'login': 'Login'
  };

  // Map of days to their topics
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
    ],
    'day6': [
      { path: '/day6/getelementbyid-queryselector', name: 'getElementById & querySelector' },
      { path: '/day6/event-handling', name: 'Event Handling' },
      { path: '/day6/modifying-dom', name: 'Modifying DOM Elements' }
    ],
    'day7': [
      { path: '/day7/arrow-functions-template-literals', name: 'Arrow Functions & Template Literals' },
      { path: '/day7/destructuring-spread-rest', name: 'Destructuring, Spread & Rest' },
      { path: '/day7/array-methods', name: 'Array Methods' }
    ]
  };

  // List of all days
  const allDays = [
    { path: '/day1', name: 'Day 1: HTML Fundamentals' },
    { path: '/day2', name: 'Day 2: CSS Basics' },
    { path: '/day3', name: 'Day 3: CSS Advanced' },
    { path: '/day4', name: 'Day 4: JavaScript Basics' },
    { path: '/day5', name: 'Day 5: JavaScript Advanced' },
    { path: '/day6', name: 'Day 6: DOM Manipulation' },
    { path: '/day7', name: 'Day 7: ES6+ Features' }
  ];

  // Get dropdown items based on breadcrumb type
  const getDropdownItems = (name, index) => {
    // For day breadcrumbs (day1, day2, etc.), show all days
    if (index === 0 && name.match(/^day[1-7]$/)) {
      return {
        header: 'All Days',
        items: allDays
      };
    } 
    // For topic breadcrumbs, show all topics from the same day
    else if (index === 1 && pathnames[0].match(/^day[1-7]$/)) {
      const day = pathnames[0]; // e.g., 'day1'
      return {
        header: `${routeNames[day]} Topics`,
        items: dayTopics[day]
      };
    } 
    // Default fallback
    else {
      return {
        header: 'Navigation',
        items: allDays
      };
    }
  };

  // Check if a breadcrumb should have a dropdown
  const shouldHaveDropdown = (name, index) => {
    // Day breadcrumbs (day1, day2, etc.)
    if (index === 0 && name.match(/^day[1-7]$/)) {
      return true;
    }
    
    // Topic breadcrumbs (html-basics, css-selectors, etc.) - including the active one
    if (pathnames[0].match(/^day[1-7]$/) && index === 1) {
      return true;
    }
    
    return false;
  };

  // Toggle dropdown visibility
  const toggleDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Don't show breadcrumbs on login page or home page
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <>
      <DropdownBackdrop isOpen={openDropdown !== null} onClick={() => setOpenDropdown(null)} />
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
        const hasDropdown = shouldHaveDropdown(name, index);
        const isDropdownOpen = openDropdown === name;
        const dropdownData = hasDropdown ? getDropdownItems(name, index) : null;
        
        return (
          <BreadcrumbItem 
            key={name} 
            ref={el => hasDropdown && (dropdownRefs.current[name] = el)}
          >
            {isLast ? (
              <Fragment>
                <CurrentPage 
                  title={displayName} 
                  hasDropdown={hasDropdown}
                  theme={theme}
                  onClick={hasDropdown ? (e) => toggleDropdown(name, e) : undefined}
                >
                  {mobileFriendlyName}
                  {hasDropdown && (
                    <DropdownIcon isOpen={isDropdownOpen}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 11L3 6h10l-5 5z"/>
                      </svg>
                    </DropdownIcon>
                  )}
                </CurrentPage>
                
                {hasDropdown && (
                  <BreadcrumbDropdown
                    isOpen={isDropdownOpen}
                    header={dropdownData.header}
                    items={dropdownData.items}
                    currentPath={location.pathname}
                    theme={theme}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </Fragment>
            ) : (
              <Fragment>
                <BreadcrumbLink 
                  to={routeTo}
                  title={displayName}
                  onClick={hasDropdown ? (e) => toggleDropdown(name, e) : undefined}
                >
                  {mobileFriendlyName}
                  {hasDropdown && (
                    <DropdownIcon isOpen={isDropdownOpen}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 11L3 6h10l-5 5z"/>
                      </svg>
                    </DropdownIcon>
                  )}
                </BreadcrumbLink>
                
                {hasDropdown && (
                  <BreadcrumbDropdown
                    isOpen={isDropdownOpen}
                    header={dropdownData.header}
                    items={dropdownData.items}
                    currentPath={location.pathname}
                    theme={theme}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </Fragment>
            )}
          </BreadcrumbItem>
        );
      })}
      </BreadcrumbContainer>
    </>
  );
};

export default Breadcrumb;