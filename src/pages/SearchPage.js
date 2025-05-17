import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import searchIndex from '../utils/searchIndex';
import { useTheme } from '../context/ThemeContext';

const SearchPageContainer = styled.div`
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--text-color);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const SearchHeader = styled.h1`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const SearchForm = styled.form`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
  background-color: var(--input-background);
  color: var(--text-color);
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px var(--primary-color-transparent);
  }
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
`;

const FilterTitle = styled.h3`
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    gap: 6px;
    margin-bottom: 15px;
  }
`;

const FilterButton = styled.button`
  background-color: ${props => props.active 
    ? 'var(--primary-color)' 
    : 'var(--button-background)'};
  color: ${props => props.active 
    ? 'var(--button-text-active)' 
    : 'var(--text-color)'};
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active 
      ? 'var(--primary-color-hover)' 
      : 'var(--button-background-hover)'};
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
  
  @media (max-width: 576px) {
    padding: 5px 8px;
    font-size: 12px;
    border-radius: 3px;
  }
`;

const ResultsSection = styled.div`
  margin-top: 2rem;
`;

const ResultsCount = styled.div`
  margin-bottom: 1rem;
  font-size: 16px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 15px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
    font-size: 14px;
  }
`;

const ResultsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    gap: 15px;
  }
`;

const ResultCard = styled(Link)`
  display: block;
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  text-decoration: none;
  color: var(--text-color);
  background-color: var(--card-background);
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px var(--shadow-color);
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 12px;
    border-radius: 15px;
  }
`;

const ResultTitle = styled.h3`
  margin-bottom: 10px;
  color: var(--primary-color);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

const ResultContent = styled.p`
  color: var(--text-secondary);
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const DayTag = styled.span`
  display: inline-block;
  background-color: var(--tag-primary-background);
  color: var(--primary-color);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 3px 6px;
    font-size: 12px;
  }
  
  @media (max-width: 576px) {
    padding: 2px 5px;
    font-size: 11px;
    border-radius: 3px;
  }
`;

const KeywordsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  
  @media (max-width: 768px) {
    gap: 4px;
    margin-top: 8px;
  }
  
  @media (max-width: 576px) {
    gap: 3px;
    margin-top: 6px;
  }
`;

const KeywordTag = styled.span`
  background-color: var(--tag-background);
  color: var(--text-secondary);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  
  @media (max-width: 768px) {
    padding: 2px 5px;
    font-size: 11px;
  }
  
  @media (max-width: 576px) {
    padding: 1px 4px;
    font-size: 10px;
    border-radius: 2px;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
`;

