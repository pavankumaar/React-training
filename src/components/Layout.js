import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  height: 60px;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  
  &:hover {
    color: white;
    opacity: 0.9;
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 140px);
  padding: 2rem 0;
  margin-top: 60px; /* Same as header height */
`;

const Layout = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <>
      <GlobalStyles />
      <FixedHeader>
        <Logo to="/">React Training Course</Logo>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeToggle />
          <LogoutButton onClick={handleLogout} aria-label="Logout" title="Logout">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
          </LogoutButton>
        </div>
      </FixedHeader>
      <Main>
        <div className="container">
          {children}
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;