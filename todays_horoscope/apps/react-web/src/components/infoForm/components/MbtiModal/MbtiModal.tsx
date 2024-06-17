import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import styles from '../modal.module.scss';
import React, { useEffect } from 'react';
import './MbtiModal.scss';
import { useState } from 'react';
import { UserData } from '../../InfoForm';
import { IoClose } from 'react-icons/io5';

interface MbtiProps {
  clickMbtiModal: () => void;
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

function MbtiModal({ clickMbtiModal, userData, setUserData }: MbtiProps) {
  const [mbtiText, setMbtiText] = useState<string>('');
  const [userMBTI, setUserMBTI] = useState<number>(0);

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
    clickMbtiModal();
  }

  useEffect(() => {
    //유저 mbti정보 초기값으로 설정
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const objectStoredData = JSON.parse(storedData);
      const mbtiIndex = MBTIList.indexOf(objectStoredData.mbti);
      setUserMBTI(mbtiIndex);
    } else {
      setUserMBTI(0);
    }
  }, []);

  return (
    <div>
      <div className={styles.modal} onClick={clickMbtiModal}></div>
      <div className={styles.modalMain}>
        <div className={styles.activeBack}></div>
        <IoClose className={styles.closeIcon} onClick={clickMbtiModal} />
        <div className={styles.modalHeader}>MBTI</div>
        <div className="swiper-container mbtiModal">
          <Swiper
            slidesPerView={5}
            loop={true}
            direction="vertical"
            centeredSlides={true}
            speed={500}
            className="swiper-wrapper"
            key={userMBTI}
            initialSlide={userMBTI}
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
