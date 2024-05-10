import { useState } from 'react';
import styles from './Home.module.scss';
import Carousel from './components/Carousel/Carousel';
import { IoMenuOutline } from 'react-icons/io5';
import MenuModal from './components/MenuModal/MenuModal';

function Home() {
  const [menuModal, setMenuModal] = useState<boolean>(false);
  function onclickMenuModal() {
    setMenuModal(!menuModal);
  }

  const [activeSlide, setActiveSlide] = useState('');

  function handleBackground() {
    if (activeSlide === 'today') {
      return 'linear-gradient(45deg, #F4CFD8, #94E4FD)';
    } else if (activeSlide === 'zodiac') {
      return 'linear-gradient(45deg, #D2FCF9, #8CBAFF)';
    } else if (activeSlide === 'star') {
      return 'linear-gradient(45deg, #FCF3D2, #B6EE94)';
    } else if (activeSlide === 'mbti') {
      return 'linear-gradient(45deg, #D2F9FC, #C6B2FE)';
    }
  }

  return (
    <div className={styles.main} style={{ background: handleBackground() }}>
      <div className={styles.stateBar}></div>
      <header className={styles.mainHeader}>
        {localStorage.length === 0 ? (
          <div className={styles.menuIcon}></div>
        ) : (
          <IoMenuOutline className={styles.menuIcon} onClick={onclickMenuModal} />
        )}
      </header>
      <div className={styles.mainContents}>
        <div className={styles.mainLogo}>오늘의 운세</div>
        <Carousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
      <MenuModal menuModal={menuModal} onclickMenuModal={onclickMenuModal} />
    </div>
  );
}

export default Home;
