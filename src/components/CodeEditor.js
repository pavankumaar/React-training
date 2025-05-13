import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

const EditorContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const EditorContent = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
`;

const EditorTabs = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.button`
  padding: 5px 15px;
  background-color: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const EditorBody = styled.div`
  display: flex;
  height: calc(100% - 120px);
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const EditorPane = styled.div`
  flex: 1;
  overflow: auto;
  border-bottom: 1px solid #ddd;
  min-height: 200px;
  
  @media (min-width: 768px) {
    border-bottom: none;
    border-right: ${props => props.last ? 'none' : '1px solid #ddd'};
    min-height: auto;
  }
`;

const PreviewPane = styled.div`
  flex: 1;
  overflow: auto;
  padding: 10px;
  position: relative;
  min-height: 300px;
  
  @media (min-width: 768px) {
    min-height: auto;
  }
`;

const LoadingMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  text-align: center;
  font-style: italic;
  color: #666;
  z-index: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f5f5f5;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--primary-dark);
    color: white; /* Ensure text remains white on hover */
  }
  
  &:active {
    background-color: var(--primary-darker);
  }
`;

const CodeEditor = ({ 
  initialHtml = '', 
  initialCss = '', 
  initialJs = '', 
  enabledTabs = { html: true, css: true, js: true },
  onClose 
}) => {
  // Set the initial active tab to the first enabled tab
  const getInitialActiveTab = () => {
    if (enabledTabs.html) return 'html';
    if (enabledTabs.css) return 'css';
    if (enabledTabs.js) return 'js';
    return 'html'; // Fallback
  };
  
  const [activeTab, setActiveTab] = useState(getInitialActiveTab());
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [jsCode, setJsCode] = useState(initialJs);
  const [isLoading, setIsLoading] = useState(true);
  
  // Run the code when the editor is first opened or when code changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleRun();
    }, 1000); // Debounce for 1 second
    
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlCode, cssCode, jsCode]);
  
  const getPreviewContent = () => {
    // Process HTML to convert relative image paths to absolute URLs
    let processedHtml = htmlCode;
    
    // Replace relative image paths in src attributes
    processedHtml = processedHtml.replace(
      /src=["'](\.\/)?([^"']+\.(jpg|jpeg|png|gif|svg|webp))["']/gi,
      (match, relativePath, fileName) => {
        // Check if it's already an absolute URL or data URL
        if (fileName.startsWith('http') || fileName.startsWith('data:')) {
          return match;
        }
        
        // Create absolute URL for the image
        const baseUrl = window.location.origin;
        return `src="${baseUrl}/${fileName}"`;
      }
    );
    
    return `
      <html>
        <head>
          <style>${cssCode}</style>
          <base href="${window.location.origin}/" />
        </head>
        <body>
          ${processedHtml}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
  };
  
  const handleRun = () => {
    // Instead of trying to access the iframe's document directly,
    // we'll recreate the iframe with a data URI containing our content
    setIsLoading(true);
    const iframe = document.getElementById('preview-iframe');
    if (iframe) {
      // Create a new blob URL each time
      const content = getPreviewContent();
      const blob = new Blob([content], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      // Set the iframe src to the new blob URL
      iframe.src = url;
      
      // Clean up the URL object when we're done with it
      iframe.onload = () => {
        setIsLoading(false);
        // Small delay before revoking to ensure content is fully loaded
        setTimeout(() => URL.revokeObjectURL(url), 100);
      };
    }
  };
  
  return (
    <EditorContainer>
      <EditorContent>
        <EditorHeader>
          <h2>Code Editor</h2>
          <EditorTabs>
            {enabledTabs.html && (
              <Tab 
                active={activeTab === 'html'} 
                onClick={() => setActiveTab('html')}
              >
                HTML
              </Tab>
            )}
            {enabledTabs.css && (
              <Tab 
                active={activeTab === 'css'} 
                onClick={() => setActiveTab('css')}
              >
                CSS
              </Tab>
            )}
            {enabledTabs.js && (
              <Tab 
                active={activeTab === 'js'} 
                onClick={() => setActiveTab('js')}
              >
                JavaScript
              </Tab>
            )}
          </EditorTabs>
        </EditorHeader>
        
        <EditorBody>
          {enabledTabs.html && (
            <EditorPane style={{ display: activeTab === 'html' ? 'block' : 'none' }}>
              <CodeMirror
                value={htmlCode}
                height="100%"
                extensions={[html()]}
                onChange={(value) => setHtmlCode(value)}
                theme="light"
              />
            </EditorPane>
          )}
          
          {enabledTabs.css && (
            <EditorPane style={{ display: activeTab === 'css' ? 'block' : 'none' }}>
              <CodeMirror
                value={cssCode}
                height="100%"
                extensions={[css()]}
                onChange={(value) => setCssCode(value)}
                theme="light"
              />
            </EditorPane>
          )}
          
          {enabledTabs.js && (
            <EditorPane style={{ display: activeTab === 'js' ? 'block' : 'none' }}>
              <CodeMirror
                value={jsCode}
                height="100%"
                extensions={[javascript()]}
                onChange={(value) => setJsCode(value)}
                theme="light"
              />
            </EditorPane>
          )}
          
          <PreviewPane>
            {isLoading && <LoadingMessage>Loading preview...</LoadingMessage>}
            <iframe
              id="preview-iframe"
              title="Preview"
              width="100%"
              height="100%"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin"
            />
          </PreviewPane>
        </EditorBody>
        
        <ButtonsContainer>
          <Button onClick={handleRun}>Run</Button>
          <Button onClick={onClose}>Close</Button>
        </ButtonsContainer>
      </EditorContent>
    </EditorContainer>
  );
};

export default CodeEditor;