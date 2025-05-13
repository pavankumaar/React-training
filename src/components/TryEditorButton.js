import React, { useState } from 'react';
import styled from 'styled-components';
import CodeEditor from './CodeEditor';

const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 1rem 0;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    color: white; /* Ensure text remains white on hover */
  }
  
  &:active {
    background-color: var(--primary-darker);
  }
`;

const TryEditorButton = ({ 
  htmlCode = '', 
  cssCode = '', 
  jsCode = '',
  enabledTabs = { html: true, css: true, js: true }
}) => {
  const [showEditor, setShowEditor] = useState(false);
  
  return (
    <>
      <Button onClick={() => setShowEditor(true)}>
        <span role="img" aria-label="code">💻</span> Try on Editor
      </Button>
      
      {showEditor && (
        <CodeEditor
          initialHtml={htmlCode}
          initialCss={cssCode}
          initialJs={jsCode}
          enabledTabs={enabledTabs}
          onClose={() => setShowEditor(false)}
        />
      )}
    </>
  );
};

export default TryEditorButton;