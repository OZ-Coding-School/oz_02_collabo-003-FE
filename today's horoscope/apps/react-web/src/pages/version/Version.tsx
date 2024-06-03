import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Styles from './Version.module.scss';

const Version: React.FC = () => {
  // 현재 앱 버전 상태
  const [appVersion] = useState<string>('2.1.5');
  // 푸시 알림 설정 상태
  const [pushNotification, setPushNotification] = useState<boolean>(false);
  // 푸시 알림 설정 토글 함수
  const togglePushNotification = () => {
    setPushNotification(prevState => !prevState);
  };

  // 페이지 이동 네비게이트 훅
  const navigate = useNavigate();
  const moveHome = () => {
    navigate('/');
  };

  return (
    <div className={Styles.versionContainer}>
      <div className={Styles.statusBar}></div>
      <div className={Styles.versionHeader}>
        <IoChevronBack onClick={moveHome} className={Styles.back} />
        <h1 className={Styles.title}>설정</h1>
      </div>
      <div className={Styles.versionContents}>
        <div className={Styles.versionTitle}>
          <h1 className={Styles.textTitle}>버전 관리</h1>
          <span className={Styles.textSub}>현재 버전 {appVersion}</span>
        </div>
      </div>
      <div className={Styles.pushContents}>
        <label className={Styles.switch}>
          <h1 className={Styles.textTitle}>푸시 알림 설정</h1>
          <span className={Styles.textSub}>푸시 알림을 켜거나 끌 수 있습니다.</span>
        </label>
        <div className={Styles.wrapper}>
          <input
            type="checkbox"
            id="switch"
            checked={pushNotification}
            onChange={togglePushNotification}
            className={Styles.toggleSwitch}
          />
          <label htmlFor="switch" className={Styles.onfBtn}></label>
        </div>
      </div>
    </div>
  );
};

export default Version;
