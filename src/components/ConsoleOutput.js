import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ConsoleContainer = styled.div`
  background-color: ${props => props.theme === 'dark' ? '#1e1e1e' : '#f5f5f5'};
  color: ${props => props.theme === 'dark' ? '#f8f8f8' : '#333'};
  font-family: 'Consolas', 'Monaco', monospace;
  padding: 10px;
  border-radius: 4px;
  margin-top: ${props => props.fullHeight ? '0' : '10px'};
  overflow: hidden;
  flex: 1;
  min-height: ${props => props.fullHeight ? '100%' : '150px'};
  max-height: ${props => props.fullHeight ? '100%' : '40%'};
  height: ${props => props.fullHeight ? '100%' : 'auto'};
  white-space: pre-wrap;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme === 'dark' ? '#333' : '#ddd'};
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
`;

const ConsoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? '#444' : '#ddd'};
  font-weight: bold;
  flex: 0 0 auto;
  font-size: ${props => props.fullHeight ? '1rem' : '0.9rem'};
  height: 24px;
  transition: border-color 0.3s ease;
`;

const ConsoleMessage = styled.div`
  margin: 3px 0;
  display: flex;
  align-items: flex-start;
  font-size: ${props => props.fullHeight ? '0.95rem' : '0.9rem'};
  line-height: 1.4;
  
  &.log {
    color: ${props => props.theme === 'dark' ? '#f8f8f8' : '#333'};
  }
  
  &.error {
    color: ${props => props.theme === 'dark' ? '#ff6b6b' : '#d32f2f'};
  }
  
  &.warn {
    color: ${props => props.theme === 'dark' ? '#ffd166' : '#f57c00'};
  }
  
  &.info {
    color: ${props => props.theme === 'dark' ? '#4ecdc4' : '#0288d1'};
  }
`;

const MessageIcon = styled.span`
  margin-right: 6px;
  font-weight: bold;
`;

const MessageContent = styled.div`
  flex: 1;
`;

const MessagesContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  padding-right: 5px;
  
  /* Custom scrollbar for better appearance */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme === 'dark' ? '#2a2a2a' : '#e5e5e5'};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme === 'dark' ? '#555' : '#bbb'};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme === 'dark' ? '#777' : '#999'};
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#aaa' : '#777'};
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0 5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme === 'dark' ? '#fff' : '#333'};
  }
`;

const ConsoleOutput = ({ messages = [], onClear, fullHeight = false }) => {
  const { theme } = useTheme();
  
  if (messages.length === 0) {
    return null;
  }
  
  // Limit the number of messages to display (to prevent performance issues)
  const displayMessages = messages.slice(-100);
  
  return (
    <ConsoleContainer fullHeight={fullHeight} theme={theme}>
      <ConsoleHeader fullHeight={fullHeight} theme={theme}>
        <span>{fullHeight ? 'Console Output' : 'Console'}</span>
        <div>
          {messages.length > 100 && (
            <span style={{ 
              fontSize: '0.8rem', 
              color: theme === 'dark' ? '#aaa' : '#777', 
              marginRight: '10px' 
            }}>
              Showing last 100 of {messages.length}
            </span>
          )}
          <ClearButton onClick={onClear} title="Clear console" theme={theme}>
            🗑️ Clear
          </ClearButton>
        </div>
      </ConsoleHeader>
      
      <MessagesContainer theme={theme}>
        {displayMessages.map((message, index) => (
          <ConsoleMessage 
            key={index} 
            className={message.type || 'log'}
            fullHeight={fullHeight}
            theme={theme}
          >
            <MessageIcon>
              {message.type === 'error' ? '❌' : 
               message.type === 'warn' ? '⚠️' : 
               message.type === 'info' ? 'ℹ️' : '▶️'}
            </MessageIcon>
            <MessageContent>
              {message.content}
            </MessageContent>
          </ConsoleMessage>
        ))}
      </MessagesContainer>
    </ConsoleContainer>
  );
};

export default ConsoleOutput;