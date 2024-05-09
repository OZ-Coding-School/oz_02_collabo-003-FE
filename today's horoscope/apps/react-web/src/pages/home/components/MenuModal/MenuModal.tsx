import './MenuModal.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

type MenuModalProps = {
  menuModal: boolean;
  onclickMenuModal: () => void;
};

<<<<<<< HEAD
function MenuModal({ menuModal, onclickMenuModal }: MenuModalProps) {
  const navigate = useNavigate();
  function MoveEditInfo() {
    navigate('/edit-info');
  }

  const [inputData, setInputData] = useState({
    name: '',
    birth: '',
    mbti: '',
  });
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setInputData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div
      className={
        menuModal ? `${styles.modalBackground} ${styles.openModal}` : `${styles.modalBackground} ${styles.closeModal}`
      }>
      <div className={styles.menuModal}>
        <header className={styles.modalHeader}>
          <IoCloseOutline onClick={onclickMenuModal} className={styles.modalCloseIcon} />
          <h1 className={styles.modalTitle}>오늘의 운세</h1>
          <img src="public/K철학관img/섬/img_island_today_default.png" className={styles.mainImg} />
        </header>
        <main className={styles.modalMain}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{inputData.name}</div>
            <div className={styles.userBirth}>{inputData.birth}</div>
            <div className={styles.userMBTI}>{inputData.mbti}</div>
          </div>
          <ul className={styles.menuList}>
            <li onClick={MoveEditInfo}>개인정보수정</li>
            <li>설정</li>
          </ul>
        </main>
      </div>
=======
function MenuModal({ onclickMenuModal }: MenuModalProps) {
  return (
    <div className="menuModal">
      <header className="modalHeader">
        <IoCloseOutline onClick={onclickMenuModal} className="modalCloseIcon" />
        <h1 className="modalTitle">오늘의 운세</h1>
      </header>
      <main className="modalMain">
        <div className="userInfo">
          <div className="userName">닉네임</div>
          <div className="userBirth">0000.00.00</div>
        </div>
        <ul className="menuList">
          <li>개인정보수정</li>
          <li>설정</li>
        </ul>
      </main>
>>>>>>> parent of 79b7788 (Merge pull request #44 from OZ-Coding-School/dev)
    </div>
  );
}

export default MenuModal;
