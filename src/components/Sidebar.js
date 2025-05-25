import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { 
  FaChevronDown, 
  FaChevronRight,
  FaHtml5, 
  FaHeading, 
  FaAlignLeft, 
  FaTable, 
  FaWpforms, 
  FaImage, 
  FaCss3Alt, 
  FaListUl, 
  FaIdCard, 
  FaColumns, 
  FaBoxOpen, 
  FaLayerGroup, 
  FaTabletAlt, 
  FaDesktop, 
  FaJs, 
  FaVial, 
  FaEquals, 
  FaCodeBranch, 
  FaDatabase, 
  FaSyncAlt,
  FaBook,
  FaCode,
  FaSearch,
  FaBars
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)'};
  z-index: 998;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity var(--transition-speed) ease, visibility var(--transition-speed) ease, background-color var(--transition-speed) ease;
  
  @media (min-width: 992px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 7px;
  left: ${props => props.isOpen ? '7px' : '-280px'};
  width: 280px;
  height: calc(100vh - 14px); /* Full height minus top and bottom margins */
  background: var(--background-color);
  color: var(--text-color);
  border-right: 1px solid var(--border-color);
  transition: left var(--transition-speed) ease, background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  overflow-y: auto;
  z-index: 999;
  box-shadow: ${props => props.isOpen ? 'var(--box-shadow)' : 'none'};
  border-radius: var(--border-radius, 8px);
  
  @media (max-width: 992px) {
    top: 71px; /* 15px (header top) + 64px (header height) */
    height: calc(100vh - 78px); /* 100vh - (15px top + 64px header + 15px bottom) */
    border-radius: 0 0 0 var(--border-radius, 8px);
  }
  
  @media (max-width: 768px) {
    top: 67px; /* 15px (header top) + 60px (header height on mobile) */
    height: calc(100vh - 73px);
    width: 260px;
    left: ${props => props.isOpen ? '7px' : '-260px'};
  }
  
  @media (max-width: 576px) {
    width: 250px;
    left: ${props => props.isOpen ? '7px' : '-250px'};
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 0.3rem;
  width: 280px; /* Match the sidebar width */
  padding-left: 0.8rem;
  background: var(--background-color);
  z-index: 1000;
  border-radius: var(--border-radius, 8px) var(--border-radius, 8px) 0 0;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  
  @media (max-width: 992px) {
    display: none; /* Hide on mobile/tablet */
  }
  
  @media (max-width: 768px) {
    width: 260px; /* Match the sidebar width on smaller screens */
  }
  
  @media (max-width: 576px) {
    width: 250px; /* Match the sidebar width on mobile */
  }
  
  /* Ensure proper spacing */
`;

const SidebarToggleButton = styled.button`
  background-color: var(--primary-color);
  color: var(--button-text);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease, background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  margin-right: 0.6rem;
  z-index: 1001;
  padding: 0;
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const SidebarLogo = styled.div`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: color var(--transition-speed) ease;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
    fill: var(--primary-color);
    transition: fill var(--transition-speed) ease;
  }
`;

const SidebarContent = styled.div`
  padding: 0;
  overflow-y: auto;
  margin-top: 65px;
  height: calc(100% - 70px); /* Adjust for header height */
  
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
  
  @media (max-width: 992px) {
    height: 100%; /* Full height on mobile/tablet */
  }
  
  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;



const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.6rem;
  margin: 0.1rem 0.3rem;
  border-radius: 8px;
  transition: all var(--transition-speed) ease, background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  color: var(--text-color);
  font-size: 0.85rem;
  
  &:hover {
    background-color: var(--sidebar-hover-bg);
    color: var(--primary-color);
  }
  
  ${props => props.active && `
    background-color: var(--sidebar-active-bg);
    color: var(--primary-color);
    font-weight: bold;
  `}
`;

const NavGroupTitle = styled.div`
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  font-size: 0.9rem;
  transition: color var(--transition-speed) ease;
  display: flex;
  align-items: center;
  color: inherit;
`;

const DayNumber = styled.span`
  font-size: 0.95rem;
  margin-right: 0.3rem;
`;

const DayTitle = styled.span`
  font-size: 0.8rem;
  opacity: 0.85;
  font-weight: normal;
`;

const NavGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease, background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  width: 100%;
  border-radius: 8px;
  margin: 0.1rem 0.3rem;
  width: calc(100% - 0.6rem);
  color: var(--text-color);
  
  &:hover {
    background-color: var(--sidebar-hover-bg);
    color: var(--primary-color);
  }
  
  ${props => props.active && `
    background-color: var(--sidebar-active-bg);
    font-weight: bold;
    color: var(--primary-color);
  `}
  
  svg {
    color: var(--text-color);
    opacity: 0.8;
    transition: transform var(--transition-speed) ease, color var(--transition-speed) ease;
    font-size: 0.9rem;
  }
  
  &:hover svg {
    opacity: 1;
    transform: scale(1.1);
    color: var(--primary-color);
  }
`;

const NavGroupContent = styled.div`
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  overflow: hidden;
  transition: max-height var(--transition-speed) ease;
  margin: 0 0.3rem 0.2rem 0.8rem;
  transition: max-height var(--transition-speed) ease, background-color var(--transition-speed) ease;
  padding: ${props => props.isOpen ? '0.2rem 0' : '0'};
  border-left: 1px solid #e4e4e4;
  margin-left: 1rem !important;
  
  /* Styling for nested content */
  &.course-content {
    margin-left: 0.6rem;
  }
`;

const NavGroup = styled.div`
  margin-bottom: 0;
  
  /* Nested NavGroup styling */
  .nested-nav-group {
    margin-left: 0.3rem;
    
    ${NavGroupContent} {
      margin-left: 0.5rem;
    }
  }
`;

const TopicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  
  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    transition: fill var(--transition-speed) ease;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openGroups, setOpenGroups] = useState({});
  const [courseContentOpen, setCourseContentOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();
  
  // Define the navigation structure with icons
  const navigation = [
    {
      day: 'Day 1',
      path: '/day1',
      topics: [
        { name: 'HTML Basics', path: '/day1/html-basics', icon: <FaHtml5 /> },
        { name: 'Headings', path: '/day1/headings', icon: <FaHeading /> },
        { name: 'Paragraphs & Text', path: '/day1/paragraphs-text', icon: <FaAlignLeft /> },
        { name: 'Attributes', path: '/day1/attributes', icon: <FaIdCard /> },
        { name: 'Tables', path: '/day1/tables', icon: <FaTable /> },
        { name: 'Forms', path: '/day1/forms', icon: <FaWpforms /> },
        { name: 'Images', path: '/day1/images', icon: <FaImage /> },
      ]
    },
    {
      day: 'Day 2',
      path: '/day2',
      topics: [
        { name: 'CSS Introduction', path: '/day2/css-introduction', icon: <FaCss3Alt /> },
        { name: 'CSS Selectors', path: '/day2/css-selectors', icon: <FaListUl /> },
        { name: 'Classes & IDs', path: '/day2/classes-ids', icon: <FaIdCard /> },
        { name: 'Div & Span', path: '/day2/div-span', icon: <FaColumns /> },
        { name: 'Box Model', path: '/day2/box-model', icon: <FaBoxOpen /> },
      ]
    },
    {
      day: 'Day 3',
      path: '/day3',
      topics: [
        { name: 'Flexbox & Grid', path: '/day3/flexbox-grid', icon: <FaLayerGroup /> },
        { name: 'Styling Forms & Buttons', path: '/day3/styling-forms-buttons', icon: <FaWpforms /> },
        { name: 'Responsive Design', path: '/day3/responsive-design', icon: <FaTabletAlt /> },
      ]
    },
    {
      day: 'Day 4',
      path: '/day4',
      topics: [
        { name: 'Variables', path: '/day4/variables', icon: <FaJs /> },
        { name: 'Data Types', path: '/day4/data-types', icon: <FaVial /> },
        { name: 'Operators & Conditionals', path: '/day4/operators-conditionals', icon: <FaEquals /> },
      ]
    },
    {
      day: 'Day 5',
      path: '/day5',
      topics: [
        { name: 'Functions', path: '/day5/functions', icon: <FaCodeBranch /> },
        { name: 'Arrays & Objects', path: '/day5/arrays-objects', icon: <FaDatabase /> },
        { name: 'Loops', path: '/day5/loops', icon: <FaSyncAlt /> },
      ]
    },
  ];
  
  // Find the active day based on current location
  const findActiveDay = () => {
    for (const navGroup of navigation) {
      if (location.pathname.startsWith(navGroup.path)) {
        return navGroup.day;
      }
    }
    return null;
  };
  
  // Check if any course page is active
  const isCourseActive = () => {
    return navigation.some(navGroup => location.pathname.startsWith(navGroup.path));
  };
  
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
  
  const toggleCourseContent = () => {
    setCourseContentOpen(!courseContentOpen);
  };
  
  // Effect to handle initial page load only
  useEffect(() => {
    const activeDay = findActiveDay();
    // If we're on a course page
    if (isCourseActive()) {
      // Open the course content section
      setCourseContentOpen(true);
      
      // If there's an active day and no open groups yet
      if (activeDay && Object.keys(openGroups).length === 0) {
        // Open the active day's group
        setOpenGroups({ [activeDay]: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <Backdrop isOpen={isOpen} onClick={toggleSidebar} theme={theme} />
      <SidebarContainer isOpen={isOpen} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
        <SidebarHeader>
          <SidebarToggleButton 
            onClick={toggleSidebar} 
            aria-label="Toggle Sidebar" 
            title="Toggle Sidebar"
          >
            <FaBars />
          </SidebarToggleButton>
          <SidebarLogo>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 62.3 96.9 81.5 4.7 1.6 9.6 3.1 14.5 4.5-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4z"/>
            </svg>
            React Training
          </SidebarLogo>
        </SidebarHeader>
        <SidebarContent>
          {/* Course Content Menu Item */}
          <NavGroup>
            <NavGroupHeader 
              active={courseContentOpen || isCourseActive()}
              onClick={toggleCourseContent}
            >
              <NavGroupTitle active={courseContentOpen || isCourseActive()}>
                <TopicIcon><FaBook /></TopicIcon>
                Course Content
              </NavGroupTitle>
              {courseContentOpen ? <FaChevronDown /> : <FaChevronRight />}
            </NavGroupHeader>
            
            {/* Days nested under Course Content */}
            <NavGroupContent isOpen={courseContentOpen} className="course-content">
              {navigation.map((navGroup) => {
                const isDayActive = location.pathname.startsWith(navGroup.path);
                // Group is only open if it's explicitly set to open in state
                const isGroupOpen = !!openGroups[navGroup.day];
                
                return (
                  <NavGroup key={navGroup.day} className="nested-nav-group">
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
                        <TopicIcon>
                          <FaDesktop />
                        </TopicIcon>
                        Overview
                      </NavItem>
                      
                      {navGroup.topics.map((topic) => (
                        <NavItem 
                          key={topic.path} 
                          to={topic.path}
                          active={location.pathname === topic.path}
                        >
                          <TopicIcon>
                            {topic.icon}
                          </TopicIcon>
                          {topic.name}
                        </NavItem>
                      ))}
                    </NavGroupContent>
                  </NavGroup>
                );
              })}
            </NavGroupContent>
          </NavGroup>
          
          {/* Additional navigation items below course content */}
          <NavGroup>
            <NavItem 
              to="/code-editor" 
              active={location.pathname === "/code-editor"}
            >
              <TopicIcon>
                <FaCode />
              </TopicIcon>
              Code Editor
            </NavItem>
            <NavItem 
              to="/search" 
              active={location.pathname === "/search"}
            >
              <TopicIcon>
                <FaSearch />
              </TopicIcon>
              Advanced Search
            </NavItem>
          </NavGroup>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;