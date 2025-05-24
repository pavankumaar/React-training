import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { useTheme } from '../context/ThemeContext';
import ConsoleOutput from './ConsoleOutput';
import { FaExpand, FaCompress, FaMinus, FaPlus } from 'react-icons/fa';

const EditorContainer = styled.div`
  position: ${props => props.isStandalone ? 'absolute' : 'fixed'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.isStandalone ? 'transparent' : 'rgba(0, 0, 0, 0.7)'};
  display: flex;
  justify-content: center;
  align-items: ${props => props.isMinimized ? 'flex-end' : 'center'};
  z-index: 1000;
  transition: all 0.3s ease;
`;

const EditorContent = styled.div`
  width: ${props => props.isFullscreen || props.isStandalone ? '100%' : props.isMinimized ? '300px' : '90%'};
  height: ${props => props.isFullscreen || props.isStandalone ? '100%' : props.isMinimized ? '50px' : '90%'};
  background-color: var(--card-background);
  border-radius: ${props => props.isFullscreen || props.isStandalone ? '0' : 'var(--border-radius)'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease, background-color var(--transition-speed) ease;
  margin-bottom: ${props => props.isMinimized ? '20px' : '0'};
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-left: 5px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const EditorTabs = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.button`
  padding: 4px 12px;
  background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '500'};
  font-size: 0.85rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.25)'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
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
  flex: ${props => props.jsOnly ? '1 0 50%' : '1'};
  overflow: auto;
  border-bottom: 1px solid var(--border-color);
  min-height: 200px;
  background-color: var(--code-background);
  transition: background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
  
  @media (min-width: 768px) {
    border-bottom: none;
    border-right: ${props => props.last ? 'none' : '1px solid var(--border-color)'};
    min-height: auto;
  }
`;

const PreviewPane = styled.div`
  flex: ${props => props.jsOnly ? '1 0 50%' : '1'};
  overflow: hidden;
  padding: 10px;
  position: relative;
  min-height: ${props => props.jsOnly ? 'auto' : '300px'};
  background-color: var(--background-color);
  transition: background-color var(--transition-speed) ease;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    min-height: auto;
  }
`;

const IframeContainer = styled.div`
  flex: ${props => props.hasConsole ? '1 0 60%' : '1'};
  position: relative;
  overflow: auto;
  min-height: ${props => props.hasConsole ? '60%' : '100%'};
  transition: flex 0.3s ease;
