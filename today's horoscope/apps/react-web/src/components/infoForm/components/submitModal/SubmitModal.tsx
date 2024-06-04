import { useNavigate } from 'react-router-dom';
import styles from './Submit.module.scss';

interface SubmitProps {
  alertText: string;
}
function SubmitModal({ alertText }: SubmitProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <div className={styles.modal}></div>
      <div className={styles.modalMain}>
        <div className={styles.modalContents}>{`${alertText}이 완료되었습니다.`}</div>
        <button onClick={handleClick} className={styles.button}>
          확인
        </button>
      </div>
    </div>
  );
}

export default SubmitModal;
