import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Styles from './Version.module.scss';

const Version: React.FC = () => {
  const [appVersion, setAppVersion] = useState<string>('2.1.5');
  const [showUpdatePopup, setShowUpdatePopup] = useState<boolean>(false);
  const [pushNotification, setPushNotification] = useState<boolean>(false);

  const togglePushNotification = () => {
    setPushNotification(prevState => !prevState);
  };

  const updateAppVersion = (newVersion: string) => {
    setAppVersion(newVersion);
  };

  const handleVersionClick = () => {
    updateAppVersion('');
    setShowUpdatePopup(true);
  };

  const handlePushNotificationChange = () => {
    togglePushNotification();
  };

  const navigate = useNavigate();
  const moveHome = () => {
    navigate('/');
  };

  const handleUpdateConfirm = () => {
    setShowUpdatePopup(false);
  };

  const handleUpdateCancel = () => {
    setShowUpdatePopup(false);
  };

  return (
    <div>
      <div>
        <IoChevronBack onClick={moveHome} className={Styles.back} />
        <h1 className={Styles.title}>설정</h1>
      </div>

      <div className={Styles.versionContainer}>
        <div className={Styles.versionTitle}>
          <h1 className={Styles.now}>버전 관리</h1>
          <span className={Styles.nowversion}>현재 버전 {appVersion}</span>
        </div>
        <button className={Styles.update} onClick={handleVersionClick}>
          업데이트
        </button>
      </div>
      <div className={Styles.underline}></div>

      <div className={Styles.notificationContainer}>
        <label className={Styles.switch}>
          <h1 className={Styles.pushnoti}>푸시알람설정</h1>
          <p className={Styles.noti}> 푸시알람을 ON/OFF 하실 수 있습니다.</p>
          <input
            type="checkbox"
            id="push-notification-toggle"
            checked={pushNotification}
            onChange={handlePushNotificationChange}
          />
          <span className={Styles.slider}></span>
        </label>
      </div>

      {showUpdatePopup && (
        <div className={Styles.popup}>
          <h2>새로운 버전이 있습니다!</h2>
          <p>업데이트를 진행하시겠습니까?</p>
          <button onClick={handleUpdateConfirm}>확인</button>
          <button onClick={handleUpdateCancel}>취소</button>
        </div>
      )}
    </div>
  );
};

export default Version;
