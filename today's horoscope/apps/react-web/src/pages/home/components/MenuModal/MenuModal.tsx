import styles from './MenuModal.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

type MenuModalProps = {
  menuModal: boolean;
  onclickMenuModal: () => void;
};

function MenuModal({ menuModal, onclickMenuModal }: MenuModalProps) {
  return (
    <div
      className={
        menuModal ? `${styles.modalBackground} ${styles.openModal}` : `${styles.modalBackground} ${styles.closeModal}`
      }>
      <div className={styles.menuModal}>
        <header className={styles.modalHeader}>
          <IoCloseOutline onClick={onclickMenuModal} className={styles.modalCloseIcon} />
          <h1 className={styles.modalTitle}>오늘의 운세</h1>
        </header>
        <main className={styles.modalMain}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>닉네임</div>
            <div className={styles.userBirth}>0000.00.00</div>
            <div className={styles.userMBTI}>MBTI</div>
          </div>
          <ul className={styles.menuList}>
            <li>개인정보수정</li>
            <li>설정</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default MenuModal;
