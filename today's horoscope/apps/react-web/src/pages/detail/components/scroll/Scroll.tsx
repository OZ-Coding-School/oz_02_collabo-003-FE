import React, { useState, useEffect } from 'react';
import Styles from './Scroll.module.scss';

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
    <div>
      <div className={Styles.scrollingimage} style={{ transform: `translateY(${scrollPosition}px)` }} />
    </div>
  );
};

export default ScrollingImage;
