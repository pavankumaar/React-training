import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';

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
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 400px;
  text-align: center;
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
  border: 2px solid var(--medium-gray);
  border-radius: 4px;
  
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
`;

const ErrorMessage = styled.p`
  color: var(--danger-color);
  margin-top: 15px;
  font-size: 14px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
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
  
  return (
    <LoginContainer>
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