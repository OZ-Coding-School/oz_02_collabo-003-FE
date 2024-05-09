import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../modal.module.scss';
import './MbtiSwiper.scss';

interface MbtiProps {
  ClickMbtiModal: () => void;
}
function MbtiModal({ ClickMbtiModal }: MbtiProps) {
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
        <button onClick={ClickMbtiModal} className={styles.button}>
          적용하기
        </button>
      </div>
    </div>
  );
}

export default MbtiModal;
