import React from 'react';
import styled from 'styled-components';

const CodeContainer = styled.div`
  background-color: var(--code-background);
  color: var(--code-text);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  overflow-x: auto;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
`;

const Pre = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  white-space: pre-wrap;
  color: inherit;
`;

const CodeBlock = ({ children }) => {
  return (
    <CodeContainer className="code-block">
      <Pre>{children}</Pre>
    </CodeContainer>
  );
};

export default CodeBlock;