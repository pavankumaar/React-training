import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity var(--transition-speed) ease, visibility var(--transition-speed) ease;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 64px;
  left: ${props => props.isOpen ? '0' : '-280px'};
  width: 280px;
  height: calc(100vh - 64px);
  background-color: var(--card-background);
  border-right: 1px solid var(--border-color);
  transition: left var(--transition-speed) ease;
  overflow-y: auto;
  z-index: 999;
  box-shadow: ${props => props.isOpen ? 'var(--box-shadow)' : 'none'};
  
  @media (max-width: 768px) {
    top: 60px;
    height: calc(100vh - 60px);
    width: 260px;
    left: ${props => props.isOpen ? '0' : '-260px'};
  }
  
  @media (max-width: 576px) {
    width: 240px;
    left: ${props => props.isOpen ? '0' : '-240px'};
  }
`;

const SidebarContent = styled.div`
  padding: 0;
  overflow-y: auto;
  height: 100%;
  
  /* Custom scrollbar for sidebar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(var(--primary-color-rgb, 74, 144, 226), 0.5);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color, #4a90e2);
  }
`;

const HomeLink = styled(Link)`
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 600;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, var(--card-background), var(--light-gray));
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &:before {
    content: '🏠';
    display: inline-block;
    margin-right: 10px;
    font-size: 1.2rem;
  }
  
  ${props => props.active === true && `
    color: var(--primary-color);
    background: var(--light-gray);
    border-left: 3px solid var(--primary-color);
    padding-left: calc(1rem - 3px);
  `}
`;

const NavGroup = styled.div`
  margin-bottom: 0;
`;

const NavGroupHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  border-bottom: 1px solid var(--border-color);
  width: 100%;
  
  &:hover {
    background-color: var(--light-gray);
    color: var(--primary-color);
  }
  
  ${props => props.active && `
    background-color: var(--light-gray);
    font-weight: bold;
    color: var(--primary-color);
    border-left: 3px solid var(--primary-color);
    padding-left: calc(0.75rem - 3px);
  `}
  
  svg {
    color: var(--primary-color);
    opacity: 0.8;
    transition: transform var(--transition-speed) ease;
    margin-top: 0.25rem;
  }
  
  &:hover svg {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const NavGroupTitle = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  font-size: 1rem;
  transition: color var(--transition-speed) ease;
  display: flex;
  flex-direction: column;
`;

const DayNumber = styled.span`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const DayTitle = styled.span`
  font-size: 0.85rem;
  opacity: 0.85;
  font-weight: normal;
`;

const NavGroupContent = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height var(--transition-speed) ease;
  padding-left: 1rem;
  background-color: ${props => props.isOpen ? 'var(--light-gray)' : 'transparent'};
  transition: max-height var(--transition-speed) ease, background-color var(--transition-speed) ease;
  border-bottom: ${props => props.isOpen ? '1px solid var(--border-color)' : 'none'};
`;

const NavItem = styled(Link)`
  display: block;
  padding: 0.6rem 0.75rem;
  border-bottom: 1px solid var(--border-color);
  transition: all var(--transition-speed) ease;
  color: var(--text-color);
  font-size: 0.95rem;
  
  &:hover {
    background-color: var(--card-background);
    color: var(--primary-color);
    padding-left: 1rem;
  }
  
  ${props => props.active && `
    background-color: var(--card-background);
    color: var(--primary-color);
    font-weight: bold;
    border-left: 2px solid var(--primary-color);
    padding-left: calc(0.75rem - 2px);
  `}
  
  &:last-child {
    border-bottom: none;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openGroups, setOpenGroups] = useState({});
  const location = useLocation();
  const { theme } = useTheme();
  
  // Find the active day based on current location
  const findActiveDay = () => {
    for (const navGroup of navigation) {
      if (location.pathname.startsWith(navGroup.path)) {
        return navGroup.day;
      }
    }
    return null;
  };
  
  // Effect to handle initial page load only
  useEffect(() => {
    const activeDay = findActiveDay();
    if (activeDay && Object.keys(openGroups).length === 0) {
      // Only set on initial load when openGroups is empty
      setOpenGroups({ [activeDay]: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Function to get the title for each day
  const getDayTitle = (day) => {
    switch (day) {
      case 'Day 1':
        return 'HTML Fundamentals';
      case 'Day 2':
        return 'CSS Fundamentals';
      case 'Day 3':
        return 'Advanced CSS';
      case 'Day 4':
        return 'JavaScript Fundamentals - Part 1';
      case 'Day 5':
        return 'JavaScript Fundamentals - Part 2';
      default:
        return '';
    }
  };
  
  const toggleGroup = (day) => {
    setOpenGroups(prev => {
      // If this day is already open, close it and return empty object
      if (prev[day]) {
        return {};
      }
      
      // Otherwise, close all others and only open this one
      return { [day]: true };
    });
  };
  
  // Define the navigation structure
  const navigation = [
    {
      day: 'Day 1',
      path: '/day1',
      topics: [
        { name: 'HTML Basics', path: '/day1/html-basics' },
        { name: 'Headings', path: '/day1/headings' },
        { name: 'Paragraphs & Text', path: '/day1/paragraphs-text' },
        { name: 'Attributes', path: '/day1/attributes' },
        { name: 'Tables', path: '/day1/tables' },
        { name: 'Forms', path: '/day1/forms' },
        { name: 'Images', path: '/day1/images' },
      ]
    },
    {
      day: 'Day 2',
      path: '/day2',
      topics: [
        { name: 'CSS Introduction', path: '/day2/css-introduction' },
        { name: 'CSS Selectors', path: '/day2/css-selectors' },
        { name: 'Classes & IDs', path: '/day2/classes-ids' },
        { name: 'Div & Span', path: '/day2/div-span' },
        { name: 'Box Model', path: '/day2/box-model' },
      ]
    },
    {
      day: 'Day 3',
      path: '/day3',
      topics: [
        { name: 'Flexbox & Grid', path: '/day3/flexbox-grid' },
        { name: 'Styling Forms & Buttons', path: '/day3/styling-forms-buttons' },
        { name: 'Responsive Design', path: '/day3/responsive-design' },
      ]
    },
    {
      day: 'Day 4',
      path: '/day4',
      topics: [
        { name: 'Variables', path: '/day4/variables' },
        { name: 'Data Types', path: '/day4/data-types' },
        { name: 'Operators & Conditionals', path: '/day4/operators-conditionals' },
      ]
    },
    {
      day: 'Day 5',
      path: '/day5',
      topics: [
        { name: 'Functions', path: '/day5/functions' },
        { name: 'Arrays & Objects', path: '/day5/arrays-objects' },
        { name: 'Loops', path: '/day5/loops' },
      ]
    },
  ];
  
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <SidebarContent>
          <HomeLink to="/" active={location.pathname === "/" ? true : false}>Home</HomeLink>
        
        {navigation.map((navGroup) => {
          const isDayActive = location.pathname.startsWith(navGroup.path);
          // Group is only open if it's explicitly set to open in state
          const isGroupOpen = !!openGroups[navGroup.day];
          
          return (
            <NavGroup key={navGroup.day}>
              <NavGroupHeader 
                active={isDayActive}
                onClick={() => toggleGroup(navGroup.day)}
              >
                <NavGroupTitle active={isDayActive}>
                  <DayNumber>{navGroup.day}</DayNumber>
                  <DayTitle>{getDayTitle(navGroup.day)}</DayTitle>
                </NavGroupTitle>
                {isGroupOpen ? <FaChevronDown /> : <FaChevronRight />}
              </NavGroupHeader>
              
              <NavGroupContent isOpen={isGroupOpen}>
                <NavItem 
                  to={navGroup.path} 
                  active={location.pathname === navGroup.path}
                >
                  Overview
                </NavItem>
                
                {navGroup.topics.map((topic) => (
                  <NavItem 
                    key={topic.path} 
                    to={topic.path}
                    active={location.pathname === topic.path}
                  >
                    {topic.name}
                  </NavItem>
                ))}
              </NavGroupContent>
            </NavGroup>
          );
        })}
      </SidebarContent>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;