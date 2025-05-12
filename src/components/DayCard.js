import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid var(--medium-gray);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
  }
`;

const CardHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
  }
`;

const CompletionBadge = styled.div`
  background-color: ${props => props.completed === props.total ? 'var(--success-color)' : 'var(--medium-gray)'};
  color: white;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: var(--light-gray);
  border-radius: 4px;
  flex-grow: 1;
  margin-right: 1rem;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => (props.completed / props.total) * 100}%;
  background-color: ${props => 
    props.completed === props.total 
      ? 'var(--success-color)' 
      : props.completed > 0 
        ? 'var(--primary-color)' 
        : 'var(--medium-gray)'
  };
  transition: width 0.3s ease, background-color 0.3s ease;
`;

const ProgressText = styled.div`
  font-size: 0.9rem;
  color: var(--dark-gray);
  white-space: nowrap;
`;

const DayCard = ({ day, title, description, topics, link, completedTopics = [], stats = null }) => {
  // Calculate completion stats
  const totalTopics = topics.length;
  const completedCount = completedTopics.length;
  const isFullyCompleted = completedCount === totalTopics && totalTopics > 0;
  
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
        <span>Day {day}: {title}</span>
        <CompletionBadge completed={safeStats.completed || completedCount} total={safeStats.total || totalTopics}>
          {safeStats.completed || completedCount}/{safeStats.total || totalTopics}
        </CompletionBadge>
      </CardHeader>
      <CardContent>
        <Description>{description}</Description>
        
        {/* Progress bar */}
        <ProgressContainer>
          <ProgressBar>
            <ProgressFill completed={safeStats.completed || completedCount} total={safeStats.total || totalTopics} />
          </ProgressBar>
          <ProgressText>
            {(safeStats.completed || completedCount) === (safeStats.total || totalTopics) ? 
              'Completed!' : 
              `${safeStats.completed || completedCount}/${safeStats.total || totalTopics} completed`
            }
          </ProgressText>
        </ProgressContainer>
        
        <TopicsList>
          {topics.map((topic, index) => {
            const isCompleted = 
              (safeStats.topics && safeStats.topics.includes(topic)) || 
              completedTopics.includes(topic);
              
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