import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './DetailButton.module.scss';

interface DetailTitle {
  title: string;
}
function DetailButton({ title }: DetailTitle) {
  return (
    <div>
      <button className={styles.contentsDetail}>
        {title}
        <br />
        더보기
        <br />
        <MdKeyboardArrowDown size={30} />
      </button>
    </div>
  );
}

export default DetailButton;
