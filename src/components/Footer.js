import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--light-gray);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--medium-gray);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin-bottom: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <Copyright>
            &copy; {currentYear} React Training Course. All rights reserved.
          </Copyright>
          <div>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              React Documentation
            </a>
          </div>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer;