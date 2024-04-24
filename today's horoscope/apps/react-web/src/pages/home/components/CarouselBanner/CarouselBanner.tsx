import { MdKeyboardArrowDown } from 'react-icons/md';
import './CarouselBanner.scss';

interface carouselContents {
  title: string;
  content: string;
}
function CarouselBanner({ title, content }: carouselContents) {
  return (
    <div className="carouselBanner">
      <div className="carouselImage">이미지</div>
      <div className="carouselContents">
        <h1 className="title">{title}</h1>
        <div className="content">{content}</div>
      </div>
      <button className="contentsDetail">
        운세
        <br />
        더보기
        <br />
        <MdKeyboardArrowDown size={30} />
      </button>
    </div>
  );
}

export default CarouselBanner;
