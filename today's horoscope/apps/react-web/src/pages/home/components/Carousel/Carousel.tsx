import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from 'swiper';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

interface swiperProps {
  activeSlide: string;
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Slides = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
const imgList = ['today', 'zodiac', 'star', 'mbti'];
function Carousel({ activeSlide, setActiveSlide }: swiperProps) {
  const navigate = useNavigate();

  function MoveRoute(value: string) {
    return () => {
      if (localStorage.length === 0) {
        navigate('/login');
      } else if (value === 'mbti') {
        navigate('/detail-mbti');
      } else if (value === 'zodiac') {
        navigate('/detail-zodiac/main');
      } else if (value === 'star') {
        navigate('/detail-star');
      }
    };
  }

  function handleSlwiper(swiper: swiper) {
    const activesilde = swiper.slides[swiper.activeIndex];
    const activeSlideId = activesilde.id;
    const activeIdcontent = activeSlideId.split('-')[1];

    setActiveSlide(activeIdcontent);
    console.log(activeSlide);
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
        {Slides.map((SlideContent, index) => (
          <SwiperSlide id={`slide-${imgList[index]}`} key={index} className="swiper-slide">
            <CarouselBanner imgitem={imgList[index]} title={SlideContent} content="content" />
            <button
              onClick={MoveRoute(imgList[index])}
              className={imgList[index] === 'today' ? 'contentsDetail' : 'contentsDetail activeContentDetail'}>
              운세
              <br />
              더보기
              <br />
              <IoIosArrowDown className="detailIcon" size={30} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
