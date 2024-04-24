import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

function Carousel() {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={-130}
        slidesPerView={3}
        slidesPerGroup={1}
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 800,
          modifier: 1,
        }}
        className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="오늘의 운세" content="content" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="MBTI 운세" content="content" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="별자리 운세" content="content" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="오늘의 한마디" content="content" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
