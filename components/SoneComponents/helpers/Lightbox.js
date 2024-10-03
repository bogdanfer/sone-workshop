import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';

const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    const lightboxImage = document.querySelector('.lightbox-image, .lightbox-video');
    if (lightboxImage) {
      lightboxImage.classList.add('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        lightboxImage.classList.remove('fade-out');
        lightboxImage.classList.add('fade-in');
      }, 300); // Duration of the fade-out effect
    }
  };
  
  const goToNext = () => {
    const lightboxImage = document.querySelector('.lightbox-image, .lightbox-video');
    if (lightboxImage) {
      lightboxImage.classList.add('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        lightboxImage.classList.remove('fade-out');
        lightboxImage.classList.add('fade-in');
      }, 300); // Duration of the fade-out effect
    }
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.play();
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, [images]);

  return (
    <>
      {images && images.map((image, index) => (
        image.extension === 'mp4' ? (
          <video
            className="thumbnail"
            key={index}
            controls
            muted
            playsInline={true}
            ref={(el) => (videoRefs.current[index] = el)}
          >
            <source src={image.fileUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            key={index}
            src={image.fileUrl}
            alt={image.description}
            onClick={() => openLightbox(index)}
            className="thumbnail"
          />
        )
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
          {images[currentIndex].extension === 'mp4' ? (
            <video
              className="lightbox-video"
              controls
              autoPlay
              muted
              playsInline={true}
              ref={(el) => (videoRefs.current[currentIndex] = el)}
            >
              <source src={images[currentIndex].fileUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              onClick={closeLightbox}
              src={images[currentIndex].fileUrl}
              alt={images[currentIndex].description}
              className="lightbox-image"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Lightbox;