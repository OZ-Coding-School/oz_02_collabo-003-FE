import React, { useState, useEffect } from 'react';
import './Scroll.module.scss';

const ScrollingImage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position); //
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="scrolling-container">
      <div className="scrolling-image" style={{ transform: `translateY(${scrollPosition}px)` }} />
    </div>
  );
};

export default ScrollingImage;
