import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Share from '../../components/kakao/Kakao';
import Date from '../../components/date/Date';
import Text from '../../components/textbox/star/StarText';

import { IoChevronBack } from 'react-icons/io5';

import Styles from './Star.module.scss';

const Fortune: React.FC = () => {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={Styles.container}>
      <div className={`${Styles.head} ${isScrolled ? Styles.headScrolled : ''}`}>
        <div className={Styles.headicon}>
          <IoChevronBack onClick={MoveHome} className={Styles.Back} />
          <img src="/K_img/K-logo-icon/text_logo_b.png" alt="Logo" className={Styles.LogoImg} />
          <Share />
        </div>
        <div className={`${isScrolled ? Styles.hidden : ''}`}>
          <img src="/K_img/island/img_island_star_default_.png" alt="main" className={Styles.StarMainImg} />
        </div>
        <div>
          <h1 className={Styles.title}>
            별자리
            <br />
            오늘의 운세
          </h1>
          <Date />
        </div>
      </div>
      <div className={Styles.body}>
        <Text />
      </div>
    </div>
  );
};

export default Fortune;
