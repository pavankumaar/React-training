import React from 'react';
import styled from 'styled-components';

const ExampleContainer = styled.div`
  border: 1px solid var(--medium-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
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