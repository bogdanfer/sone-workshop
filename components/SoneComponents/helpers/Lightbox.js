import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      {images && images.map((image, index) => (
        <img
          key={index}
          src={image.fileUrl}
          alt={image.description}
          onClick={() => openLightbox(index)}
          className="thumbnail"
        />
      ))}

      {isOpen && (
        <div className="lightbox-overlay" {...handlers}>
          <button onClick={closeLightbox} className="close-button">Close</button>
          <button onClick={goToPrevious} className="nav-button prev-button">
            <svg width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2L32 31L2 61" stroke="white" strokeWidth="3"/>
            </svg>
          </button>
          <button onClick={goToNext} className="nav-button next-button">
            <svg width="35" height="63" viewBox="0 0 35 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2L32 31L2 61" stroke="white" strokeWidth="3"/>
            </svg>
          </button>
          <div className='div-white'></div>
          <img onClick={closeLightbox} src={images[currentIndex].fileUrl} alt={images[currentIndex].description} className="lightbox-image" />
        </div>
      )}
    </>
  );
};

export default Lightbox;
