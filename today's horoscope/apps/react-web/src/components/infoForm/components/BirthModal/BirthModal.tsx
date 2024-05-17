import styles from '../modal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import { useEffect, useState } from 'react';
import { UserData } from '../../InfoForm';
import './BirthModal.scss';

interface BirthProps {
  ClickBirthModal: () => void;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const yearList = Array.from({ length: 48 }, (_, index) => 2007 - index);
const monthList = Array.from({ length: 12 }, (_, index) => index + 1);
const dayList = Array.from({ length: 31 }, (_, index) => index + 1);

function BirthModal({ ClickBirthModal, userData, setUserData }: BirthProps) {
  const [birthText, setBirthText] = useState('');
  const [activeYear, setActiveYear] = useState('');
  const [activeMonth, setActiveMonth] = useState('');
  const [activeDay, setActiveDay] = useState('');

  function handleSwiper(swiper: swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeContent: string | null = activeSlide.textContent;
    const swiperId = swiper.el.id;

    let replaceContent: string | null = activeContent;
    if (activeContent !== null) {
      if (swiperId === 'yearSwiper') {
        replaceContent = activeContent.replace('년', '');
        setActiveYear(replaceContent);
      } else if (swiperId === 'monthSwiper') {
        replaceContent = activeContent.replace('월', '');
        setActiveMonth(replaceContent);
      } else if (swiperId === 'daySwiper') {
        replaceContent = activeContent.replace('일', '');
        setActiveDay(replaceContent);
      }
    }
  }

  function handleClick() {
    setUserData({
      ...userData,
      birth: birthText,
    });
    ClickBirthModal();
  }

  useEffect(() => {
    const newBirthText = `${activeYear}-${activeMonth}-${activeDay}`;
    setBirthText(newBirthText);
  }, [activeYear, activeMonth, activeDay]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>생년월일</div>
        <div className="swiper-container birthModal">
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            className="swiper-wrapper"
            id="yearSwiper"
            onSlideChange={handleSwiper}>
            {yearList.map((content, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                {content}년
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            className="swiper-wrapper"
            id="monthSwiper"
            onSlideChange={handleSwiper}>
            {monthList.map((content, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                {content}월
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            className="swiper-wrapper"
            id="daySwiper"
            onSlideChange={handleSwiper}>
            {dayList.map((content, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                {content}일
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="active-swiper"></div>
        </div>
        <button className={styles.button} onClick={handleClick}>
          적용하기
        </button>
      </div>
    </div>
  );
}

export default BirthModal;
