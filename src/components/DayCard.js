import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--card-background);
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease, 
              background-color var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, var(--primary-darker) 0%, var(--primary-color) 100%);
  color: white;
  padding: 1.25rem 1.25rem 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.1);
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const Description = styled.div`
  margin-bottom: 1.5rem;
`;

const TopicsList = styled.ul`
  list-style-type: none;
  margin-bottom: 1.5rem;
  padding-left: 0;
`;

const ViewButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const CompletionBadge = styled.div`
  background-color: ${props => props.completed === props.total ? 'var(--success-color)' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  ${props => props.completed === props.total && `
    animation: pulse 1.5s infinite;
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
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
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  flex-grow: 1;
  margin-right: 1rem;
  overflow: hidden;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 1px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1px;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => (props.completed / props.total) * 100}%;
  background: ${props => 
    props.completed === props.total 
      ? 'linear-gradient(to right, #2ecc71, #27ae60)' 
      : props.completed > 0 
        ? 'linear-gradient(to right, #f7f7f7, #ffffff)' 
        : 'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 20px;
  transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => 
      props.completed === props.total 
        ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))' 
        : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1))'
    };
    border-radius: 20px;
  }
`;

const ProgressText = styled.div`
  font-size: 0.85rem;
  color: white;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const DayCard = ({ day, title, description, topics, link, completedTopics = [], stats = null }) => {
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
          <CompletionBadge completed={safeStats.completed || completedCount} total={safeStats.total || totalTopics}>
            {safeStats.completed || completedCount}/{safeStats.total || totalTopics}
          </CompletionBadge>
        </HeaderTop>
        
        {/* Enhanced progress bar in header */}
        <ProgressContainer>
          <ProgressBar>
            <ProgressFill 
              completed={safeStats.completed || completedCount} 
              total={safeStats.total || totalTopics} 
            />
          </ProgressBar>
          <ProgressText>
            {(safeStats.completed || completedCount) === (safeStats.total || totalTopics) ? 
              '✓ Complete!' : 
              `${Math.round((safeStats.completed || completedCount) / (safeStats.total || totalTopics) * 100)}%`
            }
          </ProgressText>
        </ProgressContainer>
      </CardHeader>
      <CardContent>
        <Description>{description}</Description>
        
        <TopicsList>
          {topics.map((topic, index) => {
            // Safely check if the topic is completed
            let isCompleted = false;
            
            try {
              // Use the actual data from props
              isCompleted = 
                (safeStats.topics && Array.isArray(safeStats.topics) && safeStats.topics.includes(topic)) || 
                (Array.isArray(completedTopics) && completedTopics.includes(topic));
            } catch (error) {
              console.error(`Error checking completion for topic ${topic}:`, error);
              // Only use fallback as a last resort
              isCompleted = false;
            }
            
            // Check if topic is completed
              
            return (
              <li key={index} style={{
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                paddingLeft: '0px'
              }}>
                {isCompleted ? (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--success-color)',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                    ✓
                  </div>
                ): (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'lightgray',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginRight: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                    
                  </div>
                )}
                
                <span style={{
                  fontWeight: isCompleted ? '500' : 'normal',
                  flex: '1'
                }}>
                  {topic}
                </span>
              </li>
            );
          })}
        </TopicsList>
        <ViewButton to={link}>View Day {day}</ViewButton>
      </CardContent>
    </Card>
  );
};

export default DayCard;