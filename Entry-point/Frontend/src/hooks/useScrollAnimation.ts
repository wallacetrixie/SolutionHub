import { useState, useRef, useEffect } from 'react';
import type { UseScrollAnimationReturn } from '../types/searchTypes';

export const useScrollAnimation = (threshold: number = 100): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleIntersection = (entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const handleScroll = (): void => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight - threshold) {
        setIsVisible(true);
      }
    };

    // Use Intersection Observer if available, fallback to scroll
    if ('IntersectionObserver' in window && containerRef.current) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: `${threshold}px`,
        threshold: 0.1,
      });

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    } else {
      // Fallback to scroll listener
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on mount
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [threshold]);

  return { isVisible, containerRef };
};