import React from 'react';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../../services/queryKeys';
import APIS from '../../../../../services/api';

import Styles from './StarText.module.scss';
import { ClipLoader } from 'react-spinners';

interface StarFortunes {
  msg_id: number;
  imageSrc: string;
  categoriy: string;
  luck_msg: string;
  attribute1: string;
  attribute2: string;
  gpt_id: number;
}

interface StarFortuneConfig {
  [key: string]: {
    luck_date: string;
    imageSrc: string;
  };
}

const StarFortunes: StarFortuneConfig = {
  물병자리: {
    luck_date: '신나는 모험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_star_aquarius.png',
  },
  물고기자리: {
    luck_date: '호기심이 가득한 하루가 될 거예요. 새로운 도전에 도전해보세요!',
    imageSrc: '/K_img/img_circle_star_pisces.png',
  },
  양자리: {
    luck_date: '오늘은 기운이 넘치는 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_star_aries.png',
  },
  황소자리: {
    luck_date: '주변 사람들을 배려하고 도와주는 일에 만족을 느낄 수 있는 날이에요.',
    imageSrc: '/K_img/img_circle_star_taurus.png',
  },
  쌍둥이자리: {
    luck_date: '오늘은 감수성이 풍부한 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_star_gemini.png',
  },
  게자리: {
    luck_date: '오늘은 새로운 아이디어를 구상할 수 있는 날이에요. 창의력을 발휘하세요!',
    imageSrc: '/K_img/img_circle_star_cancer.png',
  },
  사자자리: {
    luck_date: '호기심을 가지고 새로운 것을 시도해보세요. 즐거운 경험이 될 거예요.',
    imageSrc: '/K_img/img_circle_star_leo.png',
  },
  처녀자리: {
    luck_date: '자연의 아름다움을 느낄 수 있는 하루가 될 것입니다. 산책이나 그림을 그려보세요.',
    imageSrc: '/K_img/img_circle_star_virgo.png',
  },
  천칭자리: {
    luck_date: '창의력을 발휘하는 좋은 날이 될 거에요. 새로운 아이디어가 떠오를 거예요.',
    imageSrc: '/K_img/img_circle_star_libra.png',
  },
  전갈자리: {
    luck_date: '목표를 설정하고 계획을 세우는 데에 집중하세요. 당신의 미래가 밝을 거예요.',
    imageSrc: '/K_img/img_circle_star_scorpio.png',
  },
  사수자리: {
    luck_date: '대담한 시도를 해보세요. 새로운 경험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_star_sagittarius.png',
  },
  염소자리: {
    luck_date: '오늘은 즐겁고 에너지가 넘치는 날이 될 거예요. 취미활동을 즐겨보세요!',
    imageSrc: '/K_img/img_circle_star_capricorn.png',
  },
};

const TextImage: React.FC = () => {
  const { data: starData, isLoading } = useQuery({
    queryKey: QUERY_KEYS.STAR,
    queryFn: () => APIS.getStarDataAPI(),
  });

  const starFortuneMessages = starData?.map((individualStar: StarFortunes, index: string) => (
    <div key={index}>
      <img
        src={StarFortunes[individualStar.attribute1]?.imageSrc as string}
        alt="starImages"
        className={Styles.starImage}
      />
      <h2 className={Styles.starName}>{individualStar.attribute1}</h2>
      <p className={Styles.starTMI}>{individualStar.luck_msg}</p>
    </div>
  ));

  return (
    <div>
      <ul>
        {isLoading ? (
          <div className={Styles.loading}>
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : (
          starFortuneMessages
        )}
      </ul>
    </div>
  );
};

export default TextImage;
