import React from 'react';
import Date from '../components/date/Date';
import Scroll from '../components/scroll/Scroll';
import StarImg from './img/star.png';
import LogoImg from '../mbti/img/text_logo_b.png';
import Styles from './Star.module.scss';

const Fortune: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.TextLogoImg}>
        <img src={LogoImg} alt="로고" />
      </div>
      <div className={Styles.StraImg}>
        <img src={StarImg} alt="별자리이미지" />
      </div>
      <div className={Styles.title}>
        <h1>별자리</h1>
        <h1>오늘의 운세</h1>
      </div>
      <Date />
      <Scroll />
    </div>
  );
};
export default Fortune;
