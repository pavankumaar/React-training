/**
 * API Caching Utility
 * 
 * This utility provides functions for caching API responses in localStorage
 * with configurable expiration times.
 */

// Default cache expiration time (5 minutes)
const DEFAULT_CACHE_EXPIRATION = 5 * 60 * 1000;

/**
 * Get data from cache
 * @param {string} cacheKey - The key to use for storing in localStorage
 * @param {number} expirationTime - Cache expiration time in milliseconds
 * @returns {object|null} - The cached data or null if not found or expired
 */
export const getFromCache = (cacheKey, expirationTime = DEFAULT_CACHE_EXPIRATION) => {
  try {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      // Check if cache is still valid
      if (Date.now() - timestamp < expirationTime) {
        return data;
      }
    }
    return null;
  } catch (error) {
    // If there's any error reading from localStorage, return null
    return null;
  }
};

/**
 * Save data to cache
 * @param {string} cacheKey - The key to use for storing in localStorage
 * @param {object} data - The data to cache
 */
export const saveToCache = (cacheKey, data) => {
  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (error) {
    // Ignore errors when saving to localStorage
    console.warn('Failed to save to cache:', error);
  }
};

/**
 * Clear a specific cache entry
 * @param {string} cacheKey - The key to clear from localStorage
 */
export const clearCache = (cacheKey) => {
  try {
    localStorage.removeItem(cacheKey);
  } catch (error) {
    // Ignore errors when clearing localStorage
  }
};

/**
 * Clear all cache entries that start with a prefix
 * @param {string} prefix - The prefix to match cache keys against
 */
export const clearCacheByPrefix = (prefix) => {
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    // Ignore errors when clearing localStorage
  }
};

/**
 * Cached API fetch function
 * @param {string} url - The URL to fetch
 * @param {string} cacheKey - The key to use for caching
 * @param {object} options - Fetch options
 * @param {boolean} forceRefresh - Whether to bypass cache and force a refresh
 * @param {number} expirationTime - Cache expiration time in milliseconds
 * @returns {Promise<object>} - The API response data
 */
export const cachedFetch = async (url, cacheKey, options = {}, forceRefresh = false, expirationTime = DEFAULT_CACHE_EXPIRATION) => {
  // Try to get from cache if not forcing refresh
  if (!forceRefresh) {
    const cachedData = getFromCache(cacheKey, expirationTime);
    if (cachedData) {
      return cachedData;
    }
  }
  
  // If not in cache or forcing refresh, fetch from API
  const response = await fetch(url, options);
  const data = await response.json();
  
  // Save to cache
  saveToCache(cacheKey, data);
  
  return data;
};

export default {
  getFromCache,
  saveToCache,
  clearCache,
  clearCacheByPrefix,
  cachedFetch
};