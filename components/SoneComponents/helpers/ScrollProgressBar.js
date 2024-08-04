import React, { useState, useEffect } from 'react';

const ScrollProgressBar = ({ theme }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize the scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container" style={{ backgroundColor: theme  }}>
      <div className="progress-bar" style={{ width: `${scrollPercent}%`, backgroundColor: theme === 'white' ? 'black' : 'white' }}></div>
    </div>
  );
};

export default ScrollProgressBar;
