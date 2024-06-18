import React from 'react';

import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../../services/queryKeys';
import APIS from '../../../../../services/api';

import Styles from './MbtiText.module.scss';
import { ClipLoader } from 'react-spinners';

interface MbtiFortunes {
  msg_id: number;
  imageSrc: string;
  categoriy: string;
  luck_msg: string;
  attribute1: string;
  gpt_id: number;
}

interface MbtiFortuneConfig {
  [key: string]: {
    luck_date: string;
    imageSrc: string;
  };
}

const MbtiFortunes: MbtiFortuneConfig = {
  ISTJ: {
    luck_date:
      '능력이 부족하니 알찬 결실을 거두기가 만무한 실정입니다. 현재 상황을 냉정히 평가하고 부족한 부분을 보완해야 합니다. ',
    imageSrc: '/K_img/img_circle_mbti_istj.png',
  },
  ISFJ: {
    luck_date:
      '능력이 부족하니 알찬 결실을 거두기가 만무한 실정입니다. 현재 상황을 냉정히 평가하고 부족한 부분을 보완해야 합니다. ',
    imageSrc: '/K_img/img_circle_mbti_isfj.png',
  },
  INFJ: {
    luck_date: '오늘은 감수성이 풍부한 하루가 될 것입니다.',
    imageSrc: '/K_img/img_circle_mbti_infj.png',
  },
  INTJ: {
    luck_date: '오늘은 새로운 아이디어를 구상할 수 있는 날이에요. 창의력을 발휘하세요!',
    imageSrc: '/K_img/img_circle_mbti_intj.png',
  },
  ISTP: {
    luck_date: '호기심을 가지고 새로운 것을 시도해보세요. 즐거운 경험이 될 거예요.',
    imageSrc: '/K_img/img_circle_mbti_istp.png',
  },
  ISFP: {
    luck_date: '자연의 아름다움을 느낄 수 있는 하루가 될 것입니다. 산책이나 그림을 그려보세요.',
    imageSrc: '/K_img/img_circle_mbti_isfp.png',
  },
  INFP: {
    luck_date: '창의력을 발휘하는 좋은 날이 될 거에요. 새로운 아이디어가 떠오를 거예요.',
    imageSrc: '/K_img/img_circle_mbti_infp.png',
  },
  INTP: {
    luck_date: '목표를 설정하고 계획을 세우는 데에 집중하세요. 당신의 미래가 밝을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_intp.png',
  },
  ESTP: {
    luck_date: '대담한 시도를 해보세요. 새로운 경험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_mbti_estp.png',
  },
  ESFP: {
    luck_date: '오늘은 즐겁고 에너지가 넘치는 날이 될 거예요. 취미활동을 즐겨보세요!',
    imageSrc: '/K_img/img_circle_mbti_esfp.png',
  },
  ENFP: {
    luck_date: '신나는 모험이 당신을 기다리고 있어요!',
    imageSrc: '/K_img/img_circle_mbti_enfp.png',
  },
  ENTP: {
    luck_date: '호기심이 가득한 하루가 될 거예요. 새로운 도전에 도전해보세요!',
    imageSrc: '/K_img/img_circle_mbti_entp.png',
  },
  ENFJ: {
    luck_date: '오늘은 새로운 인연을 만날 수 있을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_enfj.png',
  },
  ENTJ: {
    luck_date: '당신의 목표를 이루기 위한 좋은 계획이 있을 거예요.',
    imageSrc: '/K_img/img_circle_mbti_entj.png',
  },
  ESTJ: {
    luck_date: '일정을 잘 조절하고 집중하세요. 당신의 능력을 발휘할 수 있는 날이에요.',
    imageSrc: '/K_img/img_circle_mbti_estj.png',
  },
  ESFJ: {
    luck_date: '다른 사람들과 소통하는 데에 만족을 느낄 수 있는 날이에요. 다정한 표현을 해보세요!',
    imageSrc: '/K_img/img_circle_mbti_esfj.png',
  },
};

const TextImage: React.FC = () => {
  const { data: mbtiData, isLoading } = useQuery({
    queryKey: QUERY_KEYS.MBTI,
    queryFn: () => APIS.getMbtiDataAPI(),
  });

  const mbtiFortuneMessages = mbtiData?.map((individualMbti: MbtiFortunes, index: string) => (
    <div key={index} className={Styles.body}>
      <img
        src={MbtiFortunes[individualMbti.attribute1]?.imageSrc as string}
        alt="mbtiImages"
        className={Styles.mbtiImage}
      />
      <div>
        <h2 className={Styles.mbtiName}>{individualMbti.attribute1}</h2>
      </div>
      <p className={Styles.mbtiTMI}>{individualMbti.luck_msg}</p>
    </div>
  ));

  return (
    <div className={Styles.cnt}>
      <ul>
        {isLoading ? (
          <div className={Styles.loading}>
            <ClipLoader color="#36d7b7" size={60} />
          </div>
        ) : (
          mbtiFortuneMessages
        )}
      </ul>
    </div>
  );
};

export default TextImage;
