import { useNavigate } from 'react-router-dom';
import InfoForm from '../../components/infoForm/InfoForm';
import styles from './EditInfo.module.scss';
import { IoChevronBack } from 'react-icons/io5';

function EditInfo() {
  const navigate = useNavigate();
  function moveHome() {
    navigate(-1);
    sessionStorage.removeItem('activeBanner');
  }
  return (
    <div>
      <div className={styles.statusBar}></div>
      <header className={styles.header}>
        <IoChevronBack onClick={moveHome} className={styles.backIcon} />
        <div className={styles.headerTitle}>정보수정</div>
      </header>
      <InfoForm alertText="정보수정" content="수정완료" />
    </div>
  );
}

export default EditInfo;
