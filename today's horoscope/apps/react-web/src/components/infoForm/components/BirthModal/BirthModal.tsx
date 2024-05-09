// text
import styles from '../modal.module.scss';

interface BirthProps {
  ClickBirthModal: () => void;
}

function BirthModal({ ClickBirthModal }: BirthProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>생년월일</div>
        <button className={styles.button} onClick={ClickBirthModal}>
          적용하기
        </button>
      </div>
    </div>
  );
}

export default BirthModal;
