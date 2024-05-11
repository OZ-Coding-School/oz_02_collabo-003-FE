import React, { useState, useEffect } from 'react';
import Styles from './Scroll.module.scss';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container" style={{ paddingTop: `${scrollY}px` }}>
      <div className={Styles.box}></div>
    </div>
  );
};

export default App;
