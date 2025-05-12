import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  
  &:hover {
    color: white;
    opacity: 0.9;
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo to="/">React Training Course</Logo>
          {/* Day links removed as requested */}
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;