import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaCopy } from 'react-icons/fa';

const CodeContainer = styled.div`
  background-color: var(--code-background);
  color: var(--code-text);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  overflow-x: auto;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  position: relative;
`;

const Pre = styled.pre`
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  white-space: pre-wrap;
  color: inherit;
`;

const CopyButton = styled.button`
  position: absolute;
  padding: 10px;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #ffffff;
  color: var(--primary-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease,
              color var(--transition-speed) ease,
              transform var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;

  [data-theme='dark'] & {
    background-color: #000000;
    color: var(--primary-color);
    border-color: var(--border-color);
  }

  &:hover {
    background-color: var(--primary-color);
    color: #ffffff;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color);
  }
`;

const CopyFeedback = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 3rem;
  background-color: var(--success-color);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: ${props => (props.visible ? '1' : '0')};
  transform: ${props => (props.visible ? 'translateX(0)' : 'translateX(10px)')};
  transition: opacity var(--transition-speed) ease, transform var(--transition-speed) ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const CodeBlock = ({ children }) => {
  const [showCopied, setShowCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.textContent;
      navigator.clipboard.writeText(codeText)
        .then(() => {
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <CodeContainer className="code-block">
      <Pre ref={codeRef}>{children}</Pre>
      <CopyFeedback visible={showCopied}>Copied!</CopyFeedback>
      <CopyButton onClick={handleCopy} aria-label="Copy code">
        <FaCopy size={20} />
      </CopyButton>
    </CodeContainer>
  );
};

export default CodeBlock;