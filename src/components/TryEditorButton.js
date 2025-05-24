import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaExpand } from 'react-icons/fa';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.9rem;
  background-color: rgba(52, 152, 219, 0.15);
  color: var(--primary-color, #3498db);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  margin: 1rem 0;
  gap: 8px;
  font-weight: 500;
  
  [data-theme='dark'] & {
    background-color: rgba(52, 152, 219, 0.2);
  }
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.25);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 0.9rem;
  background-color: rgba(52, 152, 219, 0.15);
  color: var(--primary-color, #3498db);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  [data-theme='dark'] & {
    background-color: rgba(52, 152, 219, 0.2);
  }
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.25);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const TryEditorButton = ({ 
  htmlCode = '', 
  cssCode = '', 
  jsCode = '',
  enabledTabs = { html: true, css: true, js: true }
}) => {
  // Function to open editor in a new tab
  const openEditorInNewTab = (fullscreen = false) => {
    // Create a new window/tab
    const editorWindow = window.open('', '_blank');
    
    if (!editorWindow) {
      alert('Pop-up blocked. Please allow pop-ups for this site to use the editor in a new tab.');
      return;
    }
    
    // Prepare the code data to pass to the new window
    const editorData = {
      htmlCode,
      cssCode,
      jsCode,
      enabledTabs,
      fullscreen
    };
    
    // Store the data in sessionStorage to retrieve it in the new tab
    sessionStorage.setItem('editorData', JSON.stringify(editorData));
    
    // Create HTML content for the new tab
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Code Editor</title>
        <link rel="stylesheet" href="${window.location.origin}/index.css">
        <script>
          // This will redirect to our editor page with a flag to load from sessionStorage
          window.location.href = "${window.location.origin}/editor?standalone=true";
        </script>
      </head>
      <body>
        <div>Loading editor...</div>
      </body>
      </html>
    `;
    
    // Write the content to the new window
    editorWindow.document.write(htmlContent);
  };
  
  return (
    <ButtonGroup>
      <Button onClick={() => openEditorInNewTab(false)}>
        <span role="img" aria-label="code" style={{ fontSize: '1.2em' }}>💻</span> Try on Editor
      </Button>
    </ButtonGroup>
  );
};

export default TryEditorButton;