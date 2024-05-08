import { useEffect, useState } from 'react';
import styles from './CarouselBanner.module.scss';

interface carouselContents {
  title: string;
  content: string;
  imgitem: string;
}

const zodiacList = [
  'monkey',
  'rooster',
  'dog',
  'pig',
  'mouse',
  'cow',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
];

function CarouselBanner({ title, content, imgitem }: carouselContents) {
  const [inputData, setInputData] = useState({
    name: '',
    birth: '',
    mbti: '',
  });
  const [inputItem, setInputItem] = useState('');
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setInputData(JSON.parse(storedData));
    }

    if (localStorage.length === 0) setInputItem('default');
    if (imgitem === 'mbti') setInputItem(inputData.mbti);
    if (imgitem === 'zodiac') {
      const birthData = inputData.birth;
      const birthYear = birthData.split('.')[0];
      const zodiacIndex = parseInt(birthYear) % 12;
      setInputItem(zodiacList[zodiacIndex]);
    }
    if (imgitem === 'star') {
      const birthData = inputData.birth;
      const birthMonth = birthData.split('.')[1];
      const month = parseInt(birthMonth);
      const birthDay = birthData.split('.')[2];
      const day = parseInt(birthDay);
      parseInt(birthDay);
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        setInputItem('aries');
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        setInputItem('taurus');
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        setInputItem('gemini');
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        setInputItem('cancer');
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        setInputItem('leo');
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        setInputItem('virgo');
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        setInputItem('libra');
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        setInputItem('scorpio');
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        setInputItem('sagittarius');
      } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        setInputItem('capricorn');
      } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        setInputItem('aquarius');
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        setInputItem('pisces');
      } else setInputItem('default');
    } else setInputItem('default');
  }, [imgitem, inputData.birth, inputData.mbti]);

  return (
    <div className={styles.carouselBanner}>
      <img src={`public/K철학관img/섬/img_island_${imgitem}_${inputItem}.png`} className={styles.carouselImage} />
      <div className={styles.carouselContents}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}

export default CarouselBanner;
