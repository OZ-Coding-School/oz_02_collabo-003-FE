import { useEffect, useState } from 'react';
import SubmitButton from '../submitButton/SubmitButton';
import styles from './InfoForm.module.scss';
import MbtiModal from './components/MbtiModal/MbtiModal';
import { useNavigate } from 'react-router-dom';
import BirthModal from './components/BirthModal/BirthModal';

interface InfoFormProps {
  alertText: string;
  content: string;
}

export interface UserData {
  name: string;
  birth: string;
  mbti: string;
}

function InfoForm({ alertText, content }: InfoFormProps) {
  const navigate = useNavigate();

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
    } else {
      setKoreanValue(true);
    }
  }

  const [userData, setUserData] = useState<UserData>({
    name: '',
    birth: '',
    mbti: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }
  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (koreanValue) {
      return;
    }

    const inputData = {
      name: userData.name,
      birth: userData.birth,
      mbti: userData.mbti,
    };

    localStorage.setItem('userData', JSON.stringify(inputData));
    localStorage.removeItem('activeBanner');
    alert(`${alertText}을 완료하였습니다.`);
    navigate('/');
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <img src={`/K_img/K-logo-icon/text_logo_b.png`} alt="logo" className={styles.mainLogo} />
          <div className={styles.headerContent}>
            오늘의 운세를 보기 위해 기본 정보가 필요합니다
            <br />
            운세 결과에 영향을 미치니 정확하게 입력 해주세요.
          </div>
        </div>
        <form className={styles.infoForm}>
          <div className={styles.infoInput}>
            <label>
              이름
              <input
                onChange={handleChange}
                onInput={KoreanValueOnly}
                type="text"
                name="name"
                value={userData.name}
                placeholder="이름을 입력해 주세요."
                className={koreanValue ? `${styles.error} ${styles.inputArea}` : styles.inputArea}
              />
            </label>

            <div className={koreanValue ? styles.errorText : styles.errorNone}>한글로 입력해 주세요.</div>
          </div>
          <div className={styles.infoInput}>
            <label>
              생년월일
              <input
                onFocus={ClickBirthModal}
                onChange={handleChange}
                type="text"
                name="birth"
                value={userData.birth}
                placeholder="생년월일을 설정해 주세요."
                className={styles.inputArea}
              />
            </label>
          </div>
          <div className={styles.infoInput}>
            <label>
              MBTI
              <input
                onFocus={ClickMbtiModal}
                onChange={handleChange}
                type="text"
                name="mbti"
                value={userData.mbti}
                placeholder="MBTI를 설정해 주세요."
                className={styles.inputArea}
              />
            </label>
          </div>
          <SubmitButton handleSubmit={handleSubmit} content={content} />
        </form>
      </main>
      {mbtiModal ? (
        <MbtiModal userData={userData} setUserData={setUserData} ClickMbtiModal={ClickMbtiModal} />
      ) : birthModal ? (
        <BirthModal userData={userData} setUserData={setUserData} ClickBirthModal={ClickBirthModal} />
      ) : null}
    </div>
  );
}

export default InfoForm;
