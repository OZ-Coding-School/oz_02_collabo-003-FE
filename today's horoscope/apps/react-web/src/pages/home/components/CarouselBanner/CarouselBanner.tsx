import styles from './CarouselBanner.module.scss';

interface carouselContents {
  title: string;
  content: string;
}
function CarouselBanner({ title, content }: carouselContents) {
  return (
    <div className={styles.carouselBanner}>
      <div className={styles.carouselImage}>이미지</div>
      <div className={styles.carouselContents}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.content}>{content}</div>
      </div>
    </div>
  );
}

export default CarouselBanner;
