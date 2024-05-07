import styles from './CarouselBanner.module.scss';

interface carouselContents {
  title: string;
  content: string;
  imgitem: string;
}
function CarouselBanner({ title, content, imgitem }: carouselContents) {
  return (
    <div className={styles.carouselBanner}>
      <img src={`public/K철학관img/섬/img_island_${imgitem}_default.png`} className={styles.carouselImage} />
      <div className={styles.carouselContents}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}

export default CarouselBanner;
