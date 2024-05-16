import React from 'react';
import { useNavigate } from 'react-router-dom';
import Date from '../../date/Date';
import { IoChevronBack, IoShareSocialOutline } from 'react-icons/io5';
import Styles from './Zodi_text.module.scss';

interface ZodiacFortunes {
  [key: string]: {
    fortune: string;
    text: string;
  };
}

const zodiacFortunes: ZodiacFortunes = {
  '1963년생': {
    text: '1963년생',
    fortune:
      '새로운 가능성에 대한 발견이 있을 수 있는 날입니다. 지난 경험을 토대로 새로운 가능성을 탐색하고 경험과 직감에 의지하여, 타인과 소통을 통해 아이디어를 얻을 수 있다.',
  },
  '1975년생': {
    text: '1975년생',
    fortune:
      '새로운 가능성에 대한 발견이 있을 수 있는 날입니다. 지난 경험을 토대로 새로운 가능성을 탐색하고 경험과 직감에 의지하여, 타인과 소통을 통해 아이디어를 얻을 수 있다.',
  },
  '1987년생': {
    text: '1987년생',
    fortune:
      '새로운 가능성에 대한 발견이 있을 수 있는 날입니다. 지난 경험을 토대로 새로운 가능성을 탐색하고 경험과 직감에 의지하여, 타인과 소통을 통해 아이디어를 얻을 수 있다.',
  },
  '1999년생': {
    text: '1999년생',
    fortune:
      '새로운 가능성에 대한 발견이 있을 수 있는 날입니다. 지난 경험을 토대로 새로운 가능성을 탐색하고 경험과 직감에 의지하여, 타인과 소통을 통해 아이디어를 얻을 수 있다.',
  },
};

const TextImage: React.FC = () => {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div className={Styles.headtitle}>
          <IoChevronBack onClick={MoveHome} className={Styles.Back} />
          <img src="/public/K_img/K-logo-icon/text_logo_b.png" alt="logo" className={Styles.LogoImg} />
          <IoShareSocialOutline className={Styles.Share} />
        </div>
        <div className={Styles.title}>
          <h1 className={Styles.zodiactitle}>토끼띠 오늘의 운세</h1>
          <Date />
        </div>
      </div>
      <div className={Styles.body}>
        <img src="/public/K_img/img_circle_zodiac_rabbit.png" alt="rabbit" className={Styles.zodiacImages} />
        <div>
          {Object.keys(zodiacFortunes).map(zodiacSign => (
            <div className={Styles.point} key={zodiacSign}>
              <div className={Styles.text}>{zodiacFortunes[zodiacSign].text}</div>
              <div className={Styles.fortune}>{zodiacFortunes[zodiacSign].fortune}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextImage;
