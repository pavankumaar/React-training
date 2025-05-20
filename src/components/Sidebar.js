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
  FaBook
} from 'react-icons/fa';
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
  top: 71px; /* 15px (header top) + 64px (header height) */
  left: ${props => props.isOpen ? '7px' : '-280px'};
  width: 280px;
  height: calc(100vh - 78px); /* 100vh - (15px top + 64px header + 15px bottom) */
  background: linear-gradient(135deg, var(--primary-darker) 0%, var(--primary-color) 100%);
  color: white;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: left var(--transition-speed) ease;
  overflow-y: auto;
  z-index: 999;
  box-shadow: ${props => props.isOpen ? 'var(--box-shadow)' : 'none'};
  border-radius: 0 0 0 var(--border-radius, 8px);
  
  @media (max-width: 768px) {
    top: 67px; /* 15px (header top) + 60px (header height on mobile) */
    height: calc(100vh - 90px); /* 100vh - (15px top + 60px header + 15px bottom) */
  }
  padding-top: 0.5rem;
  
  @media (max-width: 768px) {
    top: 67px;
    height: calc(100vh - 73px);
    width: 260px;
    left: ${props => props.isOpen ? '7px' : '-260px'};
  }
  
  @media (max-width: 576px) {
    width: 250px;
    left: ${props => props.isOpen ? '7px' : '-250px'};
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



const NavItem = styled(Link)`
  display: flex;
  align-items: center;
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

const NavGroupContent = styled.div`
  max-height: ${props => props.isOpen ? '2000px' : '0'};
  overflow: hidden;
  transition: max-height var(--transition-speed) ease;
  margin: 0 0.4rem 0.3rem 1.2rem;
  background-color: ${props => props.isOpen ? 'rgba(0, 0, 0, 0.15)' : 'transparent'};
  transition: max-height var(--transition-speed) ease, background-color var(--transition-speed) ease;
  border-radius: 12px;
  padding: ${props => props.isOpen ? '0.3rem 0' : '0'};
  
  /* Styling for nested content */
  &.course-content {
    margin-left: 0.8rem;
  }
`;

const NavGroup = styled.div`
  margin-bottom: 0;
  
  /* Nested NavGroup styling */
  .nested-nav-group {
    margin-left: 0.5rem;
    
    ${NavGroupContent} {
      margin-left: 0.8rem;
    }
  }
`;

const TopicIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
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
      <Backdrop isOpen={isOpen} onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen} className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
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
          
          {/* Add other main navigation items here if needed */}
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;