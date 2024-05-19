import React from 'react';
import { useNavigate } from 'react-router-dom';

import Date from '../../components/date/Date';
import Text from '../../components/textbox/mbti/MbtiText';

import { IoChevronBack, IoShareSocialOutline } from 'react-icons/io5';

import Styles from './Mbti.module.scss';

const Fortune: React.FC = () => {
  const navigate = useNavigate();
  function MoveHome() {
    navigate(-1);
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div className={Styles.headicon}>
          <IoChevronBack onClick={MoveHome} className={Styles.Back} />
          <img src="/K_img/K-logo-icon/text_logo_b.png" alt="로고" className={Styles.LogoImg} />
          <IoShareSocialOutline className={Styles.Share} />
        </div>
        <div>
          <img src="/public/K_img/island/img_island_mbti_default.png" alt="main" className={Styles.MbtiMainImg} />
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
