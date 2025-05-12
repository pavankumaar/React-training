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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AdminButton = styled(Button)`
  background-color: var(--primary-color);
  color: white;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const GuestButton = styled(Button)`
  background-color: var(--light-gray);
  color: var(--dark-gray);
  
  &:hover {
    background-color: #e0e0e0;
  }
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
`;

const ErrorMessage = styled.p`
  color: var(--danger-color);
  margin-top: 15px;
  font-size: 14px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;
  
  &:hover {
    color: var(--primary-dark);
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [showPasscode, setShowPasscode] = useState(false);
  const [passcode, setPasscode] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  
  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
  
  // Handle admin button click
  const handleAdminClick = () => {
    setShowPasscode(true);
    setError('');
  };
  
  // Handle guest button click
  const handleGuestClick = () => {
    login(false); // Login as guest
    navigate('/');
  };
  
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
      login(true); // Login as admin
      navigate('/');
    } else {
      setError('Invalid passcode. Please try again.');
      setPasscode(['', '', '', '']);
      // Focus first input
      document.getElementById('passcode-0').focus();
    }
  };
  
  // Go back to login options
  const handleBack = () => {
    setShowPasscode(false);
    setPasscode(['', '', '', '']);
    setError('');
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <Title>React Training</Title>
        
        {!showPasscode ? (
          <ButtonContainer>
            <AdminButton onClick={handleAdminClick}>Login as Admin</AdminButton>
            <GuestButton onClick={handleGuestClick}>Continue as Guest</GuestButton>
          </ButtonContainer>
        ) : (
          <PasscodeContainer>
            <h3>Enter Admin Passcode</h3>
            <div>
              {passcode.map((digit, index) => (
                <PasscodeInput
                  key={index}
                  id={`passcode-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePasscodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <BackButton onClick={handleBack}>Back to Login Options</BackButton>
          </PasscodeContainer>
        )}
      </LoginCard>
    </LoginContainer>
  );
};

export default LoginPage;