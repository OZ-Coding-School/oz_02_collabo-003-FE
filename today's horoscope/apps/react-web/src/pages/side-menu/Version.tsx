import React, { useState } from 'react';
import Styles from './';

const SideMenu: React.FC = () => {
  const [appVersion, setAppVersion] = useState<string>('1.0.0');
  const [pushNotification, setPushNotification] = useState<boolean>(true);

  const togglePushNotification = () => {
    setPushNotification(prevState => !prevState);
  };

  // 어플리케이션 버전 정보를 업데이트하는 함수
  const updateAppVersion = (newVersion: string) => {
    setAppVersion(newVersion);
  };

  // 예시로 버전 정보를 클릭하면 새로운 버전으로 업데이트하는 버튼을 추가합니다.
  const handleVersionClick = () => {
    updateAppVersion('2.0.0');
  };

  return (
    <div className={Styles['side-menu']}>
      <div className={Styles['version-info']} onClick={handleVersionClick}>
        App Version: {appVersion}
      </div>
      <div className={Styles['push-noti']}>
        <label htmlFor="push-notification-toggle">Push Notification:</label>
        <input
          type="checkbox"
          id="push-notification-toggle"
          checked={pushNotification}
          onChange={togglePushNotification}
        />
      </div>
    </div>
  );
};

export default SideMenu;
