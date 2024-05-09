import { useEffect, useState } from 'react';
import styles from './CarouselBanner.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface CarouselContents {
  title: string;
  content: string;
  imgitem: string;
}

const zodiacList = [
  'monkey', 'rooster', 'dog', 'pig', 'mouse', 'cow',
  'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep'
];

function CarouselBanner({ title, content, imgitem }: CarouselContents) {
  const [inputData, setInputData] = useState({ name: '', birth: '', mbti: '' });
  const [inputItem, setInputItem] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setInputData(JSON.parse(storedData));
    }

    if (imgitem === 'mbti') {
      setInputItem(inputData.mbti);
    } else if (imgitem === 'zodiac') {
      const birthYear = inputData.birth.split('.')[0];
      const zodiacIndex = parseInt(birthYear) % 12;
      setInputItem(zodiacList[zodiacIndex]);
    } else if (imgitem === 'star') {
      const [birthYear, birthMonth, birthDay] = inputData.birth.split('.');
      const month = parseInt(birthMonth);
      const day = parseInt(birthDay);
      // Zodiac sign determination logic based on birth month and day
      const signs = {
        aries: (month === 3 && day >= 21) || (month === 4 && day <= 19),
        taurus: (month === 4 && day >= 20) || (month === 5 && day <= 20),
        // Additional zodiac signs here...
      };
      // Find the first sign that matches
      setInputItem(Object.keys(signs).find(sign => signs[sign]) || 'default');
    } else {
      setInputItem('default');
    }
  }, [imgitem, inputData.birth, inputData.mbti]);

  return (
    <div className={styles.carouselBanner}>
      <img src={`public/K철학관img/섬/img_island_${imgitem}_${inputItem}.png`} className={styles.carouselImage} />
      <div className={styles.carouselContents}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{content}</div>
      </div>
      <button className={styles.contentsDetail}>
        운세
        <br />
        더보기
        <br />
        <MdKeyboardArrowDown size={30} />
      </button>
    </div>
  );
}

export default CarouselBanner;
