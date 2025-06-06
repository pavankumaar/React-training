import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import searchIndex from '../utils/searchIndex';
import { FaSearch, FaTimes } from 'react-icons/fa';

// Styled components for the expandable search
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  border-radius: 20px;
  height: 40px;
  margin: ${props => window.innerWidth >= 992 && props.sidebarOpen ? '0 auto' : '0 0.75rem 0 0'};
  overflow: visible;
  transition: all 0.3s ease;
  width: ${props => props.isExpanded ? '400px' : '40px'};
  position: relative;
  flex-grow: 0;
  
  &:hover {
    background-color: ${props => props.theme === 'dark' ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  }
  
  @media (max-width: 992px) {
    width: ${props => props.isExpanded ? '300px' : '40px'};
  }
  
  @media (max-width: 768px) {
    height: 36px;
    margin: ${props => props.isExpanded ? '0 auto' : '0 0.5rem'};
    width: ${props => props.isExpanded ? '250px' : '36px'};
  }
  
  @media (max-width: 576px) {
    width: ${props => props.isExpanded ? '100%' : '36px'};
    position: ${props => props.isExpanded ? 'fixed' : 'relative'};
    left: ${props => props.isExpanded ? '0' : 'auto'};
    right: ${props => props.isExpanded ? '0' : 'auto'};
    top: ${props => props.isExpanded ? '0' : 'auto'};
    height: ${props => props.isExpanded ? '60px' : '36px'};
    border-radius: ${props => props.isExpanded ? '0' : '20px'};
    margin: ${props => props.isExpanded ? '0' : '0 0.5rem 0 0'};
    padding: ${props => props.isExpanded ? '0 10px' : '0'};
    z-index: 1010;
    background: ${props => props.isExpanded 
      ? (props.theme === 'dark' ? 'black' : 'white')
      : (props.theme === 'dark' ? 'black' : 'white')};
    box-shadow: ${props => props.isExpanded ? '0 4px 15px rgba(0, 0, 0, 0.15)' : 'none'};
  }
`;

const SearchButton = styled.button`
  background: transparent;
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  border: none;
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    
    svg {
      width: 16px;
      height: 16px;
    }
  }
  
  @media (max-width: 576px) {
    ${props => props.isBack && `
      margin-right: 10px;
    `}
  }
