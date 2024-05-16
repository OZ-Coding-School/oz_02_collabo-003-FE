import React from 'react';
import { useNavigate } from 'react-router-dom';
import Date from '../../components/date/Date';
import Text from '../../components/textbox/mbti/Mbti_text';
import { IoChevronBack } from 'react-icons/io5';
import LogoImg from './img/text_logo_b.png';
import Styles from './Mbti.module.scss';

const Fortune: React.FC = () => {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }

  return (
    <div>
      <div className={Styles.head}>
        <div>
          <IoChevronBack onClick={MoveHome} className={Styles.back} />
          <img src={LogoImg} alt="로고" className={Styles.LogoImg} />
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
