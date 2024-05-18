import React from 'react';

import Date from '../../components/date/Date';

import { IoChevronBack, IoShareSocialOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import Styles from './Zodiac.module.scss';

interface ZodiacFortunes {
  [key: string]: {
    imageSrc: string;
    text: string;
  };
}

const zodiacFortunes: ZodiacFortunes = {
  쥐띠: {
    imageSrc: '/K_img/img_circle_zodiac_mouse.png',
    text: '쥐띠',
  },
  소띠: {
    imageSrc: '/K_img/img_circle_zodiac_cow.png',
    text: '소띠',
  },
  호랑이띠: {
    imageSrc: '/K_img/img_circle_zodiac_tiger.png',
    text: '호랑이띠',
  },
  토끼띠: {
    imageSrc: '/K_img/img_circle_zodiac_rabbit.png',
    text: '토끼띠',
  },
  용띠: {
    imageSrc: '/K_img/img_circle_zodiac_dragon.png',
    text: '용띠',
  },
  뱀띠: {
    imageSrc: '/K_img/img_circle_zodiac_snake.png',
    text: '뱀띠',
  },
  말띠: {
    imageSrc: '/K_img/img_circle_zodiac_horse.png',
    text: '말띠',
  },
  양띠: {
    imageSrc: '/K_img/img_circle_zodiac_sheep.png',
    text: '양띠',
  },
  원숭이띠: {
    imageSrc: '/public/K_img/img_circle_zodiac_monkey.png',
    text: '원숭이띠',
  },
  닭띠: {
    imageSrc: '/K_img/img_circle_zodiac_rooster.png',
    text: '닭띠',
  },
  개띠: {
    imageSrc: '/K_img/img_circle_zodiac_dog.png',
    text: '개띠',
  },
  돼지띠: {
    imageSrc: '/K_img/img_circle_zodiac_pig.png',
    text: '돼지띠',
  },
};

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
          <h1 className={Styles.title}>
            띠별
            <br />
            오늘의 운세
          </h1>
        </div>
        <Date />
      </div>
      <div className={Styles.body}>
        <div>
          {Object.keys(zodiacFortunes).map((zodiacSign, index) => (
            <div key={index} className={Styles.zodiacImages}>
              <img src={zodiacFortunes[zodiacSign].imageSrc} alt={zodiacSign} className={Styles.img} />
              <div className={Styles.zodiacText}>{zodiacFortunes[zodiacSign].text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fortune;
