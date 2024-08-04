import { useState, useEffect } from 'react';

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const handleMobileChange = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mobileQuery.matches);

    // Listener for changes
    mobileQuery.addEventListener('change', handleMobileChange);

    // Cleanup listener on unmount
    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  return isMobile;
};

export default useMobileDetect;
