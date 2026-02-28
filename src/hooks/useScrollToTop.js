import { useEffect } from 'react';

/**
 * Custom hook that automatically scrolls to the top of the page
 * when the component mounts or when dependencies change.
 * Also handles browser back/forward navigation.
 * 
 * @param {Array} deps - Dependencies that trigger scroll to top when changed
 */
export const useScrollToTop = (deps = []) => {
  useEffect(() => {
    // Scroll to top when dependencies change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, deps);
};