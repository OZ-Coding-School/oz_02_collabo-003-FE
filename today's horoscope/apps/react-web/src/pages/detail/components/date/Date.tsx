import React, { useEffect, useState } from 'react';
import Styles from './Date.module.scss';

const MyComponent: React.FC = () => {
  const [today, setToday] = useState('');

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

  return <h1 className={Styles.oneDays}>{today}</h1>;
};

export default MyComponent;
