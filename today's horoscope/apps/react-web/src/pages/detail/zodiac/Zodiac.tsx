import React from 'react';
import Date from '../components/date/Date';
import Scroll from '../components/scroll/Scroll';
import Styles from './Zodiac.module.scss';

const Fortune: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.TextLogoImg}></div>
      <div className={Styles.StraImg}></div>
      <div className={Styles.title}>
        <h1>띠별</h1>
        <h1>오늘의 운세</h1>
      </div>
      <Date />
      <Scroll />
    </div>
  );
};
export default Fortune;
