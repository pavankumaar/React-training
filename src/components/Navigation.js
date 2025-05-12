import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--medium-gray);
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const Navigation = ({ indexLink }) => {
  const location = useLocation();
  
  // Determine the appropriate back link
  // If indexLink is provided, use it, otherwise go to the main page
  const backLink = indexLink || '/';
  
  return (
    <NavContainer className="navigation">
      <div>
        <NavLink to={backLink}>← Back</NavLink>
      </div>
    </NavContainer>
  );
};

export default Navigation;