import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Styles from './Version.module.scss';

const Version: React.FC = () => {
  const [appVersion, setAppVersion] = useState<string>('2.1.5');
  const [showUpdatePopup, setShowUpdatePopup] = useState<boolean>(false); // 업데이트 팝업 표시 상태
  const [pushNotification, setPushNotification] = useState<boolean>(false); // 푸시 알림 설정 상태

  const togglePushNotification = () => {
    setPushNotification(prevState => !prevState);
  };

  const updateAppVersion = (newVersion: string) => {
    setAppVersion(newVersion);
  };

  const handleVersionClick = () => {
    updateAppVersion('');
    setShowUpdatePopup(true); // 업데이트 버튼을 클릭하면 팝업을 표시합니다.
  };

  const handlePushNotificationChange = () => {
    togglePushNotification();
  };

  const navigate = useNavigate();
  const moveHome = () => {
    navigate('/');
  };

  const handleUpdateConfirm = () => {
    // 업데이트를 수행하는 로직을 추가합니다.
    // 팝업을 닫거나 다음 작업을 수행합니다.
    setShowUpdatePopup(false); // 업데이트가 완료되면 팝업을 닫습니다.
  };

  const handleUpdateCancel = () => {
    setShowUpdatePopup(false); // 업데이트를 취소하면 팝업을 닫습니다.
  };

  return (
    <div>
      <div>
        <IoChevronBack onClick={moveHome} className={Styles.back} />
        <h1 className={Styles.title}>설정</h1>
      </div>

      <div className={Styles['version-info']} onClick={handleVersionClick}>
        <div>
          <h1 className={Styles.now}>버전 관리</h1>
          <span>현재 버전:</span> {appVersion}
        </div>
        <button className={Styles.update} onClick={handleVersionClick}>
          업데이트
        </button>
      </div>
      <div className={Styles.underline}></div>
      <div className={Styles['push-noti']}>
        <label className={Styles.switch}>
          푸시알람설정
          <br />
          <p className={Styles.noti}> 푸시알람을 ON,OFF 하실 수 있습니다.</p>
          <input
            type="checkbox"
            id="push-notification-toggle"
            checked={pushNotification}
            onChange={handlePushNotificationChange}
          />
          <span className={Styles.slider}></span>
        </label>
      </div>
      {/* 업데이트 팝업 */}
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
