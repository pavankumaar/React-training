import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--background-color);
  padding: 20px;
`;

const LoginCard = styled.div`
  background-color: var(--card-background);
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  padding: 30px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  transition: background-color var(--transition-speed) ease, 
              color var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease;
`;

const Title = styled.h1`
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const PasscodeContainer = styled.div`
  margin-top: 20px;
`;

const PasscodeInput = styled.input`
  width: 40px;
  height: 50px;
  margin: 0 8px;
  font-size: 24px;
  text-align: center;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--card-background);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    outline: none;
  }
  
  /* Remove increment/decrement buttons for number inputs */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 45px;
    font-size: 20px;
    margin: 0 6px;
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 40px;
    font-size: 18px;
    margin: 0 5px;
  }
  
  @media (max-width: 375px) {
    width: 28px;
    height: 35px;
    font-size: 16px;
    margin: 0 4px;
  }
  
  transition: background-color var(--transition-speed) ease, 
              color var(--transition-speed) ease,
              border-color var(--transition-speed) ease;
`;

const ErrorMessage = styled.p`
  color: var(--danger-color);
  margin-top: 15px;
  font-size: 14px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  
  // Handle passcode input change
  const handlePasscodeChange = (index, value) => {
    if (value.length > 1) {
      // If pasting multiple digits, only take the first one
      value = value.charAt(0);
    }
    
    if (isNaN(value) && value !== '') {
      // Only allow numbers
      return;
    }
    
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
    
    // Auto-focus next input
    if (value !== '' && index < 3) {
      document.getElementById(`passcode-${index + 1}`).focus();
    }
    
    // Check if all digits are entered
    if (newPasscode.every(digit => digit !== '') && index === 3) {
      validatePasscode(newPasscode.join(''));
    }
  };
  
  // Handle key down for backspace
  const handleKeyDown = (index, e) => {
    // If backspace is pressed and current field is empty, focus previous field
    if (e.key === 'Backspace' && passcode[index] === '' && index > 0) {
      document.getElementById(`passcode-${index - 1}`).focus();
    }
  };
  
  // Validate passcode
  const validatePasscode = (code) => {
    if (code === '3194') {
      login(); // Login as admin
      navigate('/');
    } else {
      setError('Invalid passcode. Please try again.');
      setPasscode(['', '', '', '']);
      // Focus first input
      document.getElementById('passcode-0').focus();
    }
  };
  
  const ThemeToggleButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    color: var(--text-color);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    transition: background-color var(--transition-speed) ease;
    
    &:hover {
      background-color: rgba(128, 128, 128, 0.2);
    }
    
    svg {
      width: 24px;
      height: 24px;
    }
  `;

  return (
    <LoginContainer>
      <ThemeToggleButton onClick={() => toggleTheme()} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
          </svg>
        )}
      </ThemeToggleButton>
      <LoginCard>
        <Title>React Training</Title>
        <PasscodeContainer>
          <h3>Enter Passcode</h3>
          <div>
            {passcode.map((digit, index) => (
              <PasscodeInput
                key={index}
                id={`passcode-${index}`}
                type="number"
                min="0"
                max="9"
                value={digit}
                onChange={(e) => handlePasscodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                autoFocus={index === 0}
              />
            ))}
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </PasscodeContainer>
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;