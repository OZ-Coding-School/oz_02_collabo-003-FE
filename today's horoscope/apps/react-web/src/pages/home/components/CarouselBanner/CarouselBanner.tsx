import { useEffect, useState } from 'react';
import styles from './CarouselBanner.module.scss';
import APIS from '../../../../services/api';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '../../../../services/queryKeys';
import dayjs from 'dayjs';

interface carouselContents {
  title: string;
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

function CarouselBanner({ title, imgitem }: carouselContents) {
  const [inputData, setInputData] = useState({
    name: '',
    birth: '',
    mbti: '',
  });
  const storedData = localStorage.getItem('userData');
  const objectStoredData = JSON.parse(storedData as string);
  const birth = dayjs(objectStoredData?.birth);
  const formattedBirth = birth.format('YYYYMMDD');

  const { data: userData } = useQuery({
    queryKey: QUERY_KEYS.USER_DATA,
    queryFn: () => APIS.getUserDataAPI(formattedBirth, objectStoredData?.mbti),
  });

  const [msg, setMsg] = useState('');
  const [inputItem, setInputItem] = useState('');
  useEffect(() => {
    if (storedData) {
      setInputData(JSON.parse(storedData));
    }
    if (localStorage.length === 0) setInputItem('default');
    else if (imgitem === 'mbti') {
      if (inputData.mbti === 'MBTI모름') {
        setInputItem('default');
      } else {
        const mbti = inputData.mbti;
        setInputItem(mbti.toLowerCase());
        setMsg(userData?.mbti_msg?.luck_msg);
      }
    } else if (imgitem === 'zodiac') {
      const birthData = inputData.birth;
      const birthYear = birthData.split('-')[0];
      const zodiacIndex = parseInt(birthYear) % 12;
      setInputItem(zodiacList[zodiacIndex]);
      setMsg(userData?.zodiac_msg?.luck_msg);
    } else if (imgitem === 'star') {
      const birthData = inputData.birth;
      const birthMonth = birthData.split('-')[1];
      const month = parseInt(birthMonth);
      const birthDay = birthData.split('-')[2];
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
      setMsg(userData?.star_msg?.luck_msg);
    } else {
      setInputItem('default');
      setMsg(userData?.today_msg?.luck_msg);
    }
  }, [imgitem, inputData.birth, inputData.mbti, storedData, userData]);

  return (
    <div className={styles.carouselBanner}>
      <img
        src={`/K_img/island/img_island_${imgitem}_${inputItem}.png`}
        alt={`${imgitem} image`}
        className={styles.carouselImage}
      />
      <div className={styles.carouselContents}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{msg}</div>
      </div>
    </div>
  );
}

export default CarouselBanner;
