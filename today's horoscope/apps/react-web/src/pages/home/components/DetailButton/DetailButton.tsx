import { MdKeyboardArrowDown } from 'react-icons/md';
import './DetailButton.scss';

interface DetailTitle {
  title: string;
}
function DetailButton({ title }: DetailTitle) {
  return (
    <div>
      <button className="contentsDetail">
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