// Styled mark element for highlighted text
const HighlightMark = styled.mark`
  background-color: var(--highlight-background);
  color: var(--highlight-text);
  padding: 0 2px;
  border-radius: 2px;
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

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  const { theme } = useTheme();
  
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [selectedDay, setSelectedDay] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  
  // Perform search when component mounts or search term changes
  useEffect(() => {
    performSearch();
    // Update URL with search query
    const newUrl = searchTerm 
      ? `${location.pathname}?q=${encodeURIComponent(searchTerm)}` 
      : location.pathname;
    window.history.replaceState({}, '', newUrl);
  }, [searchTerm, selectedDay, sortBy]);
  
  const performSearch = () => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    
    const searchTermLower = searchTerm.toLowerCase();
    
    // Filter by search term
    let searchResults = searchIndex.filter(item => {
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
    
    // Filter by day if not 'all'
    if (selectedDay !== 'all') {
      searchResults = searchResults.filter(item => item.day === selectedDay);
    }
    
    // Calculate relevance score for sorting
    searchResults = searchResults.map(item => {
      let score = 0;
      
      // Title match (highest weight)
      if (item.title.toLowerCase().includes(searchTermLower)) {
        score += 10;
      }
      
      // Content match
      if (item.content.toLowerCase().includes(searchTermLower)) {
        score += 5;
      }
      
      // Keyword match
      const keywordMatches = item.keywords.filter(keyword => 
        keyword.toLowerCase().includes(searchTermLower)
      ).length;
      score += keywordMatches * 3;
      
      return { ...item, relevanceScore: score };
    });
    
    // Sort results
    if (sortBy === 'relevance') {
      searchResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
    } else if (sortBy === 'dayAsc') {
      searchResults.sort((a, b) => a.day.localeCompare(b.day) || a.title.localeCompare(b.title));
    } else if (sortBy === 'dayDesc') {
      searchResults.sort((a, b) => b.day.localeCompare(a.day) || a.title.localeCompare(b.title));
    } else if (sortBy === 'title') {
      searchResults.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    setResults(searchResults);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch();
  };
  
  const handleDayFilter = (day) => {
    setSelectedDay(day);
  };
  
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };
  
  // Add search term to recent searches
  useEffect(() => {
    if (searchTerm.trim()) {
      const savedSearches = localStorage.getItem('recentSearches');
      let recentSearches = savedSearches ? JSON.parse(savedSearches) : [];
      
      // Add to recent searches (avoid duplicates and limit to 5)
      recentSearches = recentSearches.filter(s => s !== searchTerm);
      recentSearches = [searchTerm, ...recentSearches].slice(0, 5);
      
      localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    }
  }, [searchTerm]);
  
  return (
    <Layout>
      <SearchPageContainer>
        <SearchHeader>Search Results</SearchHeader>
        
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search topics, keywords, or content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </SearchForm>
        
        {searchTerm && (
          <>
            <FilterSection>
              <FilterTitle>Filter by Day:</FilterTitle>
              <FilterOptions>
                <FilterButton 
                  active={selectedDay === 'all'} 
                  onClick={() => handleDayFilter('all')}
                >
                  All Days
                </FilterButton>
                <FilterButton 
                  active={selectedDay === 'day1'} 
                  onClick={() => handleDayFilter('day1')}
                >
                  Day 1 (HTML)
                </FilterButton>
                <FilterButton 
                  active={selectedDay === 'day2'} 
                  onClick={() => handleDayFilter('day2')}
                >
                  Day 2 (CSS)
                </FilterButton>
                <FilterButton 
                  active={selectedDay === 'day3'} 
                  onClick={() => handleDayFilter('day3')}
                >
                  Day 3 (Advanced CSS)
                </FilterButton>
                <FilterButton 
                  active={selectedDay === 'day4'} 
                  onClick={() => handleDayFilter('day4')}
                >
                  Day 4 (JS Basics)
                </FilterButton>
                <FilterButton 
                  active={selectedDay === 'day5'} 
                  onClick={() => handleDayFilter('day5')}
                >
                  Day 5 (JS Advanced)
                </FilterButton>
              </FilterOptions>
              
              <FilterTitle>Sort by:</FilterTitle>
              <FilterOptions>
                <FilterButton 
                  active={sortBy === 'relevance'} 
                  onClick={() => handleSortChange('relevance')}
                >
                  Relevance
                </FilterButton>
                <FilterButton 
                  active={sortBy === 'title'} 
                  onClick={() => handleSortChange('title')}
                >
                  Title (A-Z)
                </FilterButton>
                <FilterButton 
                  active={sortBy === 'dayAsc'} 
                  onClick={() => handleSortChange('dayAsc')}
                >
                  Day (1-5)
                </FilterButton>
                <FilterButton 
                  active={sortBy === 'dayDesc'} 
                  onClick={() => handleSortChange('dayDesc')}
                >
                  Day (5-1)
                </FilterButton>
              </FilterOptions>
            </FilterSection>
            
            <ResultsSection>
              <ResultsCount>
                {results.length} {results.length === 1 ? 'result' : 'results'} found for "{searchTerm}"
              </ResultsCount>
              
              {results.length > 0 ? (
                <ResultsList>
                  {results.map(result => (
                    <ResultCard key={result.id} to={result.path}>
                      <ResultTitle>
                        <HighlightedText text={result.title} highlight={searchTerm} />
                      </ResultTitle>
                      <ResultContent>
                        <HighlightedText text={result.content} highlight={searchTerm} />
                      </ResultContent>
                      <DayTag>Day {result.day.replace('day', '')}</DayTag>
                      <KeywordsList>
                        {result.keywords.slice(0, 5).map((keyword, index) => (
                          <KeywordTag key={index}>
                            <HighlightedText text={keyword} highlight={searchTerm} />
                          </KeywordTag>
                        ))}
                      </KeywordsList>
                    </ResultCard>
                  ))}
                </ResultsList>
              ) : (
                <NoResults>
                  <h3>No results found</h3>
                  <p>Try different keywords or remove filters</p>
                </NoResults>
              )}
            </ResultsSection>
          </>
        )}
      </SearchPageContainer>
    </Layout>
  );
};

export default SearchPage;