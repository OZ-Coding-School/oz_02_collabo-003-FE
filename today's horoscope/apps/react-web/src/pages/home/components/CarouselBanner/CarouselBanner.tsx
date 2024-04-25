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
    </div>
  );
}

export default CarouselBanner;
