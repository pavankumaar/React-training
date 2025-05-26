import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const NavContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  transition: border-color var(--transition-speed) ease;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    margin-top: 2.5rem;
    padding-top: 1.25rem;
  }
  
  @media (max-width: 576px) {
    margin-top: 2rem;
    padding-top: 1rem;
  }
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  background-color: ${props => props.theme === 'dark' ? '#222' : '#f5f5f5'};
  color: var(--text-color);
  border-radius: 8px;
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const PrevButton = styled(NavButton)`
  svg {
    margin-right: 0.5rem;
  }
`;

const NextButton = styled(NavButton)`
  svg {
    margin-left: 0.5rem;
  }
`;

const IndexButton = styled(NavButton)`
  svg {
    margin-right: 0.5rem;
  }
`;

const ButtonText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

const BottomNavigation = ({ prevLink, nextLink, indexLink, prevText, nextText }) => {
  const { theme } = useTheme();
  
  return (
    <NavContainer>
      {prevLink ? (
        <PrevButton to={prevLink} theme={theme}>
          <FaArrowLeft />
          <ButtonText>{prevText || 'Previous'}</ButtonText>
        </PrevButton>
      ) : (
        <div></div> // Empty div to maintain spacing
      )}
      
      {indexLink && (
        <IndexButton to={indexLink} theme={theme}>
          <FaHome />
          <ButtonText>Index</ButtonText>
        </IndexButton>
      )}
      
      {nextLink ? (
        <NextButton to={nextLink} theme={theme}>
          <ButtonText>{nextText || 'Next'}</ButtonText>
          <FaArrowRight />
        </NextButton>
      ) : (
        <div></div> // Empty div to maintain spacing
      )}
    </NavContainer>
  );
};

export default BottomNavigation;