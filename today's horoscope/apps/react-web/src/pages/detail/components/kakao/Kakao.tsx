import React, { useEffect } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';
import Styles from './Kakao.module.scss';

declare global {
  interface Window {
    Kakao: any;
  }
}

const kakaoShare: React.FC = () => {
  const KAKAO_APP_KEY = 'c089c8172def97eb00c07217cae17495';

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_APP_KEY);
    }
  }, []);

  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '공유할 제목',
        description: '공유할 설명',
        imageUrl: '공유할 이미지 URL',
        link: {
          mobileWebUrl: '공유할 URL',
          webUrl: '공유할 URL',
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: '공유할 URL',
            webUrl: '공유할 URL',
          },
        },
      ],
    });
  };

  return <IoShareSocialOutline onClick={shareKakao} className={Styles.kakao} />;
};
export default kakaoShare;
