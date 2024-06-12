import CarouselBanner from '../CarouselBanner/CarouselBanner';
import './Csrousel.scss';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useEffect, useState } from 'react';

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
      localStorage.setItem('activeBanner', value);
    };
  }

  useEffect(() => {
    const activeBanner = localStorage.getItem('activeBanner');
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
  }, [setActiveSlide]);

  //현재 배너의 인덱스 저장하고 배경색 변경을 위한 배너값 저장
  const handleClickBanner = (index: number) => {
    setSelectedItem(index);
    setActiveSlide(imgValue[index]);
  };

  return (
    <div className="slider-container">
      <ul className="slider-items">
        {slidesValue.map((SlideContent, index) => {
          let offset = index - selectedItem;
          if (offset < 0) offset += Slides.length;
          console.log(imgValue[index]);
          return (
            <li
              id={`slide-${imgValue[index]}`}
              key={index}
              onClick={() => handleClickBanner(index)}
              className={`item-${offset + 1}`}>
              <CarouselBanner imgitem={imgValue[index]} user={userValue[index]} title={SlideContent} />
              <button
                onClick={moveDetail(imgValue[index])}
                className={
                  localStorage.userData !== undefined && imgValue[index] === 'today'
                    ? 'contentsDetail'
                    : 'contentsDetail activeContentDetail'
                }>
                {localStorage.userData === undefined ? (
                  <div>
                    오늘의 운세
                    <br />
                    더보기
                    <br />
                  </div>
                ) : (
                  <div>
                    운세
                    <br />
                    더보기
                    <br />
                  </div>
                )}
                <IoIosArrowDown className="detailIcon" size={30} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Carousel;
