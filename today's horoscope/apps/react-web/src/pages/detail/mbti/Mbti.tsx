import React from 'react';

import Date from '../components/date/Date';
import Scroll from '../components/scroll/Scroll';
import Text from '../components/testbox/mbti/Mbti_text';
import { IoChevronBack } from 'react-icons/io5';
import MbtiImg from './img/mbti.png';
import LogoImg from './img/text_logo_b.png';
import Styles from './Mbti.module.scss';

const Fortune: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div className={Styles.LogoImg}>
          <img src={LogoImg} alt="로고" />
        </div>
        <IoChevronBack />
        <div className={Styles.MbtiMainImg}>
          <img src={MbtiImg} alt="MBTI이미지" />
        </div>
        <div className={Styles.title}>
          <h1>MBTI</h1>
          <h1>오늘의 운세</h1>
        </div>
        <Date />
      </div>
      <div className={Styles.foot}>
        <Scroll />
        <Text />
      </div>
    </div>
  );
};

export default Fortune;
