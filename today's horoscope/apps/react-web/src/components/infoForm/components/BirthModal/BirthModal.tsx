import styles from '../modal.module.scss';
import { useState } from 'react';
import DatePicker from 'react-mobile-datepicker';

interface BirthProps {
  ClickBirthModal: () => void;
}

function BirthModal({ ClickBirthModal }: BirthProps) {
  const [time, setTime] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle(nextIsOpen: typeof isOpen) {
    setIsOpen(nextIsOpen);
  }
  function handleSelect(nextTime: typeof time) {
    setTime(nextTime);
    setIsOpen(false);
  }
  return (
    <div className={styles.modal}>
      <div className={styles.modalMain}>
        <div className={styles.modalHeader}>생년월일</div>

        <DatePicker value={time} isOpen={isOpen} onSelect={handleSelect} onCancel={() => handleToggle(false)} />

        <button className={styles.button} onClick={ClickBirthModal}>
          적용하기
        </button>
      </div>
    </div>
  );
}

export default BirthModal;
