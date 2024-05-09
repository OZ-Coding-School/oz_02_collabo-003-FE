// text
import { useNavigate } from 'react-router-dom';
import InfoForm from '../../components/infoForm/InfoForm';
import styles from './Login.module.scss';
import { IoChevronBack } from 'react-icons/io5';

function Login() {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }
  return (
    <div>
      <div className={styles.stateBar}></div>
      <header className={styles.header}>
        <IoChevronBack onClick={MoveHome} className={styles.backIcon} />
        <div className={styles.headerTitle}>정보입력</div>
      </header>
      <InfoForm content="저장하기" />
    </div>
  );
}

export default Login;
