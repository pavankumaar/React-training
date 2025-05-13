import React from 'react';
import styled from 'styled-components';

const ExampleContainer = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: var(--example-background);
  color: var(--text-color);
  transition: background-color var(--transition-speed) ease, 
              border-color var(--transition-speed) ease,
              color var(--transition-speed) ease;
`;

const ExampleTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Example = ({ title, children }) => {
  return (
    <ExampleContainer className="example">
      {title && <ExampleTitle>{title}</ExampleTitle>}
      {children}
    </ExampleContainer>
  );
};

export default Example;