import styles from '../modal.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import { useEffect, useState } from 'react';
import { UserData } from '../../InfoForm';
import './BirthModal.scss';

interface BirthProps {
  clickBirthModal: () => void;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const yearList = Array.from({ length: 48 }, (_, index) => 2007 - index);
const monthList = Array.from({ length: 12 }, (_, index) => index + 1);
const dayList = Array.from({ length: 31 }, (_, index) => index + 1);

function BirthModal({ clickBirthModal, userData, setUserData }: BirthProps) {
  const [birthText, setBirthText] = useState<string>('');
  const [activeYear, setActiveYear] = useState<string>('2007');
  const [activeMonth, setActiveMonth] = useState<string>('1');
  const [activeDay, setActiveDay] = useState<string>('1');
  const [userBirth, setUserBirth] = useState<string>('');
  const [userYear, setUserYear] = useState<number>(0);
  const [userMonth, setUserMonth] = useState<number>(0);
  const [userDay, setUserDay] = useState<number>(0);

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
    clickBirthModal();
  }

  useEffect(() => {
    // 유저 정보로 스와이퍼 초기값 변경
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const objectStoredData = JSON.parse(storedData);
      setUserBirth(objectStoredData.birth);
      const userYearString = userBirth.split('-')[0];
      const userYear = parseInt(userYearString);
      const yearIndex = yearList.indexOf(userYear);
      setUserYear(yearIndex >= 0 ? yearIndex : 0);
      const userMonthString = userBirth.split('-')[1];
      const userMonth = parseInt(userMonthString);
      const monthIndex = monthList.indexOf(userMonth);
      setUserMonth(monthIndex >= 0 ? monthIndex : 0);
      const userDayString = userBirth.split('-')[2];
      const userDay = parseInt(userDayString);
      const dayIndex = dayList.indexOf(userDay);
      setUserDay(dayIndex >= 0 ? dayIndex : 0);
    }
    const newBirthText = `${activeYear}-${activeMonth}-${activeDay}`;
    setBirthText(newBirthText);
  }, [userBirth, activeYear, activeMonth, activeDay]);

  console.log(userYear);
  console.log(userMonth);
  console.log(userDay);

  return (
    <div>
      <div className={styles.modal} onClick={clickBirthModal}></div>
      <div className={styles.modalMain}>
        <div className={styles.activeBack}></div>
        <div className={styles.modalHeader}>생년월일</div>
        <div className="swiper-container birthModal">
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            speed={500}
            className="swiper-wrapper"
            id="yearSwiper"
            initialSlide={userYear}
            key={`yearSwiper-${userYear}`}
            onSlideChange={handleSwiper}>
            {yearList.map((content, index) => (
              <SwiperSlide key={`year-${index}`} className="swiper-slide">
                {content}년
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            speed={500}
            className="swiper-wrapper"
            id="monthSwiper"
            initialSlide={userMonth}
            key={`monthSwiper-${userMonth}`}
            onSlideChange={handleSwiper}>
            {monthList.map((content, index) => (
              <SwiperSlide key={`month-${index}`} className="swiper-slide">
                {content}월
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            slidesPerView={5}
            direction="vertical"
            centeredSlides={true}
            speed={500}
            className="swiper-wrapper"
            id="daySwiper"
            initialSlide={userDay}
            key={`daySwiper-${userDay}`}
            onSlideChange={handleSwiper}>
            {dayList.map((content, index) => (
              <SwiperSlide key={`day-${index}`} className="swiper-slide">
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
