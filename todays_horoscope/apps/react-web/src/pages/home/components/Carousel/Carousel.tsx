import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import TodayButton from './components/TodayButton';
import Button from './components/Button';

interface swiperProps {
  setActiveSlide: React.Dispatch<React.SetStateAction<string>>;
}

const Slides: string[] = ['오늘의 한마디', '띠별 운세', '별자리 운세', 'MBTI 운세'];
const user: string[] = ['', '생년월일', '생년월일', 'MBTI'];
const imgList: string[] = ['today', 'zodiac', 'star', 'mbti'];

function Carousel({ setActiveSlide }: swiperProps) {
  const [slidesValue, setSlidesValue] = useState<string[]>(Slides);
  const [imgValue, setImgValue] = useState<string[]>(imgList);
  const [userValue, setUserValue] = useState<string[]>(user);
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [styleValue, setStyleValue] = useState<boolean>(false);
  const [isThrottled, setIsThrottled] = useState<boolean>(false);
  const [drag, setDrag] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  function moveDetail(value: string) {
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
      sessionStorage.setItem('activeBanner', value);
    };
  }

  useEffect(() => {
    const activeBanner = sessionStorage.getItem('activeBanner');
    if (activeBanner !== null) {
      const activeIndex = imgList.indexOf(activeBanner);
      //배경색 변경을 위한 배너값 저장
      setActiveSlide(activeBanner);
      //더보기에서 나온 후 배너 배열 변경
      if (activeIndex !== -1) {
        const preList = Slides.slice(activeIndex);
        const nextList = Slides.slice(0, activeIndex);
        const slicedList = preList.concat(nextList);

        const preImgList = imgList.slice(activeIndex);
        const nextImgList = imgList.slice(0, activeIndex);
        const slicedImgList = preImgList.concat(nextImgList);

        const preUserList = user.slice(activeIndex);
        const nextUserList = user.slice(0, activeIndex);
        const slicedUserList = preUserList.concat(nextUserList);

        setSlidesValue(slicedList);
        setImgValue(slicedImgList);
        setUserValue(slicedUserList);
      } else {
        setSlidesValue(Slides);
      }
    }
    
    setStyleValue(true);
  }, [setActiveSlide]);


  //왼쪽으로 드래그 후 z-index 값 변경 함수
  function leftStyles() {
    const item1 = document.querySelector('.item-1') as HTMLElement;
    const item2 = document.querySelector('.item-2') as HTMLElement;
    const item3 = document.querySelector('.item-3') as HTMLElement;
    const item4 = document.querySelector('.item-4') as HTMLElement;
  
    if (item1) {
      item1.style.zIndex = '3';
    }
    if (item2) {
      item2.style.zIndex = '1';
    }
    if (item3) {
      item3.style.zIndex = '0';
    }
    if (item4) {
      item4.style.zIndex = '2';
    }
  };

  //오른쪽으로 드래그 후 z-index 값 변경 함수
  function rightStyles() {
    const item1 = document.querySelector('.item-1') as HTMLElement;
    const item2 = document.querySelector('.item-2') as HTMLElement;
    const item3 = document.querySelector('.item-3') as HTMLElement;
    const item4 = document.querySelector('.item-4') as HTMLElement;
  
    if (item1) {
      item1.style.zIndex = '3';
    }
    if (item2) {
      item2.style.zIndex = '2';
    }
    if (item3) {
      item3.style.zIndex = '0';
    }
    if (item4) {
      item4.style.zIndex = '1';
    }
  };

  useEffect(() => {
    if (drag < 0) {
      leftStyles();
    } else if (drag > 0) {
      rightStyles();
    }
  }, [drag]);

  //드래그 이벤트 함수
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }: any) => {
      if (active) {
        setDrag(xDir);
      } else {
        if(drag < 0) leftStyles();
        else if (drag > 0) rightStyles();
      }

      if (isThrottled) return;

      // 현재 배너의 인덱스 저장하고 배경색 변경을 위한 배너값 저장
      if (active && Math.abs(mx) > 50) {
        setSelectedItem(prev => {
          const newIndex = (prev + (xDir > 0 ? -1 : 1) + Slides.length) % Slides.length;
          if (newIndex < 0) setActiveSlide(imgValue[3]);
          else setTimeout(() => setActiveSlide(imgValue[newIndex]), 0);
          return newIndex;
        })
        cancel();
        setIsThrottled(true);

        // 0.5초 후에 다시 활성화
        setTimeout(() => {
          setIsThrottled(false);
        }, 500);
      }
      //첫스와이프 기록 남기기
      if (localStorage.userData !== undefined && localStorage.todayMessage === undefined)
        localStorage.setItem('todayMessage', 'true');
    }, { filterTaps: true, pointer: { touch: true }});


  return (
    <div className="slider-container">
      <div className="carousel-slider" {...bind()} ref={containerRef}>
        <ul className="slider-items">
          {slidesValue.map((SlideContent, index) => {
            let offset = index - selectedItem;
            if (offset < 0) offset += Slides.length;
            return (
              <li id={`slide-${imgValue[index]}`} key={index} className={`item-${offset + 1}`}>
                <CarouselBanner imgitem={imgValue[index]} user={userValue[index]} title={SlideContent} />
                {localStorage.userData !== undefined && imgValue[index] === 'today' ? (
                  <button
                    className={
                      localStorage.todayMessage === undefined
                        ? 'todayContentsDetail activeContentDetail'
                        : 'todayContentsDetail'
                    }>
                    <TodayButton />
                  </button>
                ) : (
                  <button
                    onClick={moveDetail(imgValue[index])}
                    className={styleValue ? 'contentsDetail activeContentDetail' : 'contentsDetail'}>
                    {localStorage.userData === undefined ? <Button title="오늘의 운세" /> : <Button title="운세" />}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
