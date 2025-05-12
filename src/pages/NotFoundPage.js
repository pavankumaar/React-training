import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-size: 1.1rem;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundContainer>
        <Title>404</Title>
        <Message>Oops! The page you're looking for doesn't exist.</Message>
        <HomeButton to="/">Return to Home</HomeButton>
      </NotFoundContainer>
    </Layout>
  );
};

export default NotFoundPage;