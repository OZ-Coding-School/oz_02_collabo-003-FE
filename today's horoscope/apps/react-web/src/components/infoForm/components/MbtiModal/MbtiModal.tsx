import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import styles from '../modal.module.scss';
import React, { useEffect } from 'react';
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
    if (activesilde) {
      const activeSlideContent: string | null = activesilde.textContent;
      if (activeSlideContent !== null) {
        setMbtiText(activeSlideContent);
      }
    }
  }

  function handleClick() {
    setUserData({
      ...userData,
      mbti: mbtiText,
    });
    ClickMbtiModal();
  }
  // const storedData = localStorage.getItem('userData');
  // const objectStoredData = storedData ? JSON.parse(storedData) : null;

  const [sliceMBTIList, setSliceMBTIList] = useState<string[]>([]);
  useEffect(() => {
    if (localStorage.length !== 0) {
      const storedData = localStorage.getItem('userData');
      const objectStoredData = storedData ? JSON.parse(storedData) : null;
      const startIndex = MBTIList.indexOf(objectStoredData.mbti);
      const preSlicedList = MBTIList.slice(0, startIndex);
      const nextSlicedList = MBTIList.slice(startIndex);
      const slicedList = nextSlicedList.concat(preSlicedList);
      setSliceMBTIList(slicedList);
    } else {
      setSliceMBTIList(MBTIList);
    }
  }, []);

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
            {sliceMBTIList.map((content, index) => (
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
