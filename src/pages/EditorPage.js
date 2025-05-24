import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeEditor from '../components/CodeEditor';
import { useLocation } from 'react-router-dom';

const EditorPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const EditorPage = () => {
  const [editorData, setEditorData] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    // Check if we're in standalone mode (opened from another page)
    const params = new URLSearchParams(location.search);
    const isStandalone = params.get('standalone') === 'true';
    
    if (isStandalone) {
      try {
        // Get the editor data from sessionStorage
        const storedData = sessionStorage.getItem('editorData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setEditorData(parsedData);
          
          // Clear the data from sessionStorage to avoid issues with refreshing
          sessionStorage.removeItem('editorData');
        }
      } catch (error) {
        console.error('Error loading editor data:', error);
      }
    }
  }, [location]);
  
  // Handle closing the editor (closes the tab)
  const handleClose = () => {
    window.close();
  };
  
  if (!editorData) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading editor...</h2>
        <p>If the editor doesn't load, please try again from the main page.</p>
      </div>
    );
  }
  
  return (
    <EditorPageContainer>
      <CodeEditor
        initialHtml={editorData.htmlCode || ''}
        initialCss={editorData.cssCode || ''}
        initialJs={editorData.jsCode || ''}
        enabledTabs={editorData.enabledTabs || { html: true, css: true, js: true }}
        onClose={handleClose}
        isStandalone={true}
        startFullscreen={editorData.fullscreen}
      />
    </EditorPageContainer>
  );
};

export default EditorPage;