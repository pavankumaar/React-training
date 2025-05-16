import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { useTheme } from '../context/ThemeContext';

// No need for global styles as CodeMirror handles its own styling

const EditorContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px); /* Adjust for header and margins */
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: var(--primary-color);
  color: white;
  padding-right: ${props => props.isFullscreen ? '50px' : '15px'};
`;

const EditorTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  background-color: var(--secondary-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 10px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  margin-right: 5px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.2s ease;
  position: relative;
  bottom: -1px;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  &:last-child {
    margin-right: 0;
  }
`;

const FullscreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MinimizeButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10000;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0;
  border-radius: 4px;
  
  &:hover {
    background-color: var(--primary-color-dark, #0056b3);
  }
`;

const EditorsContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  flex: 1;
  overflow: auto;
  height: calc(100% - 50px); /* Adjust for header height */
`;

const EditorPanel = styled.div`
  flex: 1;
  height: 100%;
  display: ${props => props.active ? 'block' : 'none'};
  position: relative;
  overflow: auto;
  
  .cm-editor {
    height: 100%;
  }
  
  .cm-scroller {
    overflow: auto;
  }
`;

const PreviewContainer = styled.div`
  flex: 1;
  height: ${props => props.isMobile ? '50%' : '100%'};
  border-left: ${props => props.isMobile ? 'none' : '1px solid var(--border-color)'};
  border-top: ${props => props.isMobile ? '1px solid var(--border-color)' : 'none'};
  background-color: white;
  overflow: auto;
  min-height: ${props => props.isMobile ? '300px' : 'auto'};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PreviewFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background-color: white;
`;

// Default code examples
const DEFAULT_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple HTML example.</p>
  
  <div class="container">
    <h2>Features</h2>
    <ul>
      <li>HTML Structure</li>
      <li>CSS Styling</li>
      <li>JavaScript Functionality</li>
    </ul>
  </div>
  
  <button id="changeColorBtn">Change Colors</button>
</body>
</html>`;

const DEFAULT_CSS = `/* Basic styles */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.container {
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 15px;
  margin-top: 20px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}`;

const DEFAULT_JS = `// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the button
  const changeColorBtn = document.getElementById('changeColorBtn');
  
  // Add click event listener
  changeColorBtn.addEventListener('click', function() {
    // Generate random colors
    const randomColor = getRandomColor();
    const randomBgColor = getRandomColor(0.1);
    
    // Change styles
    document.body.style.backgroundColor = randomBgColor;
    document.querySelector('h1').style.color = randomColor;
  });
  
  // Function to generate random colors
  function getRandomColor(opacity = 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return \`rgba(\${r}, \${g}, \${b}, \${opacity})\`;
  }
});`;

const FullscreenButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 5px;
  }
`;

const CodeEditorPage = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [jsCode, setJsCode] = useState(DEFAULT_JS);
  const [output, setOutput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  
  // No need to add global styles for CodeMirror
  
  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Handle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    
    // When entering fullscreen, add a class to body to prevent scrolling
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const previewFrameRef = useRef(null);
  
  // Create the initial output on component mount
  useEffect(() => {
    // Check if we're authenticated to prevent redirect issues
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus !== 'true') {
      return; // Don't proceed if not authenticated
    }
    
    // Create a complete HTML document with embedded CSS and JS
    const fullCode = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    `;
    
    // Set initial output
    setOutput(fullCode);
    
    // Run the code again after a short delay to ensure iframe is ready
    const timer = setTimeout(() => {
      // Create a complete HTML document with embedded CSS and JS
      const refreshedCode = `
        ${htmlCode}
        <style>${cssCode}</style>
        <script>${jsCode}</script>
      `;
      
      // Force a complete refresh
      setOutput('');
      setTimeout(() => {
        setOutput(refreshedCode);
      }, 50);
    }, 300);
    
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // Update the preview whenever code changes
  useEffect(() => {
    // Create a complete HTML document with embedded CSS and JS
    const fullCode = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    `;
    setOutput(fullCode);
  }, [htmlCode, cssCode, jsCode]);
  
  const updatePreview = () => {
    // Create a complete HTML document with embedded CSS and JS
    const fullCode = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    `;
    setOutput(fullCode);
  };
  
  const handleRun = () => {
    // Create a complete HTML document with embedded CSS and JS
    const fullCode = `
      ${htmlCode}
      <style>${cssCode}</style>
      <script>${jsCode}</script>
    `;
    
    // Force a complete refresh by setting to empty first
    setOutput('');
    
    // Use setTimeout to ensure the DOM has time to update
    setTimeout(() => {
      setOutput(fullCode);
    }, 50);
  };
  
  const handleClear = () => {
    if (activeTab === 'html') {
      setHtmlCode(DEFAULT_HTML);
    } else if (activeTab === 'css') {
      setCssCode(DEFAULT_CSS);
    } else if (activeTab === 'js') {
      setJsCode(DEFAULT_JS);
    }
  };
  
  const handleHtmlChange = (value) => {
    setHtmlCode(value);
  };
  
  const handleCssChange = (value) => {
    setCssCode(value);
  };
  
  const handleJsChange = (value) => {
    setJsCode(value);
  };
  
  // CodeMirror handles tab key, line numbers, and scrolling internally
  
  const editorContent = (
    <>
      <EditorHeader isFullscreen={isFullscreen}>
        <EditorTitle>Web Code Editor</EditorTitle>
        <ButtonGroup>
          <Button onClick={handleRun}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          </Button>
          <Button onClick={handleClear}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </Button>
          {!isFullscreen && (
            <FullscreenButton onClick={toggleFullscreen}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </FullscreenButton>
          )}
        </ButtonGroup>
      </EditorHeader>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'html'} 
          onClick={() => setActiveTab('html')}
        >
          HTML
        </Tab>
        <Tab 
          active={activeTab === 'css'} 
          onClick={() => setActiveTab('css')}
        >
          CSS
        </Tab>
        <Tab 
          active={activeTab === 'js'} 
          onClick={() => setActiveTab('js')}
        >
          JavaScript
        </Tab>
      </TabsContainer>
      
      <EditorsContainer isMobile={isMobile}>
        <EditorPanel active={activeTab === 'html'}>
          <CodeMirror
            value={htmlCode}
            height="100%"
            extensions={[html()]}
            onChange={handleHtmlChange}
            theme={theme === 'dark' ? 'dark' : 'light'}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              searchKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true
            }}
          />
        </EditorPanel>
        
        <EditorPanel active={activeTab === 'css'}>
          <CodeMirror
            value={cssCode}
            height="100%"
            extensions={[css()]}
            onChange={handleCssChange}
            theme={theme === 'dark' ? 'dark' : 'light'}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              searchKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true
            }}
          />
        </EditorPanel>
        
        <EditorPanel active={activeTab === 'js'}>
          <CodeMirror
            value={jsCode}
            height="100%"
            extensions={[javascript()]}
            onChange={handleJsChange}
            theme={theme === 'dark' ? 'dark' : 'light'}
            basicSetup={{
              lineNumbers: true,
              highlightActiveLineGutter: true,
              highlightSpecialChars: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              syntaxHighlighting: true,
              bracketMatching: true,
              closeBrackets: true,
              autocompletion: true,
              rectangularSelection: true,
              crosshairCursor: true,
              highlightActiveLine: true,
              highlightSelectionMatches: true,
              closeBracketsKeymap: true,
              searchKeymap: true,
              foldKeymap: true,
              completionKeymap: true,
              lintKeymap: true
            }}
          />
        </EditorPanel>
        
        <PreviewContainer isMobile={isMobile}>
          <PreviewFrame 
            ref={previewFrameRef}
            title="Code Preview"
            srcDoc={output}
            sandbox="allow-scripts"
          />
        </PreviewContainer>
      </EditorsContainer>
    </>
  );

  return (
    <>
      {isFullscreen ? (
        <FullscreenContainer>
          <MinimizeButton onClick={toggleFullscreen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/>
            </svg>
          </MinimizeButton>
          {editorContent}
        </FullscreenContainer>
      ) : (
        <Layout title="Code Editor" description="Interactive code editor for web development">
          <EditorContainer>
            {editorContent}
          </EditorContainer>
        </Layout>
      )}
    </>
  );
};

export default CodeEditorPage;