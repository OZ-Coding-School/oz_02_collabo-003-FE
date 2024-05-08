import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../modal.module.scss';
import React from 'react';
import './MbtiSwiper.scss';
import { useState } from 'react';

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

  function handleSwipe() {
    const activeSlideContent = document.querySelector('.swiper-slide-active')?.textContent;

    if (activeSlideContent) {
      setMbtiText(activeSlideContent);
    }
    console.log(mbtiText);
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
        <div className={styles.swiperContainer}>
          <Swiper
            slidesPerView={5}
            loop={true}
            direction="vertical"
            centeredSlides={true}
            className={styles.swiperWrapper}
            onSlideChange={handleSwipe}>
            {MBTIList.map((content, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
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
