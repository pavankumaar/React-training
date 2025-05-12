import React from 'react';
import styled from 'styled-components';

const CodeContainer = styled.div`
  background-color: var(--light-gray);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  overflow-x: auto;
`;

const Pre = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  white-space: pre-wrap;
`;

const CodeBlock = ({ children }) => {
  return (
    <CodeContainer className="code-block">
      <Pre>{children}</Pre>
    </CodeContainer>
  );
};

export default CodeBlock;