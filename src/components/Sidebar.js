import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight, FaCode } from 'react-icons/fa';
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
  background: linear-gradient(135deg, var(--primary-darker) 0%, var(--primary-color) 100%);
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
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

const HomeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
`;

const HomeLink = styled(Link)`
  margin: 0.4rem;
  padding: 0.75rem;
  border-radius: 12px;
  font-size: 0.95rem;
  color: white;
  font-weight: 600;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  ${props => props.active === true && `
    color: white;
    background-color: rgba(255, 255, 255, 0.15);
  `}
`;

const NavGroup = styled.div`
  margin-bottom: 0;
`;

const NavGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  width: 100%;
  border-radius: 12px;
  margin: 0.2rem 0.4rem;
  width: calc(100% - 0.8rem);
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  ${props => props.active && `
    background-color: rgba(255, 255, 255, 0.15);
    font-weight: bold;
    color: white;
  `}
  
  svg {
    color: white;
    opacity: 0.8;
    transition: transform var(--transition-speed) ease;
    font-size: 0.9rem;
  }
  
  &:hover svg {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const NavGroupTitle = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  font-size: 0.9rem;
  transition: color var(--transition-speed) ease;
  display: flex;
  align-items: center;
`;

const DayNumber = styled.span`
  font-size: 0.95rem;
  margin-right: 0.4rem;
`;

const DayTitle = styled.span`
  font-size: 0.8rem;
  opacity: 0.85;
  font-weight: normal;
`;

const NavGroupContent = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height var(--transition-speed) ease;
  margin: 0 0.4rem 0.3rem 1.2rem;
  background-color: ${props => props.isOpen ? 'rgba(0, 0, 0, 0.15)' : 'transparent'};
  transition: max-height var(--transition-speed) ease, background-color var(--transition-speed) ease;
  border-radius: 12px;
  padding: ${props => props.isOpen ? '0.3rem 0' : '0'};
`;

const NavItem = styled(Link)`
  display: block;
  padding: 0.6rem 0.8rem;
  margin: 0.2rem 0.4rem;
  border-radius: 10px;
  transition: all var(--transition-speed) ease;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.85rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  ${props => props.active && `
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    font-weight: bold;
  `}
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
        return 'JS Fundamentals - Part 1';
      case 'Day 5':
        return 'JS Fundamentals - Part 2';
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
          <HomeLink to="/" active={location.pathname === "/" ? true : false}>
            <HomeIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
              </svg>
            </HomeIcon>
            Home
          </HomeLink>
          
          <HomeLink to="/code-editor" active={location.pathname === "/code-editor" ? true : false}>
            <HomeIcon>
              <FaCode />
            </HomeIcon>
            Code Editor
          </HomeLink>
        
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