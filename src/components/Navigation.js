import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const NavContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  transition: border-color var(--transition-speed) ease;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
  }
  
  @media (max-width: 375px) {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme === 'dark' ? '#000000' : '#FFFFFF'};
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#000000'};
  border: 2px solid var(--border-color);
  border-radius: 50%;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.theme === 'dark' ? '#333333' : '#F0F0F0'};
    color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#000000'};
    border-color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
  
  @media (max-width: 375px) {
    width: 28px;
    height: 28px;
  }
`;

const HeadingContainer = styled.div`
  margin-left: 1rem;
  
  @media (max-width: 768px) {
    margin-left: 0.75rem;
  }
  
  @media (max-width: 576px) {
    margin-left: 0.5rem;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 375px) {
    font-size: 1rem;
  }
`;

const PageSubtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 375px) {
    font-size: 0.75rem;
  }
`;

const Navigation = ({ prevLink, nextLink, indexLink, title, subtitle }) => {  
  // Determine the appropriate back link
  // If indexLink is provided, use it, otherwise go to the main page
  const backLink = indexLink || '/';
  const { theme } = useTheme();
  
  return (
    <NavContainer className="navigation">
      <NavLink to={backLink} aria-label="Go back" theme={theme}>
        <FaArrowLeft />
      </NavLink>
      
      {(title || subtitle) && (
        <HeadingContainer>
          {title && <PageTitle>{title}</PageTitle>}
          {subtitle && <PageSubtitle>{subtitle}</PageSubtitle>}
        </HeadingContainer>
      )}
    </NavContainer>
  );
};

export default Navigation;