import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MenuModal.module.scss';

type MenuModalProps = {
  menuModal: boolean | null;
  onclickMenuModal: () => void;
};

function MenuModal({ menuModal, onclickMenuModal }: MenuModalProps) {
  const navigate = useNavigate();

  function MoveEditInfo() {
    navigate('/edit-info');
  }

  const [inputData, setInputData] = useState({ name: '', birth: '', mbti: '' });

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
          <img src={`public/K_img/K-logo-icon/text_logo_b.png`} alt="logo" className={styles.modalTitle} />
          <img src="public/K_img/island/img_island_today_default.png" alt="default image" className={styles.mainImg} />
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
    </div>
  );
}

export default MenuModal;
