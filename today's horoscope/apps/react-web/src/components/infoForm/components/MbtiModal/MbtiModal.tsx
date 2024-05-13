import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import styles from '../modal.module.scss';
import React from 'react';
import './MbtiModal.scss';
import { useState } from 'react';
import { UserData } from '../../InfoForm';

interface MbtiProps {
  ClickMbtiModal: () => void;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const MBTIList = [
  'MBTI모름',
  'ISTJ',
  'ISTP',
  'ISFJ',
  'ISFP',
  'INTJ',
  'INTP',
  'INFJ',
  'INFP',
  'ESTJ',
  'ESTP',
  'ESFJ',
  'ESFP',
  'ENTJ',
  'ENTP',
  'ENFJ',
  'ENFP',
];

function MbtiModal({ ClickMbtiModal, userData, setUserData }: MbtiProps) {
  const [mbtiText, setMbtiText] = useState('');

  function handleSwiper(swiper: swiper) {
    const activesilde = swiper.slides[swiper.activeIndex];
    const activeSlideContent: string | null = activesilde.textContent;

    if (activeSlideContent !== null) {
      setMbtiText(activeSlideContent);
      console.log(mbtiText);
    }
  }

  function handleClick() {
    setUserData({
      ...userData,
      mbti: mbtiText,
    });
    ClickMbtiModal();
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>MBTI</div>
        <div className="swiper-container mbtiModal">
          <Swiper
            slidesPerView={5}
            loop={true}
            direction="vertical"
            centeredSlides={true}
            className="swiper-wrapper"
            onSlideChange={handleSwiper}>
            {MBTIList.map((content, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                {content}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={handleClick} className={styles.button}>
          적용하기
        </button>
      </div>
    </div>
  );
}

export default MbtiModal;
