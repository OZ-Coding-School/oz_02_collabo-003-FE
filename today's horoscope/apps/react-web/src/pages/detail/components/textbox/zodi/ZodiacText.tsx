import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import Share from '../../kakao/Kakao';
import Styles from './ZodiacText.module.scss';
import { IoChevronBack } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import APIS from '../../../../../services/api';
import QUERY_KEYS from '../../../../../services/queryKeys';

interface ZodiacFortunes {
  msg_id: number;
  luck_date: string;
  category: string;
  attribute1: string;
  attribute2: string;
  luck_msg: string;
  gpt_id: number;
}

const TextImage: React.FC = () => {
  const [today, setToday] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { zodiacData } = location.state || {};

  const { zodiac } = useParams();
  const zodiacId = zodiac?.replace('띠', '');

  const { data: zodiacDetailData } = useQuery({
    queryKey: QUERY_KEYS.ZODIAC,
    queryFn: () => APIS.getZodiacDataAPI(zodiacId),
  });

  function movehome() {
    navigate(-1);
  }

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const dayOfWeek = currentDate.getDay();
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayName = daysOfWeek[dayOfWeek];

    const formattedDate = `${year}년 ${month}월 ${day}일 ${dayName}요일`;

    setToday(formattedDate);
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.head}>
        <div className={Styles.headicon}>
          <IoChevronBack onClick={movehome} className={Styles.Back} />
          <img src="/K_img/K-logo-icon/text_logo_b.png" alt="로고" className={Styles.LogoImg} />
          <Share />
        </div>
        <div className={Styles.title}>
          <div>{JSON.stringify(zodiacData)}</div>
          <h1 className={Styles.headtitle}>{zodiac} 오늘의 운세</h1>
          <p className={Styles.date}>{today}</p>
        </div>
      </div>
      <div className={Styles.body}>
        <img src="/K_img/img_circle_zodiac_rabbit.png" alt="rabbit" className={Styles.zodiacImages} />
        <div>
          {zodiacDetailData?.map((individualZodiac: ZodiacFortunes) => (
            <div className={Styles.point} key={individualZodiac.msg_id}>
              <div className={Styles.text}>{individualZodiac.attribute2}년생</div>
              <div className={Styles.fortune}>{individualZodiac.luck_msg}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextImage;
