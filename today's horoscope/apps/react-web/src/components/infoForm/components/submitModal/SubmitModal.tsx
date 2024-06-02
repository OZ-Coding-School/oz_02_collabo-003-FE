import { useNavigate } from 'react-router-dom';
import styles from './Submit.module.scss';
import { IoClose } from 'react-icons/io5';

interface SubmitProps {
  alertText: string;
  submitModal: boolean;
  setSubmitModal: React.Dispatch<React.SetStateAction<boolean>>;
}
function SubmitModal({ alertText, submitModal, setSubmitModal }: SubmitProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  function clickSubmitModal() {
    setSubmitModal(!submitModal);
  }
  return (
    <div>
      <div className={styles.modal}></div>
      <div className={styles.modalMain}>
        <IoClose className={styles.closeIcon} onClick={clickSubmitModal} />
        <div className={styles.modalContents}>{`${alertText}이 완료되었습니다.`}</div>
        <button onClick={handleClick} className={styles.button}>
          확인
        </button>
      </div>
    </div>
  );
}

export default SubmitModal;
