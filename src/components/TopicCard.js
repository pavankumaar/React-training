import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCompletion } from '../context/CompletionContext';
import { useAuth } from '../context/AuthContext';
import { getRandomWebDevImage } from '../utils/imageUtils';
import { FaArrowRight } from 'react-icons/fa';

const Card = styled.div`
  border-radius: 20px;
  padding: 0;
  margin-bottom: 1.5rem;
  background-color: var(--card-background);
  box-shadow: var(--box-shadow);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease, 
              background-color var(--transition-speed) ease;
  display: flex;
  align-items: stretch; /* Ensure children stretch to full height */
  
  @media (max-width: 480px) {
    border-radius: 15px;
    margin-bottom: 1rem;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TopicImage = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--image-background);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 12px;
  margin: 8px;
  align-self: stretch; /* Make it full height of the parent */
  aspect-ratio: 1 / 1; /* Make it square */
  transition: background-color var(--transition-speed) ease;
  
  /* Responsive adjustments */
  @media (max-width: 480px) {
    padding: 8px;
    margin: 10px 5px;
    border-radius: 8px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform var(--transition-speed) ease;
  }
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ViewButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color var(--transition-speed) ease, 
              transform var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease;
  
  &:hover {
    background-color: #2980b9;
    color: white;
    transform: translateX(3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateX(1px);
  }
`;

const CompleteButton = styled.button`
  display: inline-block;
  background-color: ${props => props.completed ? 'var(--success-color)' : 'var(--primary-color)'};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease,
              transform var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.completed ? '#27ae60' : '#2980b9'};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
  
  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;

const TopicCard = ({ title, description, link, completed: propCompleted = false }) => {
  const { isTopicCompleted, markAsCompleted, markAsNotCompleted, loading } = useCompletion();
  const { isAdmin } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  const [imageSize, setImageSize] = useState(0);
  const cardRef = React.useRef(null);
  const imageContainerRef = React.useRef(null);
  
  // Check if the topic is completed from the context
  const isCompleted = isTopicCompleted(link) || propCompleted;
  
  // Update image size based on card height
  React.useEffect(() => {
    const updateSize = () => {
      if (cardRef.current && imageContainerRef.current) {
        const cardHeight = cardRef.current.clientHeight;
        // Subtract margins and padding
        let size = cardHeight - 20;
        
        // Make image smaller on mobile devices
        const windowWidth = window.innerWidth;
        if (windowWidth <= 480) {
          // For very small screens, make it even smaller
          size = Math.min(size, 80);
        } else if (windowWidth <= 768) {
          // For medium screens
          size = Math.min(size, 100);
        }
        
        setImageSize(size);
      }
    };
    
    // Initial update
    updateSize();
    
    // Update on resize
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  const handleCompleteClick = async () => {
    setIsUpdating(true);
    if (isCompleted) {
      await markAsNotCompleted(link);
    } else {
      await markAsCompleted(link);
    }
    setIsUpdating(false);
  };
  
  // Get a random image based on the topic path
  const imageSrc = getRandomWebDevImage(link);

  return (
    <Card ref={cardRef}>
      <TopicImage 
        ref={imageContainerRef} 
        style={{ width: imageSize > 0 ? imageSize : 'auto' }}
      >
        <img src={imageSrc} alt={`${title} icon`} />
      </TopicImage>
      <CardContent>
        <TopicHeader>
          {isAdmin() && (
            <StatusIcon completed={isCompleted}>{isCompleted ? '✓' : ''}</StatusIcon>
          )}
          <TopicTitle>{title}</TopicTitle>
          {/* {isAdmin() && isCompleted && <CompletedTag>Completed</CompletedTag>} */}
        </TopicHeader>
        <Description>{description}</Description>
        <ButtonContainer>
          {isAdmin() && (
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
          )}
          <ViewButton to={link} aria-label="View Topic" style={{ marginLeft: isAdmin() ? '0' : 'auto' }}>
            <FaArrowRight />
          </ViewButton>
        </ButtonContainer>
      </CardContent>
    </Card>
  );
};

export default TopicCard;