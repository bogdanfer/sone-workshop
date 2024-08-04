import { useState, useEffect } from 'react';

const useScrollPercentage = (ref) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, [ref]);

  return scrollPercentage;
};

export default useScrollPercentage;
