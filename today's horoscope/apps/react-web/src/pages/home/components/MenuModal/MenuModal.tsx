import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MenuModal.module.scss';
import { UserData } from '../../../../components/infoForm/InfoForm';

type MenuModalProps = {
  menuModal: boolean | null;
  onclickMenuModal: () => void;
};

const zodiacList: string[] = [
  'monkey',
  'rooster',
  'dog',
  'pig',
  'mouse',
  'cow',
  'tiger',
  'rabbit',
  'dragon',
  'snake',
  'horse',
  'sheep',
];
function MenuModal({ menuModal, onclickMenuModal }: MenuModalProps) {
  const [inputData, setInputData] = useState<UserData>({ name: '', birth: '', mbti: '' });

  const navigate = useNavigate();

  function moveEditInfo() {
    navigate('/edit-info');
  }
  function moveVersion() {
    navigate('/version');
  }

  const [zodiac, setZodiac] = useState('default');
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const objectStoredData = JSON.parse(storedData);
      setInputData(objectStoredData);
      const birthData = inputData.birth;
      const birthYear = birthData.split('-')[0];
      const zodiacIndex = parseInt(birthYear) % 12;
      setZodiac(zodiacList[zodiacIndex]);
    }
  }, [inputData]);

  return (
    <div
      className={
        menuModal ? `${styles.modalBackground} ${styles.openModal}` : `${styles.modalBackground} ${styles.closeModal}`
      }>
      <div className={styles.menuModal}>
        <header className={styles.modalHeader}>
          <IoCloseOutline onClick={onclickMenuModal} className={styles.modalCloseIcon} />
          <img src={`/K_img/K-logo-icon/text_logo_b.png`} alt="logo" className={styles.modalTitle} />
          <img src={`/K_img/island/img_island_zodiac_${zodiac}.png`} alt="zodiac image" className={styles.mainImg} />
        </header>
        <main className={styles.modalMain}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{inputData.name}</div>
            <div className={styles.userBirth}>{inputData.birth}</div>
            <div className={styles.userMBTI}>{inputData.mbti}</div>
          </div>
          <ul className={styles.menuList}>
            <li onClick={moveEditInfo}>개인정보수정</li>
            <li onClick={moveVersion}>설정</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default MenuModal;
