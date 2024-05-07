import { useState } from 'react';
import SubmitButton from '../submitButton/SubmitButton';
import styles from './InfoForm.module.scss';
import MbtiModal from './components/MbtiModal/MbtiModal';
import BirthModal from './components/BirthModal/BirthModal';

interface InfoFormProps {
  content: string;
}

function InfoForm({ content }: InfoFormProps) {
  const [birthModal, setBirthModal] = useState(false);
  function ClickBirthModal() {
    setBirthModal(!birthModal);
  }

  const [mbtiModal, setMbtiModal] = useState(false);
  function ClickMbtiModal() {
    setMbtiModal(!mbtiModal);
  }

  const [koreanValue, setKoreanValue] = useState(false);
  function KoreanValueOnly(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
    if (koreanRegex.test(inputValue)) {
      setKoreanValue(false);
      console.log('only korean', koreanValue);
    } else {
      setKoreanValue(true);
      console.log('not only korean', koreanValue);
    }
  }

  return (
    <div>
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
          <input
            onChange={KoreanValueOnly}
            type="text"
            placeholder="이름을 입력해 주세요."
            className={koreanValue ? `${styles.error} ${styles.inputArea}` : styles.inputArea}
          />
          <div className={koreanValue ? styles.errorText : styles.errorNone}>한글로 입력해 주세요.</div>
          <label>생년월일</label>
          <input
            onClick={ClickBirthModal}
            type="text"
            placeholder="생년월일을 설정해 주세요."
            className={styles.inputArea}
          />
          <label>MBTI</label>
          <input
            onClick={ClickMbtiModal}
            type="text"
            placeholder="MBTI를 설정해 주세요."
            className={styles.inputArea}
          />
          <SubmitButton content={content} />
        </form>
      </main>
      {mbtiModal ? (
        <MbtiModal ClickMbtiModal={ClickMbtiModal} />
      ) : birthModal ? (
        <BirthModal ClickBirthModal={ClickBirthModal} />
      ) : null}
    </div>
  );
}

export default InfoForm;
