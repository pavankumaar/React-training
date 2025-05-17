import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import searchIndex from '../utils/searchIndex';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResultItem = styled(Link)`
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const ResultContent = styled.div`
  font-size: 14px;
  color: #666;
`;

const DayTag = styled.span`
  display: inline-block;
  background-color: #e0f0ff;
  color: #0066cc;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 8px;
`;

const RecentSearches = styled.div`
  margin-top: 10px;
  
  h4 {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
`;

const RecentSearchTag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const ViewAllResults = styled(Link)`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: #f5f5f5;
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  border-top: 1px solid #eee;
  
  &:hover {
    background-color: #e5e5e5;
  }
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
        regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
      )}
    </span>
  );
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);
  
  // Save recent searches to localStorage when they change
  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);
  
  // Handle clicks outside the search component to close results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
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
      // Add to recent searches (avoid duplicates and limit to 5)
      setRecentSearches(prev => {
        const newSearches = prev.filter(s => s !== searchTerm);
        return [searchTerm, ...newSearches].slice(0, 5);
      });
      
      // Navigate to search page with query
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setShowResults(false);
    }
  };
  
  // Handle clicking on a recent search
  const handleRecentSearchClick = (term) => {
    setSearchTerm(term);
    performSearch(term);
    setShowResults(true);
  };
  
  // Handle selecting a result
  const handleResultSelect = () => {
    // Add to recent searches when a result is selected
    if (searchTerm.trim()) {
      setRecentSearches(prev => {
        const newSearches = prev.filter(s => s !== searchTerm);
        return [searchTerm, ...newSearches].slice(0, 5);
      });
    }
    
    setShowResults(false);
  };
  
  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };
  
  return (
    <SearchContainer ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search topics, keywords, or content..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowResults(true)}
        />
      </form>
      
      {showResults && searchTerm && (
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
            <ResultItem as="div">
              <ResultTitle>No results found</ResultTitle>
              <ResultContent>Try different keywords or check spelling</ResultContent>
            </ResultItem>
          )}
        </SearchResults>
      )}
      
      {recentSearches.length > 0 && (
        <RecentSearches>
          <h4>Recent Searches:</h4>
          <div>
            {recentSearches.map((term, index) => (
              <RecentSearchTag 
                key={index} 
                onClick={() => handleRecentSearchClick(term)}
              >
                {term}
              </RecentSearchTag>
            ))}
            <RecentSearchTag 
              onClick={clearRecentSearches}
              style={{ backgroundColor: '#ffeeee', color: '#cc0000' }}
            >
              Clear
            </RecentSearchTag>
          </div>
        </RecentSearches>
      )}
    </SearchContainer>
  );
};

export default Search;