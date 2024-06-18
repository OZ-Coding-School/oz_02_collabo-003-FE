//주석 삭제하면 기능 구현할 수 있습니다.

import React, { useState, useEffect } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Styles from './Version.module.scss';

const Version: React.FC = () => {
  // 현재 앱 버전 상태
  const [appVersion] = useState<string>('2.1.5');
  // 최신 앱 버전 상태
  /*const [latestVersion, setLatestVersion] = useState<string>('');
  // 푸시 알림 설정 상태
  const [pushNotification, setPushNotification] = useState<boolean>(false);
  // 푸시 알림 설정 토글 함수
  const togglePushNotification = () => {
    setPushNotification(prevState => !prevState);
  };*/

  // 페이지 이동 네비게이트 훅
  const navigate = useNavigate();
  const moveHome = () => {
    navigate('/');
  };

  // 업데이트 팝업 상태
  const [showUpdatePopup, setShowUpdatePopup] = useState<boolean>(false);

  // 앱스토어 최신 버전 조회
  useEffect; /*(() => {
  const fetchLatestVersion = async () => {
      try {
        const response = await axios.get('/api/app-version');
        setLatestVersion(response.data.version);
      } catch (error) {
        console.error('Error fetching latest app version:', error);
      }
    };
    fetchLatestVersion();
  }, []);

  // 업데이트 버튼 클릭 핸들러
  const handleUpdateClick = () => {
    if (appVersion !== latestVersion) {
      setShowUpdatePopup(true);
    } else {
      alert('현재 사용 중인 앱이 최신 버전입니다.');
    }
  };*/

  // 앱 업데이트 실행
  const handleAppUpdate = () => {
    // 임시 앱스토어 주소
    const appStoreUrl = 'https://example.com/myapp';
    window.open(appStoreUrl, '_blank');
    setShowUpdatePopup(false);
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
        {/*<button className={Styles.updateButton} onClick={handleUpdateClick}>
          {' '}
          업데이트{' '}
        </button>*/}
      </div>
      <div className={Styles.pushContents}>
        <label className={Styles.switch}>
          <h1 className={Styles.textTitle}>푸시 알림 설정</h1>
          <span className={Styles.textSub}>휴대폰 설정에서 푸시 알람을 켜거나 끌 수 있습니다.</span>
        </label>
        {/*<div className={Styles.wrapper}>
          <input
            type="checkbox"
            id="switch"
            checked={pushNotification}
            onChange={togglePushNotification}
            className={Styles.toggleSwitch}
          />
          <label htmlFor="switch" className={Styles.onfBtn}></label>
        </div>*/}
      </div>

      {/* 업데이트 팝업 */}
      {showUpdatePopup && (
        <>
          <div className={Styles.popupBackground}></div>
          <div className={Styles.popup}>
            <div>
              <h2 className={Styles.popupTitle}>새로운 버전이 있습니다.</h2>
              <p className={Styles.popupText}>최신버전으로 업데이트를 위해 스토어로 이동하시겠습니까?</p>
            </div>
            <div className={Styles.buttonContainer}></div>
            <div className={Styles.buttonGroup}>
              <button className={Styles.No} onClick={() => setShowUpdatePopup(false)}>
                취소
              </button>
              <button className={Styles.Ok} onClick={handleAppUpdate}>
                확인
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Version;
