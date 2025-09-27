import { useState, useEffect, useRef, useCallback } from 'react';
import { TabType } from '../types/howItWorksTypes';

// Custom hook for intersection observer
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasIntersected, options]);

  return { targetRef, isIntersecting, hasIntersected };
};

// Custom hook for analytics tracking
export const useAnalytics = () => {
  const trackEvent = useCallback((eventName: string, properties: Record<string, any>) => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        ...properties,
        timestamp: Date.now(),
      });
    }

    // Adobe Analytics (if used)
    if (typeof window !== 'undefined' && (window as any).s) {
      const s = (window as any).s;
      s.events = eventName;
      Object.assign(s, properties);
      s.t();
    }

    // Custom analytics endpoint (only in production)
    const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!isDevelopment) {
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          properties,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      }).catch(console.error);
    }
  }, []);

  return { trackEvent };
};

// Custom hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    startTimeRef.current = performance.now();

    return () => {
      const duration = performance.now() - startTimeRef.current;
      
      // Log performance metrics
      if (duration > 16) { // Longer than one frame (16.67ms)
        console.warn(`${componentName} render took ${duration.toFixed(2)}ms`);
      }

      // Send to analytics in production
      const isDevelopment = typeof window !== 'undefined' && 
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
      if (!isDevelopment && typeof window !== 'undefined') {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'component_performance', {
            component_name: componentName,
            render_duration: Math.round(duration),
            event_category: 'performance',
          });
        }
      }
    };
  });

  return { startTime: startTimeRef.current };
};

// Custom hook for tab management with local storage persistence
export const useTabManager = (defaultTab: TabType, storageKey?: string) => {
  const [activeTab, setActiveTab] = useState<TabType>(() => {
    if (storageKey && typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey);
      if (stored && (stored === 'clients' || stored === 'freelancers')) {
        return stored as TabType;
      }
    }
    return defaultTab;
  });

  const changeTab = useCallback((tab: TabType) => {
    setActiveTab(tab);
    if (storageKey && typeof window !== 'undefined') {
      localStorage.setItem(storageKey, tab);
    }
  }, [storageKey]);

  return { activeTab, changeTab };
};

// Custom hook for step state management
export const useStepManager = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());

  const toggleStep = useCallback((stepNumber: number) => {
    setActiveStep(current => current === stepNumber ? null : stepNumber);
    
    setExpandedSteps(current => {
      const newSet = new Set(current);
      if (newSet.has(stepNumber)) {
        newSet.delete(stepNumber);
      } else {
        newSet.add(stepNumber);
      }
      return newSet;
    });
  }, []);

  const isStepExpanded = useCallback((stepNumber: number) => {
    return expandedSteps.has(stepNumber);
  }, [expandedSteps]);

  const resetSteps = useCallback(() => {
    setActiveStep(null);
    setExpandedSteps(new Set());
  }, []);

  return {
    activeStep,
    expandedSteps,
    toggleStep,
    isStepExpanded,
    resetSteps,
  };
};

// Custom hook for responsive design
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};