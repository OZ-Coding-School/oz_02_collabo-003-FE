import React from 'react';
import Styles from './StarText.module.scss';

interface StarFortunes {
  [key: string]: {
    fortune: string;
    imageSrc: string;
  };
}

const starFortunes: StarFortunes = {
  Aries: {
    fortune: '오늘은 기운이 넘치는 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_star_aries.png',
  },
  Taurus: {
    fortune: '주변 사람들을 배려하고 도와주는 일에 만족을 느낄 수 있는 날이에요.',
    imageSrc: '/K_img/img_circle_star_taurus.png',
  },
  Gemini: {
    fortune: '오늘은 감수성이 풍부한 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_star_gemini.png',
  },
  Cancer: {
    fortune: '오늘은 새로운 아이디어를 구상할 수 있는 날이에요. 창의력을 발휘하세요!',
    imageSrc: '/K_img/img_circle_star_cancer.png',
  },
  Leo: {
    fortune: '호기심을 가지고 새로운 것을 시도해보세요. 즐거운 경험이 될 거예요.',
    imageSrc: '/K_img/img_circle_star_leo.png',
  },
  Virgo: {
    fortune: '자연의 아름다움을 느낄 수 있는 하루가 될 것입니다. 산책이나 그림을 그려보세요.',
    imageSrc: '/K_img/img_circle_star_virgo.png',
  },
  Libra: {
    fortune: '창의력을 발휘하는 좋은 날이 될 거에요. 새로운 아이디어가 떠오를 거예요.',
    imageSrc: '/K_img/img_circle_star_libra.png',
  },
  Scorpio: {
    fortune: '목표를 설정하고 계획을 세우는 데에 집중하세요. 당신의 미래가 밝을 거예요.',
    imageSrc: '/K_img/img_circle_star_scorpio.png',
  },
  Sagittarius: {
    fortune: '대담한 시도를 해보세요. 새로운 경험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_star_sagittarius.png',
  },
  Capricorn: {
    fortune: '오늘은 즐겁고 에너지가 넘치는 날이 될 거예요. 취미활동을 즐겨보세요!',
    imageSrc: '/K_img/img_circle_star_capricorn.png',
  },
  Aquarius: {
    fortune: '신나는 모험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_star_aquarius.png',
  },
  Pisces: {
    fortune: '호기심이 가득한 하루가 될 거예요. 새로운 도전에 도전해보세요!',
    imageSrc: '/K_img/img_circle_star_pisces.png',
  },
};

const TextImage: React.FC = () => {
  const starFortuneMessages = Object.entries(starFortunes).map(([star, { fortune, imageSrc }]) => (
    <div key={star}>
      <img src={imageSrc} alt={star} className={Styles.starImage} />
      <h2 className={Styles.starName}>{star}</h2>
      <p className={Styles.starTMI}>{fortune}</p>
    </div>
  ));

  return (
    <div>
      <ul>{starFortuneMessages}</ul>
    </div>
  );
};

export default TextImage;
