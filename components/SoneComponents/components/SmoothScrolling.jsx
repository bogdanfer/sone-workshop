"use client";
import React, { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,       // Interpolation factor
      duration: 2,   // Duration of scroll animations
      smoothTouch: true, // Enables smooth scrolling on touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up when the component is unmounted
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScrolling;
