import InfoForm from '../../components/infoForm/InfoForm';
import styles from './Login.module.scss';
import { IoChevronBack } from 'react-icons/io5';

function Login() {
  return (
    <div>
      <div className={styles.stateBar}></div>
      <header className={styles.header}>
        <IoChevronBack className={styles.backIcon} />
        <div className={styles.headerTitle}>정보입력</div>
      </header>
      <InfoForm content="저장하기" />
    </div>
  );
}

export default Login;
