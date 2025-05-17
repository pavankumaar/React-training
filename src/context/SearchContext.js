import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);
  
  // Function to toggle search expansion
  const toggleSearchExpansion = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };
  
  // Update mobile state
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <SearchContext.Provider value={{ 
      isSearchExpanded, 
      setIsSearchExpanded, 
      toggleSearchExpansion,
      isMobile
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;