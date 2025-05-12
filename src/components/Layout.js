import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const Main = styled.main`
  min-height: calc(100vh - 100px); /* Adjusted for removal of header */
  padding: 3rem 0; /* Increased top padding to compensate for missing header */
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
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