import styles from './Button.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

interface ButtonProps {
  title: string;
}
function Button({ title }: ButtonProps) {
  return (
    <div className={styles.buttonContents}>
      <div>
        {title}
        <br />
        더보기
        <br />
      </div>
      <IoIosArrowDown className="detailIcon" size={30} />
    </div>
  );
}

export default Button;
