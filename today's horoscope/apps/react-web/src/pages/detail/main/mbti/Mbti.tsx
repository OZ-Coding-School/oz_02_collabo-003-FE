import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Share from '../../components/kakao/Kakao';
import Date from '../../components/date/Date';
import Text from '../../components/textbox/mbti/MbtiText';

import { IoChevronBack } from 'react-icons/io5';

import Styles from './Mbti.module.scss';

const Fortune: React.FC = () => {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 170) {
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
          <img src="/K_img/K-logo-icon/text_logo_b.png" alt="로고" className={Styles.LogoImg} />
          <Share />
        </div>
        <div className={`${isScrolled ? Styles.hidden : ''}`}>
          <img src="/K_img/island/img_island_mbti_default.png" alt="main" className={Styles.MbtiMainImg} />
        </div>
        <div>
          <h1 className={Styles.title}>
            MBTI
            <br />
            오늘의 운세
          </h1>
        </div>
        <Date />
      </div>
      <div className={Styles.body}>
        <Text />
      </div>
    </div>
  );
};

export default Fortune;
