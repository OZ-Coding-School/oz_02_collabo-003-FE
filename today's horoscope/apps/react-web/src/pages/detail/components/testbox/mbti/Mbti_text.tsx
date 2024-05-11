import React, { useState, useEffect } from 'react';
import Styles from './Mbti_text.module.scss';

import ImgENFJ from './img/img_circle_mbti_enfj.png';
import ImgENFP from './img/img_circle_mbti_enfp.png';
import ImgENTJ from './img/img_circle_mbti_entj.png';
import ImgENTP from './img/img_circle_mbti_entp.png';
import ImgESFJ from './img/img_circle_mbti_esfj.png';
import ImgESFP from './img/img_circle_mbti_esfp.png';
import ImgESTJ from './img/img_circle_mbti_estj.png';
import ImgESTP from './img/img_circle_mbti_estp.png';
import ImgINFJ from './img/img_circle_mbti_infj.png';
import ImgINFP from './img/img_circle_mbti_infp.png';
import ImgINTJ from './img/img_circle_mbti_intj.png';
import ImgINTP from './img/img_circle_mbti_intp.png';
import ImgISFJ from './img/img_circle_mbti_isfj.png';
import ImgISFP from './img/img_circle_mbti_isfp.png';
import ImgISTJ from './img/img_circle_mbti_istj.png';
import ImgISTP from './img/img_circle_mbti_istp.png';

interface ApiResponse {
  id: number;
  name: string;
  // 다른 필드들도 있을 수 있습니다.
}

const ScrollingContainer: React.FC = () => {
  const [apiData, setApiData] = useState<ApiResponse[] | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const jsonData = await response.json();
      setApiData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="scrolling-container">
      <div className={Styles.mbtiContent}>
        <img src={ImgENFJ} alt="ENFJ" />
        <img src={ImgENFP} alt="ENFP" />
        <img src={ImgENTJ} alt="ENTJ" />
        <img src={ImgENTP} alt="ENTP" />
        <img src={ImgESFJ} alt="ESFJ" />
        <img src={ImgESFP} alt="ESFP" />
        <img src={ImgESTJ} alt="ESTJ" />
        <img src={ImgESTP} alt="ESTP" />
        <img src={ImgINFJ} alt="INFJ" />
        <img src={ImgINFP} alt="INFP" />
        <img src={ImgINTJ} alt="INTJ" />
        <img src={ImgINTP} alt="INTP" />
        <img src={ImgISFJ} alt="ISFJ" />
        <img src={ImgISFP} alt="ISFP" />
        <img src={ImgISTJ} alt="ISTJ" />
        <img src={ImgISTP} alt="ISTP" />
      </div>
      <div className="data-container">
        {apiData ? (
          <ul>
            {apiData.map((item: ApiResponse, index: number) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ScrollingContainer;
