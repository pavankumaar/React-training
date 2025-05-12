import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import { useAuth } from '../context/AuthContext';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
  background-color: var(--background-color);
`;

const LogoutButton = styled.button`
  background-color: var(--light-gray);
  color: var(--dark-gray);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--medium-gray);
  }
`;

const Main = styled.main`
  min-height: calc(100vh - 140px); /* Adjusted for header and footer */
  padding: 2rem 0;
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
      <Header>
        <LogoutButton onClick={handleLogout}>
          Logout (Admin)
        </LogoutButton>
      </Header>
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