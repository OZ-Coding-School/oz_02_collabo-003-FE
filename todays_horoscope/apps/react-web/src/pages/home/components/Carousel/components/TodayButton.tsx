import styles from './TodayButton.module.scss';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';

function TodayButton() {
  return (
    <div className={styles.buttonContents}>
      <SlArrowLeft className="todayDetailIcon" />
      <div>좌우로 밀어 운세 더보기</div>
      <SlArrowRight className="todayDetailIcon" />
    </div>
  );
}

export default TodayButton;
