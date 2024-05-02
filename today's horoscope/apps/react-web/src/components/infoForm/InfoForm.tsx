import { useState } from 'react';
import SubmitButton from '../submitButton/SubmitButton';
import styles from './InfoForm.module.scss';
import { IoChevronBack } from 'react-icons/io5';
import MbtiModal from './components/MbtiModal/MbtiModal';
import BirthModal from './components/MbtiModal/MbtiModal';

interface InfoFormprops {
  title: string;
  content: string;
}

function InfoForm({ title, content }: InfoFormprops) {
  const [birthModal, setBirthModal] = useState(false);
  function ClickBirthModal() {
    setBirthModal(!birthModal);
  }

  const [mbtiModal, setMbtiModal] = useState(false);
  function ClickMbtiModal() {
    setMbtiModal(!mbtiModal);
  }
  return (
    <div>
      <div className={styles.stateBar}></div>
      <header className={styles.header}>
        <IoChevronBack className={styles.backIcon} />
        <div className={styles.headerTitle}>{title}</div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <div className={styles.mainLogo}>오늘의 운세</div>
          <div className={styles.headerContent}>
            오늘의 운세를 보기 위해선 기본 정보가 꼭 필요합니다
            <br />
            운세 결과에 중요한 영향을 미치니 정확하게 입력 해주세요.
          </div>
        </div>
        <form className={styles.infoForm}>
          <label>이름</label>
          <input type="text" placeholder="이름을 입력해 주세요." />
          <label>생년월일</label>
          <input onClick={ClickBirthModal} type="text" placeholder="생년월일을 설정해 주세요." />
          <label>MBTI</label>
          <input onClick={ClickMbtiModal} type="text" placeholder="MBTI를 설정해 주세요." />
          <SubmitButton content={content} />
        </form>
      </main>
      {mbtiModal ? <MbtiModal /> : birthModal ? <BirthModal /> : null}
    </div>
  );
}

export default InfoForm;
