import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCompletion } from '../context/CompletionContext';

const Card = styled.div`
  border: 1px solid var(--medium-gray);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--box-shadow);
  }
`;

const TopicHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StatusIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: white;
  border-radius: 50%;
  margin-right: 10px;
  padding-top: 2px;
  background-color: ${props => props.completed ? 'var(--success-color)' : 'var(--medium-gray)'};
`;

const TopicTitle = styled.h3`
  margin-bottom: 0;
  flex-grow: 1;
`;

const CompletedTag = styled.span`
  background-color: var(--success-color);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin-left: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const CompleteButton = styled.button`
  display: inline-block;
  background-color: ${props => props.completed ? 'var(--success-color)' : 'var(--primary-color)'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.completed ? '#27ae60' : '#2980b9'};
  }
`;

const TopicCard = ({ title, description, link, completed: propCompleted = false }) => {
  const { isTopicCompleted, markAsCompleted, markAsNotCompleted, loading } = useCompletion();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Check if the topic is completed from the context
  const isCompleted = isTopicCompleted(link) || propCompleted;
  
  const handleCompleteClick = async () => {
    setIsUpdating(true);
    if (isCompleted) {
      await markAsNotCompleted(link);
    } else {
      await markAsCompleted(link);
    }
    setIsUpdating(false);
  };
  
  return (
    <Card>
      <TopicHeader>
        <StatusIcon completed={isCompleted}>{isCompleted ? '✓' : ''}</StatusIcon>
        <TopicTitle>{title}</TopicTitle>
        {isCompleted && <CompletedTag>Completed</CompletedTag>}
      </TopicHeader>
      <Description>{description}</Description>
      <ButtonContainer>
        <ViewButton to={link}>View Topic</ViewButton>
        <CompleteButton 
          completed={isCompleted} 
          onClick={handleCompleteClick}
          disabled={isUpdating || loading}
        >
          {isUpdating 
            ? 'Updating...' 
            : isCompleted 
              ? 'Mark as Incomplete' 
              : 'Mark as Done'
          }
        </CompleteButton>
      </ButtonContainer>
    </Card>
  );
};

export default TopicCard;