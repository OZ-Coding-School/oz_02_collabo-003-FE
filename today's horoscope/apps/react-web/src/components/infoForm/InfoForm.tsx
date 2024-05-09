import { useEffect, useState } from 'react';
import SubmitButton from '../submitButton/SubmitButton';
import styles from './InfoForm.module.scss';
import MbtiModal from './components/MbtiModal/MbtiModal';
import { useNavigate } from 'react-router-dom';
// import BirthModal from './components/BirthModal/BirthModal';

interface InfoFormProps {
  content: string;
}

export interface UserData {
  name: string;
  birth: string;
  mbti: string;
}

function InfoForm({ content }: InfoFormProps) {
  const navigate = useNavigate();
  function MoveHome() {
    navigate('/');
  }

  const [birthModal, setBirthModal] = useState(false);
  function ClickBirthModal() {
    setBirthModal(!birthModal);
  }

  const [mbtiModal, setMbtiModal] = useState(false);
  function ClickMbtiModal() {
    setMbtiModal(!mbtiModal);
  }

  // const [koreanValue, setKoreanValue] = useState(false);
  // function KoreanValueOnly(e: React.ChangeEvent<HTMLInputElement>) {
  //   const inputValue = e.target.value;
  //   const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
  //   if (koreanRegex.test(inputValue)) {
  //     setKoreanValue(false);
  //     console.log('only korean', koreanValue);
  //   } else {
  //     setKoreanValue(true);
  //     console.log('not only korean', koreanValue);
  //   }
  // }

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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputData = {
      name: userData.name,
      birth: userData.birth,
      mbti: userData.mbti,
    };

    localStorage.setItem('userData', JSON.stringify(inputData));
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
        <form onSubmit={handleSubmit} className={styles.infoForm}>
          <div className={styles.infoInput}>
            <label>이름</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={userData.name}
              placeholder="이름을 입력해 주세요."
              className={styles.inputArea}
              // className={koreanValue ? `${styles.error} ${styles.inputArea}` : styles.inputArea}
            />
            {/* <div className={koreanValue ? styles.errorText : styles.errorNone}>한글로 입력해 주세요.</div> */}
          </div>
          <div className={styles.infoInput}>
            <label>생년월일</label>
            <input
              onFocus={ClickBirthModal}
              onChange={handleChange}
              type="date"
              name="birth"
              value={userData.birth}
              placeholder="생년월일을 설정해 주세요."
              className={styles.inputArea}
            />
          </div>
          <div className={styles.infoInput}>
            <label>MBTI</label>
            <input
              onFocus={ClickMbtiModal}
              onChange={handleChange}
              type="text"
              name="mbti"
              value={userData.mbti}
              placeholder="MBTI를 설정해 주세요."
              className={styles.inputArea}
            />
          </div>
          <SubmitButton MoveHome={MoveHome} content={content} />
        </form>
      </main>
      {mbtiModal ? <MbtiModal userData={userData} setUserData={setUserData} ClickMbtiModal={ClickMbtiModal} /> : null}
    </div>
  );
}

export default InfoForm;
