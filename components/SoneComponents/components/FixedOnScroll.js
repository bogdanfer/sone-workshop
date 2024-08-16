import React, { useEffect, useRef, useState } from 'react';

const FixedOnScroll = ({ topMarkerRef, bottomMarkerRef }) => {
    const [isFixed, setIsFixed] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.5,
        };

        const topObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                setIsFixed(false);
                }
            });
        }, options);

        const bottomObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                setIsFixed(false);
                }
            });
        }, options);

        const centerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                setIsFixed(true);
                }
            });
        }, { threshold: 0.5 });

        if (topMarkerRef?.current) {
            console.log("top market");
            topObserver.observe(topMarkerRef.current);
        }

        if (bottomMarkerRef?.current) {
            console.log("bottom markert");
            bottomObserver.observe(bottomMarkerRef.current);
        }

        if (targetRef.current) {
            centerObserver.observe(targetRef.current);
        }

        return () => {
            // if (topMarkerRef?.current) topObserver.unobserve(topMarkerRef.current);
            // if (bottomMarkerRef?.current) bottomObserver.unobserve(bottomMarkerRef.current);
            // if (targetRef.current) centerObserver.unobserve(targetRef.current);
        };
    }, [topMarkerRef, bottomMarkerRef]);

  return (
    <>
        <svg 
        ref={targetRef}
        style={{
            position: isFixed ? 'fixed' : 'absolute',
            top: isFixed ? '50%' : 'initial',
            transform: isFixed ? 'translateY(-50%)' : 'none',
            zIndex: 9999, // Ensure it stays above other content
          }}
        className="sone-letter-o" 
        fill="none" 
        viewBox="0 0 41 50">
            <path d="M34.65 44.03C30.98 48.01 26.11 50 20.05 50c-6.06 0-10.92-1.99-14.57-5.97C1.82 40.05 0 34.98 0 28.8s1.83-11.25 5.48-15.23C9.13 9.59 13.99 7.6 20.05 7.6c6.06 0 10.93 1.99 14.6 5.97 3.67 3.98 5.51 9.05 5.51 15.23s-1.84 11.25-5.51 15.23ZM20.1 41.81c3.18 0 5.61-1.2 7.3-3.61 1.69-2.41 2.53-5.54 2.53-9.4 0-3.86-.84-7.01-2.53-9.43s-4.12-3.64-7.3-3.64c-3.18 0-5.58 1.21-7.3 3.64-1.72 2.42-2.59 5.57-2.59 9.43 0 3.86.86 6.95 2.59 9.38 1.72 2.42 4.16 3.64 7.3 3.64v-.01ZM11.92 5.74V0h16.25v5.74H11.92Z" fill="#fff"/>
        </svg>
    </>
  );
};

export default FixedOnScroll;
