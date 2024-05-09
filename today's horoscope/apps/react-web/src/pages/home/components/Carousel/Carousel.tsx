// text
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Carousel() {
  const Slides = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
  const imgList = ['today', 'zodiac', 'star', 'mbti'];
  const navigate = useNavigate();

  function MoveLogin() {
    if (localStorage.length === 0) navigate('/login');
    else navigate('/detail');
  }

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={-150}
        loop={true}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 800,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="swiper-wrapper">
        {Slides.map((SlideContent, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <CarouselBanner imgitem={imgList[index]} title={SlideContent} content="content" />
            <button onClick={MoveLogin} className="contentsDetail">
              운세
              <br />
              더보기
              <br />
              <MdKeyboardArrowDown size={30} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
