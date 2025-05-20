import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Breadcrumb from './Breadcrumb';
import PageNavigation from './PageNavigation';
import Sidebar from './Sidebar';
import ExpandableSearch from './ExpandableSearch';
import { FaBars, FaEllipsisV, FaHome, FaCode, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const FixedHeader = styled.header`
  position: fixed;
  top: 7px;
  left: 7px;
  right: 7px;
  border-radius: var(--border-radius, 8px) var(--border-radius, 8px) 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.75rem 0 0.75rem;
  background: linear-gradient(135deg, var(--primary-darker) 0%, var(--primary-color) 100%);
  color: white;
  z-index: 1000;
  height: 64px;
  transition: all var(--transition-speed) ease;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 0 0.5rem;
    height: 60px;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.25rem 0 0.5rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  
  @media (max-width: 576px) {
    gap: 5px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 28px;
    height: 28px;
    fill: white;
    
    @media (max-width: 576px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  
  &:hover {
    color: white;
    opacity: 0.9;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const NavButton = styled(Link)`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 20px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0 12px;
  margin-right: 0.75rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
  
  @media (max-width: 576px) {
    margin-right: 0.25rem;
    padding: 0 8px;
    
    svg {
      margin-right: 3px;
    }
  }
`;

const SidebarToggleButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.75rem;
  padding: 0.5rem 0.25rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    margin-right: 0.5rem;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  @media (max-width: 576px) {
    margin-right: 0.25rem;
  }
`;

const LogoutButton = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0px;
  padding-left: 3px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const MenuButton = styled.button`
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  min-width: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 5px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background: var(--primary-darker);
  border-radius: 12px; /* Increased border radius */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  overflow: hidden;
  width: 200px; /* Increased width */
  transition: all 0.3s ease;
  transform-origin: top right;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  padding: 6px; /* Add padding around all items */
  
  @media (max-width: 768px) {
    top: 55px;
  }
  
  @media (max-width: 576px) {
    width: 180px; /* Increased width for mobile */
    right: 0;
  }
`;

// Base menu item style to be shared by all menu items
const baseMenuItemStyles = `
  display: flex;
  align-items: center;
  padding: 12px 16px; /* Consistent padding for all menu items */
  color: white;
  transition: background-color 0.2s ease;
  font-size: 0.9rem; /* Consistent font size */
  font-weight: normal;
  border-radius: 8px; /* Add border radius to each menu item */
  border: none;
  margin: 2px 0; /* Add small margin between items */
  box-shadow: none; /* Remove any box shadow */
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  svg {
    margin-right: 10px;
    width: 16px;
    height: 16px;
    fill: white;
  }
  
  @media (max-width: 576px) {
    padding: 10px 14px; /* Consistent padding on mobile */
    font-size: 0.85rem; /* Slightly smaller on mobile */
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

// Common styles for all menu items
const menuItemCommonStyles = `
  width: 100%;
  background: none;
  text-align: left;
  cursor: pointer;
  box-shadow: none !important; /* Ensure no box shadow */
  outline: none;
  padding: 12px 16px !important; /* Force consistent padding */
  margin: 2px 0 !important; /* Force consistent margin */
  border: none !important;
`;

// Use the same component for all menu items to ensure consistent styling
const MenuItem = styled(Link)`
  ${baseMenuItemStyles}
  ${menuItemCommonStyles}
  text-decoration: none;
`;

const MenuLogoutItem = styled.button`
  ${baseMenuItemStyles}
  ${menuItemCommonStyles}
`;

const ThemeMenuItem = styled.button`
  ${baseMenuItemStyles}
  ${menuItemCommonStyles}
`;



const Main = styled.main`
  min-height: calc(100vh - 140px);
  padding: 0;
  margin-left: ${props => props.sidebarOpen ? '280px' : '0'};
  transition: margin-left var(--transition-speed) ease, padding var(--transition-speed) ease;
  width: ${props => props.sidebarOpen ? 'auto' : 'auto'};
  overflow-y: auto;
  position: fixed;
  top: 71px; /* 15px (header top) + 64px (header height) */
  left: 7px;
  right: 7px;
  bottom: 7px;
  border-radius: 0 0 var(--border-radius, 8px) var(--border-radius, 8px);
  border-bottom-left-radius: ${props => props.sidebarOpen ? '0' : 'var(--border-radius, 8px)'};
  background-color: var(--card-background, #ffffff);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  /* Custom scrollbar for main content - matching sidebar style */
  &::-webkit-scrollbar {
    width: 5px !important;
    height: 5px !important;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent !important;
    border-radius: 10px !important;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(var(--primary-color-rgb, 74, 144, 226), 0.5) !important;
    border-radius: 10px !important;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color, #4a90e2) !important;
  }
  
  @media (max-width: 992px) {
    width: auto;
    margin-left: 0;
    padding-left: ${props => props.sidebarOpen ? '1rem' : '0'};
  }
  
  @media (max-width: 768px) {
    top: 65px; /* 15px (header top) + 60px (header height on mobile) */
  }
`;

const Layout = ({ children }) => {
  const { logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <>
      <GlobalStyles />
      <FixedHeader>
        <HeaderContent>
          <SidebarToggleButton onClick={toggleSidebar} aria-label="Toggle Sidebar" title="Toggle Sidebar">
            <FaBars />
          </SidebarToggleButton>
          <LogoContainer>
            <Logo to="/">
              <LogoIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 62.3 96.9 81.5 4.7 1.6 9.6 3.1 14.5 4.5-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                </svg>
              </LogoIcon>
              React Training Course
            </Logo>
          </LogoContainer>
          
          {/* Spacer to push items to the right */}
          <div style={{ flexGrow: 1 }}></div>
          
          {/* Expandable Search with Suggestions */}
          <ExpandableSearch />
          
          <HeaderControls>
            {/* Menu Button - Visible on all resolutions */}
            <MenuButton 
              onClick={toggleMobileMenu} 
              aria-label="Menu" 
              title="Menu"
            >
              <FaEllipsisV />
            </MenuButton>
            
            {/* Menu Dropdown */}
            <div ref={mobileMenuRef}>
              <MenuDropdown isOpen={mobileMenuOpen}>
                <MenuItem to="/" onClick={() => setMobileMenuOpen(false)}>
                  <FaHome />
                  Home
                </MenuItem>
                <MenuItem to="/code-editor" onClick={() => setMobileMenuOpen(false)}>
                  <FaCode />
                  Code Editor
                </MenuItem>
                <MenuItem to="/search" onClick={() => setMobileMenuOpen(false)}>
                  <FaSearch />
                  Advanced Search
                </MenuItem>
                <ThemeMenuItem onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}>
                  {/* Using SVG with explicit white fill color */}
                  {theme === 'light' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="white">
                      <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="white">
                      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                    </svg>
                  )}
                  Toggle Theme
                </ThemeMenuItem>
                <MenuLogoutItem onClick={() => { handleLogout(); setMobileMenuOpen(false); }}>
                  <FaSignOutAlt />
                  Logout
                </MenuLogoutItem>
              </MenuDropdown>
            </div>
          </HeaderControls>
        </HeaderContent>
      </FixedHeader>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Main sidebarOpen={sidebarOpen} className="custom-scrollbar">
        <div className="container custom-scrollbar content-container" style={{
          overflow: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(var(--primary-color-rgb, 74, 144, 226), 0.5) transparent',
          padding: '20px',
          height: '100%'
        }}>
          <Breadcrumb />
          {children}
          <PageNavigation />
        </div>
      </Main>
      {/* Footer removed to maintain card layout */}
    </>
  );
};

export default Layout;