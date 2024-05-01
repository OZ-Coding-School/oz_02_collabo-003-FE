import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './MbtiModal.module.scss';
import './MbtiSwiper.scss';

function BirthModal() {
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
            className={styles.swiperWrapper}>
            {MBTIList.map((content, index) => (
              <SwiperSlide key={index} className={styles.swiperSlide}>
                {content}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className={styles.button}>적용하기</button>
      </div>
    </div>
  );
}

export default BirthModal;
