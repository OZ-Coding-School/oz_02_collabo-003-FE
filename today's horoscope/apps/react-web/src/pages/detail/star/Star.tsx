import React from 'react';

import Date from '../../detail/components/date/Date';
import Text from '../components/textbox/star/Star_text';
import { IoChevronBack } from 'react-icons/io5';
import { IoShareSocialOutline } from 'react-icons/io5';
import LogoImg from './img/text_logo_b.png';
import Styles from './Star.module.scss';

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
          <img src="/public/K_img/island/img_island_star_default_.png" alt="main" className={Styles.StarMainImg} />
          <h1 className={Styles.title}>
            별자리
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
