import React from 'react';

import Date from '../components/date/Date';
import Scroll from '../components/scroll/Scroll';
import Text from '../components/textbox/mbti/Mbti_text';
import { IoChevronBack } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import LogoImg from './img/text_logo_b.png';
import Styles from './Mbti.module.scss';

const Fortune: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div className={Styles.headtitle}>
          <IoChevronBack className={Styles.Back} />
          <img src={LogoImg} alt="로고" className={Styles.LogoImg} />
          <IoShareSocialOutline className={Styles.Share} />
        </div>
        <div>
          <img src="/public/K철학관img/섬/img_island_mbti_default.png" alt="main" className={Styles.MbtiMainImg} />
          <h1 className={Styles.title}>
            MBTI
            <br />
            오늘의 운세
          </h1>
        </div>
        <Date />
      </div>
      <div className={Styles.body}>
        <Scroll />
        <Text />
      </div>
    </div>
  );
};

export default Fortune;
