import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import DetailButton from '../DetailButton/DetailButton';

function Carousel() {
  const Slices = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
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
        {Slices.map((SliceContent: string, index: number) => (
          <SwiperSlide key={SliceContent} className="swiper-slide">
            <CarouselBanner title={Slices[index]} content="content" />
            <DetailButton title="운세" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
