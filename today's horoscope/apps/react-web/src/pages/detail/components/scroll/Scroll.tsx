import React, { useEffect, useState } from 'react';
import Styles from './Scroll.module.scss';

const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const [shouldShowScroll, setShouldShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currY: number = window.scrollY;
      const totalY: number = document.documentElement.scrollHeight - window.innerHeight;
      const percentage: number = (currY / totalY) * 100;

      setScrollPercentage(percentage);

      // 스크롤이 특정 위치를 넘어가면 스크롤 적용
      if (currY >= 382) {
        setShouldShowScroll(true);
      } else {
        setShouldShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return shouldShowScroll ? <div className={Styles.purpleline} style={{ width: `${scrollPercentage}%` }} /> : null;
};

export default ScrollProgress;
