import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface swiperProps {
  activeSlide: string;
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Slides = ['오늘의 한마디', '오늘의 운세', '별자리 운세', 'MBTI 운세'];
const imgList = ['today', 'zodiac', 'star', 'mbti'];
function Carousel({ activeSlide, setActiveSlide }: swiperProps) {
  const navigate = useNavigate();

  function MoveLogin() {
    if (localStorage.length === 0) navigate('/login');
    else navigate('/detail');
  }

  function handleSlwiper(swiper: any) {
    const activesilde = swiper.slides[swiper.activeIndex];
    const activeSlideId = activesilde.id;
    const activeIdcontent = activeSlideId.split('-')[1];

    setActiveSlide(activeIdcontent);
    console.log(activeSlide);
  }

  return (
    <div className="swiper-container carousel">
      <Swiper
        spaceBetween={-150}
        loop={true}
        effect={'coverflow'}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 900,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        onSlideChange={handleSlwiper}
        className="swiper-wrapper">
        {Slides.map((SlideContent, index) => (
          <SwiperSlide id={`slide-${imgList[index]}`} key={index} className="swiper-slide">
            <CarouselBanner imgitem={imgList[index]} title={SlideContent} content="content" />
            {imgList[index] === 'today' ? null : (
              <button onClick={MoveLogin} className="contentsDetail">
                운세
                <br />
                더보기
                <br />
                <MdKeyboardArrowDown size={30} />
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
