import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import DetailButton from '../DetailButton/DetailButton';

function Carousel() {
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
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="오늘의 한마디" content="content" />
          <DetailButton title="오늘의 운세" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="오늘의 운세" content="content" />
          <DetailButton title="운세" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="별자리 운세" content="content" />
          <DetailButton title="운세" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <CarouselBanner title="MBTI 운세" content="content" />
          <DetailButton title="운세" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
