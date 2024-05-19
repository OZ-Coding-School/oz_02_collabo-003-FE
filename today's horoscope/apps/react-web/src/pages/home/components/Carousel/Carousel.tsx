import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useState } from 'react';

interface swiperProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Slides = ['오늘의 한마디', '띠별 운세', '별자리 운세', 'MBTI 운세'];
const user = ['', '생년월일', '생년월일', 'MBTI'];
const imgList = ['today', 'zodiac', 'star', 'mbti'];

function Carousel({ setActiveSlide }: swiperProps) {
  const [slidesValue, setSlidesValue] = useState<string[]>(Slides);
  const [imgValue, setImgValue] = useState<string[]>(imgList);
  const navigate = useNavigate();

  function MoveRoute(value: string) {
    return () => {
      if (localStorage.userData === undefined) {
        navigate('/login');
      } else if (value === 'mbti') {
        navigate('/detail-mbti');
      } else if (value === 'zodiac') {
        navigate('/detail-zodiac/main');
      } else if (value === 'star') {
        navigate('/detail-star');
      }
      localStorage.setItem('activeBanner', value);
    };
  }

  useEffect(() => {
    const activeBanner = localStorage.getItem('activeBanner');
    if (activeBanner !== null) {
      const activeIndex = imgList.indexOf(activeBanner);
      if (activeIndex !== -1) {
        const preList = Slides.slice(activeIndex);
        const nextList = Slides.slice(0, activeIndex);
        const slicedList = preList.concat(nextList);
        const preImgList = imgList.slice(activeIndex);
        const nextImgList = imgList.slice(0, activeIndex);
        const slicedImgList = preImgList.concat(nextImgList);
        setSlidesValue(slicedList);
        setImgValue(slicedImgList);
      } else {
        setSlidesValue(Slides);
      }
    }
  }, []);

  function handleSlwiper(swiper: swiper) {
    if (swiper && swiper.slides && swiper.slides.length > 0) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      if (activeSlide) {
        const activeSlideId = activeSlide.id;
        const activeIdContent = activeSlideId.split('-')[1];
        setActiveSlide(activeIdContent);
      }
    }
  }

  return (
    <div className="swiper-container carousel">
      <Swiper
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        onSlideChange={handleSlwiper}
        className="swiper-wrapper">
        {slidesValue.map((SlideContent, index) => (
          <SwiperSlide id={`slide-${imgValue[index]}`} key={index} className="swiper-slide">
            <CarouselBanner imgitem={imgValue[index]} user={user[index]} title={SlideContent} />
            <button
              onClick={MoveRoute(imgValue[index])}
              className={
                localStorage.userData !== undefined && imgValue[index] === 'today'
                  ? 'contentsDetail'
                  : 'contentsDetail activeContentDetail'
              }>
              {localStorage.userData === undefined ? (
                <div>
                  오늘의 운세
                  <br />
                  더보기
                  <br />
                </div>
              ) : (
                <div>
                  운세
                  <br />
                  더보기
                  <br />
                </div>
              )}
              <IoIosArrowDown className="detailIcon" size={30} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
