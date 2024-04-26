import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import DetailButton from '../DetailButton/DetailButton';

function Carousel() {
  function ChangeBackgroundColor() {
    const backgroundColor = [
      'linear-gradient(45deg, #F4CFD8, #94E4FD)',
      'linear-gradient(45deg, #8CBAFF, #D2FCF9)',
      'linear-gradient(45deg, #B6EE94, #FCF3D2)',
      'linear-gradient(45deg, #C6B2FE, #D2F9FC)',
    ];
    // const index = swiper.activeIndex;
    const index = 0;
    const mainElement: HTMLElement | null = document.querySelector('.main');
    if (mainElement) {
      mainElement.style.backgroundColor = backgroundColor[index + 1];
    }
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
        onSlideChange={ChangeBackgroundColor}
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