`;

const SearchInputWrapper = styled.div`
  flex-grow: 1;
  opacity: ${props => props.isVisible ? 1 : 0};
  width: ${props => props.isVisible ? '100%' : '0'};
  transition: all 0.3s ease;
  overflow: hidden;
  
  @media (max-width: 576px) {
    flex-grow: ${props => props.isVisible ? '1' : '0'};
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${props => props.theme === 'dark' ? 'white' : 'black'};
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 10px;
  font-size: 14px;
  
  &::placeholder {
    color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'};
  }
  
  @media (max-width: 576px) {
    font-size: 16px; /* Larger font size for better mobile usability */
    padding: 0 5px;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: var(--background);
  color: var(--text);
  border-radius: 4px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 398px;
  
  @media (max-width: 768px) {
    top: 40px;
    max-height: 350px;
    width: 200px;
  }
  
  @media (max-width: 576px) {
    position: fixed;
    top: 60px;
    max-height: calc(100vh - 60px);
    width: 100%;
    right: 0;
    left: 0;
    border-radius: 0;
    margin-top: 0;
    border-left: none;
    border-right: none;
    z-index: 1009;
  }
`;

const ResultItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: var(--text);
  text-decoration: none;
  border-bottom: 1px solid var(--border-color);
  
  &:hover {
    background-color: var(--hover-bg);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 576px) {
    padding: 8px 12px;
  }
`;

const ResultTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: var(--heading-text);
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const ResultContent = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  
  @media (max-width: 576px) {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const DayTag = styled.span`
  display: inline-block;
  background-color: var(--tag-bg, #e0f0ff);
  color: var(--primary-color, #0066cc);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 8px;
  
  @media (max-width: 576px) {
    font-size: 10px;
    padding: 1px 4px;
    margin-right: 4px;
  }
`;

const ViewAllResults = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: var(--hover-bg, #f5f5f5);
  color: var(--primary-color, #0066cc);
  text-decoration: none;
  font-weight: 500;
  border-top: 1px solid var(--border-color, #eee);
  
  &:hover {
    background-color: var(--active-bg, #e5e5e5);
  }
  
  @media (max-width: 576px) {
    padding: 8px;
    font-size: 13px;
  }
`;

// Styled mark element for highlighted text
const HighlightMark = styled.mark`
  background-color: var(--highlight-bg, #fff3cd);
  color: var(--highlight-text, #856404);
  padding: 0 2px;
  border-radius: 2px;
  font-weight: bold;
`;

const HighlightedText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? <HighlightMark key={i}>{part}</HighlightMark> : <span key={i}>{part}</span>
      )}
    </span>
  );
};

const ExpandableSearch = ({ sidebarOpen, theme = 'light' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isExpanded, setIsExpanded] = useState(window.innerWidth >= 768); // Default expanded on larger screens
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  const isLargeScreen = window.innerWidth >= 992;
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  // Update states when window is resized
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const newIsLargeScreen = windowWidth >= 992;
      setIsMobile(windowWidth <= 576);
      
      // Keep expanded on larger screens, collapse on smaller screens
      if (windowWidth >= 768) {
        setIsExpanded(true);
      } else if (!newIsLargeScreen) {
        // Only collapse on smaller screens
        setIsExpanded(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle clicks outside the search component to close results and collapse search box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        // Always close results when clicking outside
        setShowResults(false);
        
        // Only collapse the search box on smaller screens
        if (window.innerWidth < 768) {
          setIsExpanded(false);
          // Clear search term when collapsing
          setSearchTerm('');
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, searchTerm]);
  
  // Search function
  const performSearch = (term) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }
    
    const searchTermLower = term.toLowerCase();
    
    // Search through the index
    const searchResults = searchIndex.filter(item => {
      // Check title
      if (item.title.toLowerCase().includes(searchTermLower)) {
        return true;
      }
      
      // Check content
      if (item.content.toLowerCase().includes(searchTermLower)) {
        return true;
      }
      
      // Check keywords
      if (item.keywords.some(keyword => keyword.toLowerCase().includes(searchTermLower))) {
        return true;
      }
      
      return false;
    });
    
    setResults(searchResults);
  };
  
  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    performSearch(value);
    setShowResults(true);
  };
  
  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      // Navigate to search page with query
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
      // Collapse the search box
      setIsExpanded(false);
      setSearchTerm('');
    }
  };
  
  // Handle selecting a result
  const handleResultSelect = () => {
    setShowResults(false);
    // Collapse the search box
    setIsExpanded(false);
    setSearchTerm('');
  };
  
  // Toggle search expansion
  const toggleSearch = () => {
    // If already expanded and we're clicking the close button, collapse it
    if (isExpanded) {
      setIsExpanded(false);
      setSearchTerm('');
      setShowResults(false);
    } else {
      // If not expanded, expand it
      setIsExpanded(true);
      
      // Focus the input when expanded
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  };
  
  // isMobile state is now managed with useEffect
  
  return (
    <>
      {isExpanded && isMobile && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          }}
          onClick={toggleSearch}
        />
      )}
      <SearchContainer ref={searchRef} isExpanded={isExpanded} sidebarOpen={sidebarOpen} theme={theme}>
        {isExpanded && isMobile ? (
          <SearchButton 
            onClick={toggleSearch} 
            aria-label="Back" 
            title="Back"
            isBack={true}
            theme={theme}
          >
            <FaTimes />
          </SearchButton>
        ) : (
          <SearchButton 
            onClick={toggleSearch} 
            aria-label="Search" 
            title="Search"
            theme={theme}
          >
            <FaSearch />
          </SearchButton>
        )}
      
      <SearchInputWrapper isVisible={isExpanded}>
        <form onSubmit={handleSubmit}>
          <SearchInput
            theme={theme}
            ref={inputRef}
            type="text"
            placeholder="Search topics, keywords..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setShowResults(true)}
          />
        </form>
      </SearchInputWrapper>
      
      {isExpanded && showResults && searchTerm && (
        <SearchResults>
          {results.length > 0 ? (
            <>
              {/* Show max 5 results in dropdown */}
              {results.slice(0, 5).map(result => (
                <ResultItem 
                  key={result.id} 
                  to={result.path}
                  onClick={handleResultSelect}
                >
                  <ResultTitle>
                    <DayTag>Day {result.day.replace('day', '')}</DayTag>
                    <HighlightedText text={result.title} highlight={searchTerm} />
                  </ResultTitle>
                  <ResultContent>
                    <HighlightedText text={result.content} highlight={searchTerm} />
                  </ResultContent>
                </ResultItem>
              ))}
              
              {/* View all results link */}
              {results.length > 5 && (
                <ViewAllResults to={`/search?q=${encodeURIComponent(searchTerm)}`}>
                  View all {results.length} results
                </ViewAllResults>
              )}
            </>
          ) : (
            <ResultItem as="div" style={{ color: '#666' }}>
              <ResultTitle>No results found</ResultTitle>
              <ResultContent>Try different keywords or check spelling</ResultContent>
            </ResultItem>
          )}
        </SearchResults>
      )}
    </SearchContainer>
    </>
  );
};

export default ExpandableSearch;