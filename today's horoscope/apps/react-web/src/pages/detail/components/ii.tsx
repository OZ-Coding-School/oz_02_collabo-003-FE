import React from 'react';
import Styles from './Mbti_text.module.scss';

interface MBTIFortunes {
  [key: string]: string;
}

const mbtiFortunes: MBTIFortunes = {
  ENFJ: '오늘은 새로운 인연을 만날 수 있을 거예요.',
  ENFP: '신나는 모험이 당신을 기다리고 있어요!',
  ENTJ: '당신의 목표를 이루기 위한 좋은 계획이 있을 거예요.',
};

const TextImage: React.FC = () => {
  const mbtiFortuneMessages = Object.entries(mbtiFortunes).map(([mbti, fortune]) => (
    <div key={mbti}>
      <h2>{mbti}</h2>
      <p>{fortune}</p>
    </div>
  ));

  return (
    <div className={Styles.TextImage}>
      <div className={Styles.Image}>
        <img src="/public/K철학관img/img_circle_mbti_entj.png" alt="ENTJ" />
        <img src="/public/K철학관img/img_circle_mbti_entp.png" alt="ENTP" />
        <img src="/public/K철학관img/img_circle_mbti_enfj.png" alt="ENFJ" />
        <img src="/public/K철학관img/img_circle_mbti_enfp.png" alt="ENFP" />
        <img src="/public/K철학관img/img_circle_mbti_estj.png" alt="ESTJ" />
        <img src="/public/K철학관img/img_circle_mbti_estp.png" alt="ESTP" />
        <img src="/public/K철학관img/img_circle_mbti_esfj.png" alt="ESFJ" />
        <img src="/public/K철학관img/img_circle_mbti_esfp.png" alt="ESFP" />
        <img src="/public/K철학관img/img_circle_mbti_intj.png" alt="INTJ" />
        <img src="/public/K철학관img/img_circle_mbti_intp.png" alt="INTP" />
        <img src="/public/K철학관img/img_circle_mbti_infj.png" alt="INFJ" />
        <img src="/public/K철학관img/img_circle_mbti_infp.png" alt="INFP" />
        <img src="/public/K철학관img/img_circle_mbti_istj.png" alt="TSTJ" />
        <img src="/public/K철학관img/img_circle_mbti_istp.png" alt="ISTP" />
        <img src="/public/K철학관img/img_circle_mbti_isfj.png" alt="ISFJ" />
        <img src="/public/K철학관img/img_circle_mbti_isfp.png" alt="ISFP" />
      </div>
      <ul>{mbtiFortuneMessages}</ul>
    </div>
  );
};

export default TextImage;