`;

const LoadingMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)'};
  padding: 10px;
  text-align: center;
  font-style: italic;
  color: var(--text-color);
  z-index: 1;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: var(--light-gray);
  transition: background-color var(--transition-speed) ease;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: rgba(52, 152, 219, 0.15);
  color: var(--primary-color, #3498db);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
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

const CodeEditor = ({ 
  initialHtml = '', 
  initialCss = '', 
  initialJs = '', 
  enabledTabs = { html: true, css: true, js: true },
  onClose,
  isStandalone = false,
  startFullscreen = false
}) => {
  const { theme } = useTheme();
  const iframeRef = useRef(null);
  
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
  const [consoleMessages, setConsoleMessages] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(startFullscreen || window.editorShouldOpenFullscreen || false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  // Reset the global flag
  useEffect(() => {
    if (window.editorShouldOpenFullscreen) {
      window.editorShouldOpenFullscreen = false;
    }
  }, []);
  
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
    
    // Wrap the JavaScript code with console capturing logic
    const wrappedJsCode = `
      // Capture console output
      (function() {
        // Store original console methods
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        const originalInfo = console.info;
        
        // Message queue to avoid circular references
        const messageQueue = [];
        
        // Helper function to safely stringify values
        function safeStringify(obj) {
          if (obj === null) return 'null';
          if (obj === undefined) return 'undefined';
          if (typeof obj === 'function') return obj.toString();
          if (typeof obj !== 'object') return String(obj);
          
          try {
            // Handle circular references
            return JSON.stringify(obj, (key, value) => {
              if (typeof value === 'object' && value !== null) {
                if (messageQueue.includes(value)) return '[Circular Reference]';
                messageQueue.push(value);
              }
              return value;
            });
          } catch (e) {
            return '[Object]';
          } finally {
            // Clear the queue
            messageQueue.length = 0;
          }
        }
        
        // Helper function to format arguments
        function formatArgs(args) {
          return Array.from(args).map(arg => {
            if (typeof arg === 'object' && arg !== null) {
              return safeStringify(arg);
            }
            return String(arg);
          }).join(' ');
        }
        
        // Override console methods
        console.log = function() {
          const content = formatArgs(arguments);
          originalLog.apply(console, arguments);
          window.parent.postMessage({ 
            type: 'console', 
            message: { type: 'log', content } 
          }, '*');
        };
        
        console.error = function() {
          const content = formatArgs(arguments);
          originalError.apply(console, arguments);
          window.parent.postMessage({ 
            type: 'console', 
            message: { type: 'error', content } 
          }, '*');
        };
        
        console.warn = function() {
          const content = formatArgs(arguments);
          originalWarn.apply(console, arguments);
          window.parent.postMessage({ 
            type: 'console', 
            message: { type: 'warn', content } 
          }, '*');
        };
        
        console.info = function() {
          const content = formatArgs(arguments);
          originalInfo.apply(console, arguments);
          window.parent.postMessage({ 
            type: 'console', 
            message: { type: 'info', content } 
          }, '*');
        };
        
        // Capture errors
        window.addEventListener('error', function(event) {
          window.parent.postMessage({ 
            type: 'console', 
            message: { 
              type: 'error', 
              content: \`\${event.message} at line \${event.lineno}:\${event.colno}\` 
            } 
          }, '*');
          return false;
        });
      })();
      
      // User code
      ${jsCode}
    `;
    
    // For JavaScript-only examples with no HTML, create a minimal HTML structure
    const isJsOnly = enabledTabs.js && !enabledTabs.html;
    const htmlContent = isJsOnly ? '<div id="js-only-console">JavaScript Console Output</div>' : processedHtml;
    
    return `
      <html>
        <head>
          <style>
            ${cssCode}
            ${isJsOnly ? `
              body {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                padding: 20px;
                color: #333;
                background-color: #f5f5f5;
              }
              #js-only-console {
                text-align: center;
                padding: 20px;
                font-size: 16px;
                color: #666;
                border: 1px dashed #ccc;
                border-radius: 4px;
              }
            ` : ''}
          </style>
          <base href="${window.location.origin}/" />
        </head>
        <body>
          ${htmlContent}
          <script>${wrappedJsCode}</script>
        </body>
      </html>
    `;
  };
  
  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'console' && event.data.message) {
        setConsoleMessages(prevMessages => [...prevMessages, event.data.message]);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  const handleRun = () => {
    // Clear previous console messages
    setConsoleMessages([]);
    
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
  
  // Function to clear console messages
  const clearConsole = () => {
    setConsoleMessages([]);
  };
  
  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (isMinimized) setIsMinimized(false);
  };
  
  // Toggle minimized mode
  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
    if (isFullscreen) setIsFullscreen(false);
  };

  return (
    <EditorContainer isMinimized={isMinimized} isStandalone={isStandalone}>
      <EditorContent isFullscreen={isFullscreen} isMinimized={isMinimized} isStandalone={isStandalone}>
        <EditorHeader>
          <h2>Code Editor</h2>
          {!isMinimized && (
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
          )}
          <HeaderActions>
            <IconButton onClick={toggleMinimized} title={isMinimized ? "Expand" : "Minimize"}>
              {isMinimized ? <FaPlus /> : <FaMinus />}
            </IconButton>
            <IconButton onClick={toggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </IconButton>
          </HeaderActions>
        </EditorHeader>
        
        {!isMinimized && (
          <EditorBody jsOnly={enabledTabs.js && !enabledTabs.html}>
            {enabledTabs.html && (
              <EditorPane style={{ display: activeTab === 'html' ? 'block' : 'none' }}>
                <CodeMirror
                  value={htmlCode}
                  height="100%"
                  extensions={[html()]}
                  onChange={(value) => setHtmlCode(value)}
                  theme={theme === 'dark' ? 'dark' : 'light'}
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
                  theme={theme === 'dark' ? 'dark' : 'light'}
                />
              </EditorPane>
            )}
            
            {enabledTabs.js && (
              <EditorPane 
                style={{ display: activeTab === 'js' ? 'block' : 'none' }}
                jsOnly={enabledTabs.js && !enabledTabs.html}
              >
                <CodeMirror
                  value={jsCode}
                  height="100%"
                  extensions={[javascript()]}
                  onChange={(value) => setJsCode(value)}
                  theme={theme === 'dark' ? 'dark' : 'light'}
                />
              </EditorPane>
            )}
            
            {/* For JavaScript-only mode, use the PreviewPane just for console output */}
            {enabledTabs.js && !enabledTabs.html ? (
              <PreviewPane jsOnly={true}>
                {/* Hidden iframe for JavaScript execution */}
                <div style={{ display: 'none' }}>
                  <iframe
                    id="preview-iframe"
                    ref={iframeRef}
                    title="JavaScript Runner"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    sandbox="allow-scripts allow-same-origin allow-modals"
                  />
                </div>
                
                {/* Console takes full height in JS-only mode */}
                {consoleMessages.length > 0 ? (
                  <ConsoleOutput 
                    messages={consoleMessages} 
                    onClear={clearConsole}
                    fullHeight={true}
                  />
                ) : (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: theme === 'dark' ? '#aaa' : '#666',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    padding: '20px',
                    border: `1px dashed ${theme === 'dark' ? '#444' : '#ccc'}`,
                    borderRadius: '4px',
                    backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f9f9f9',
                    transition: 'background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease'
                  }}>
                    <div>
                      <p>JavaScript Console</p>
                      <p style={{ fontSize: '0.9rem' }}>Run your code to see output here</p>
                    </div>
                  </div>
                )}
              </PreviewPane>
            ) : (
              /* Regular mode with HTML preview */
              <PreviewPane>
                <IframeContainer hasConsole={enabledTabs.js && consoleMessages.length > 0}>
                  {isLoading && <LoadingMessage theme={theme}>Loading preview...</LoadingMessage>}
                  <iframe
                    id="preview-iframe"
                    ref={iframeRef}
                    title="Preview"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    sandbox="allow-scripts allow-same-origin allow-modals"
                  />
                </IframeContainer>
                
                {enabledTabs.js && consoleMessages.length > 0 && (
                  <ConsoleOutput 
                    messages={consoleMessages} 
                    onClear={clearConsole}
                    fullHeight={false}
                  />
                )}
              </PreviewPane>
            )}
            
          </EditorBody>
        )}
        
        {!isMinimized && (
          <ButtonsContainer>
            <Button onClick={handleRun}>Run</Button>
            <Button onClick={onClose}>Close</Button>
          </ButtonsContainer>
        )}
      </EditorContent>
    </EditorContainer>
  );
};

export default CodeEditor;