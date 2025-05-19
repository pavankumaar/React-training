import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const Card = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--card-background);
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease, 
              background-color var(--transition-speed) ease;
  position: relative; /* Add this to establish positioning context */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
`;

const CardHeader = styled.div`
  background-color: var(--card-background);
  color: var(--text-color);
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CardContent = styled.div`
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 4rem; /* Add extra padding at the bottom to make room for the button */
`;

const Description = styled.div`
  margin-bottom: 1rem;
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
`;

const TopicTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: ${props => props.completed ? 'rgba(46, 204, 113, 0.15)' : 'rgba(52, 152, 219, 0.15)'};
  color: ${props => props.completed ? 'var(--success-color)' : 'var(--primary-color, #3498db)'};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  cursor: default;
  user-select: none;
`;
const ViewButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 152, 219, 0.15);
  color: var(--primary-color);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 2; /* Ensure button is above other content */
  transition: background-color var(--transition-speed) ease, 
              transform var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease;
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.25);
    color: var(--primary-color);
    transform: translateX(3px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateX(1px);
  }
`;

const CompletionBadge = styled.div`
  background-color: ${props => props.completed === props.total ? 'rgba(46, 204, 113, 0.15)' : 'rgba(52, 152, 219, 0.15)'};
  color: ${props => props.completed === props.total ? 'var(--success-color)' : 'var(--primary-color)'};
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  ${props => props.completed === props.total && `
    animation: pulse 1.5s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.2);
      }
      70% {
        box-shadow: 0 0 0 6px rgba(46, 204, 113, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
      }
    }
  `}
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

const ProgressBar = styled.div`
  height: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  flex-grow: 1;
  margin-right: 1rem;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 1px;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => (props.completed / props.total) * 100}%;
  background: ${props =>
    props.completed === props.total
      ? 'linear-gradient(to right, #2ecc71, #27ae60)'
      : 'var(--primary-color)'
  };
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    border-radius: 20px;
  }
`;

const ProgressText = styled.div`
  font-size: 0.85rem;
  color: var(--primary-color);
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const DayCard = ({ day, title, description, topics, link, completedTopics = [], stats = null }) => {
  const { isAdmin } = useAuth();

  // Calculate completion stats
  const totalTopics = topics.length;

  // Ensure completedTopics is an array
  const safeCompletedTopics = Array.isArray(completedTopics) ? completedTopics : [];

  const completedCount = safeCompletedTopics.length;

  // Ensure stats and completedTopics are valid

  // Ensure stats has valid values even if it's null or incomplete
  const safeStats = stats && typeof stats === 'object' ? {
    completed: typeof stats.completed === 'number' ? stats.completed : 0,
    total: typeof stats.total === 'number' ? stats.total : totalTopics,
    topics: Array.isArray(stats.topics) ? stats.topics : []
  } : {
    completed: 0,
    total: totalTopics,
    topics: []
  };

  return (
    <Card>
      <CardHeader>
        <HeaderTop>
          <span>Day {day}: {title}</span>
        </HeaderTop>

        {/* Enhanced progress bar in header - only for admin users */}
        {isAdmin() && (
          <ProgressContainer>
            <ProgressBar>
              <ProgressFill
                completed={safeStats.completed || completedCount}
                total={safeStats.total || totalTopics}
              />
            </ProgressBar>
            {isAdmin() && (
              <CompletionBadge completed={safeStats.completed || completedCount} total={safeStats.total || totalTopics}>
                {safeStats.completed || completedCount}/{safeStats.total || totalTopics}
              </CompletionBadge>
            )}
          </ProgressContainer>
        )}
      </CardHeader>
      <CardContent>
        <Description>{description}</Description>

        <TopicsContainer>
          {topics.map((topic, index) => {
            // Safely check if the topic is completed
            let isCompleted = false;

            // Only check completion status for admin users
            if (isAdmin()) {
              try {
                // Use the actual data from props
                isCompleted =
                  (safeStats.topics && Array.isArray(safeStats.topics) && safeStats.topics.includes(topic)) ||
                  (Array.isArray(completedTopics) && completedTopics.includes(topic));
              } catch (error) {
                console.error(`Error checking completion for topic ${topic}:`, error);
                isCompleted = false;
              }
            } else {
              // For normal users, always show as incomplete to avoid API calls
              isCompleted = false;
            }

            return (
              <TopicTag
                key={index}
                completed={isCompleted}
              >
                {isCompleted && (
                  <FaCheck style={{ marginRight: '6px', fontSize: '0.75rem' }} />
                )}
                {topic}
              </TopicTag>
            );
          })}
        </TopicsContainer>
        <ViewButton to={link} aria-label="View Topic">
          <FaArrowRight />
        </ViewButton>
        {/* <ViewButton to={link}>View Day {day}</ViewButton> */}
      </CardContent>
    </Card>
  );
};

export default DayCard;