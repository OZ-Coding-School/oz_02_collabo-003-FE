import { useEffect, useState } from 'react';
import SubmitButton from '../submitButton/SubmitButton';
import styles from './InfoForm.module.scss';
import MbtiModal from './components/MbtiModal/MbtiModal';
import BirthModal from './components/BirthModal/BirthModal';
import SubmitModal from './components/submitModal/SubmitModal';

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
  const [userData, setUserData] = useState<UserData>({
    name: '',
    birth: '',
    mbti: '',
  });
  const [birthModal, setBirthModal] = useState<boolean>(false);
  const [mbtiModal, setMbtiModal] = useState<boolean>(false);
  const [submitModal, setSubmitModal] = useState<boolean>(false);
  const [koreanValue, setKoreanValue] = useState<boolean>(false);
  const [requiredValue, setRequiredValue] = useState<boolean>(false);

  function clickBirthModal() {
    setBirthModal(!birthModal);
  }

  function clickMbtiModal() {
    setMbtiModal(!mbtiModal);
  }

  //이름 값의 한글 유효성 검사
  function koreanValueOnly(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value;
    const koreanRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/;
    if (koreanRegex.test(inputValue)) {
      setKoreanValue(false);
    } else {
      setKoreanValue(true);
    }
  }

  //정보수정시 기존 유저 정보 가져오기
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

  //상태로 저장한 유저정보 로컬스토리지에 저장
  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();

    //폼 제출 시 빈값 검사
    if (koreanValue || !userData.name || !userData.birth || !userData.mbti) {
      return setRequiredValue(!requiredValue);
    }

    const inputData = {
      name: userData.name,
      birth: userData.birth,
      mbti: userData.mbti,
    };

    localStorage.setItem('userData', JSON.stringify(inputData));
    sessionStorage.removeItem('activeBanner');
    setSubmitModal(!submitModal);
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
                onInput={koreanValueOnly}
                type="text"
                name="name"
                value={userData.name}
                placeholder="이름을 입력해 주세요."
                maxLength={7}
                required
                className={
                  koreanValue
                    ? `${styles.error} ${styles.inputArea}`
                    : requiredValue && !userData.name
                      ? `${styles.inputRequired} ${styles.inputArea}`
                      : styles.inputArea
                }
              />
            </label>

            <div className={koreanValue ? styles.errorText : styles.errorNone}>한글로 입력해 주세요.</div>
          </div>
          <div className={styles.infoInput}>
            <label>
              생년월일
              <input
                onFocus={clickBirthModal}
                onChange={handleChange}
                type="text"
                name="birth"
                value={userData.birth}
                placeholder="생년월일을 설정해 주세요."
                required
                readOnly
                className={
                  requiredValue && !userData.birth ? `${styles.inputRequired} ${styles.inputArea}` : styles.inputArea
                }
              />
            </label>
          </div>
          <div className={styles.infoInput}>
            <label>
              MBTI
              <input
                onFocus={clickMbtiModal}
                onChange={handleChange}
                type="text"
                name="mbti"
                value={userData.mbti}
                placeholder="MBTI를 설정해 주세요."
                required
                readOnly
                className={
                  requiredValue && !userData.mbti ? `${styles.inputRequired} ${styles.inputArea}` : styles.inputArea
                }
              />
            </label>
          </div>
          <SubmitButton handleSubmit={handleSubmit} content={content} />
        </form>
      </main>
      {mbtiModal && <MbtiModal userData={userData} setUserData={setUserData} clickMbtiModal={clickMbtiModal} />}
      {birthModal && <BirthModal userData={userData} setUserData={setUserData} clickBirthModal={clickBirthModal} />}
      {submitModal && <SubmitModal alertText={alertText} />}
    </div>
  );
}

export default InfoForm;
