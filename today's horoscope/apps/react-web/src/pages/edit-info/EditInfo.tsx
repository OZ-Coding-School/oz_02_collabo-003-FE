import { useNavigate } from 'react-router-dom';
import InfoForm from '../../components/infoForm/InfoForm';
import styles from './EditInfo.module.scss';
import { IoChevronBack } from 'react-icons/io5';

function EditInfo() {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }
  return (
    <div>
      <div className={styles.stateBar}></div>
      <header className={styles.header}>
        <IoChevronBack onClick={MoveHome} className={styles.backIcon} />
        <div className={styles.headerTitle}>정보수정</div>
      </header>
      <InfoForm content="수정완료" />
    </div>
  );
}

export default EditInfo;
