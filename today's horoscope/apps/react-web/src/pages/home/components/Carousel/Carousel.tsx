import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

function Carousel() {
<<<<<<< HEAD
  const Slides = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
  const imgList = ['today', 'zodiac', 'star', 'mbti'];
  const navigate = useNavigate();
  function MoveLogin() {
    if (localStorage.length === 0) navigate('/login');
    else navigate('/detail');
  }
=======
>>>>>>> parent of 79b7788 (Merge pull request #44 from OZ-Coding-School/dev)
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
<<<<<<< HEAD
        {Slides.map((SlideContent: string, index: number) => (
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
=======
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
>>>>>>> parent of 79b7788 (Merge pull request #44 from OZ-Coding-School/dev)
      </Swiper>
    </div>
  );
}

export default Carousel;
