import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Carousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Carousel() {
  const Slides = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={-200}
        loop={true}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="swiper-wrapper">
        {Slides.map((SlideContent: string, index: number) => (
          <SwiperSlide key={index} className="swiper-slide">
            <CarouselBanner title={SlideContent} content="content" />
            <button className="contentsDetail">
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
