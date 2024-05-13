import { useState } from 'react';
import styles from './Home.module.scss';
import Carousel from './components/Carousel/Carousel';
import { IoMenuOutline } from 'react-icons/io5';
import MenuModal from './components/MenuModal/MenuModal';

function Home() {
  const [menuModal, setMenuModal] = useState<boolean | null>(null);
  function onclickMenuModal() {
    if (menuModal === null) {
      setMenuModal(true);
    } else {
      setMenuModal(!menuModal);
    }
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
      <header className={styles.mainHeader}>
        {localStorage.length === 0 ? (
          <div className={styles.menuIcon}></div>
        ) : (
          <IoMenuOutline className={styles.menuIcon} onClick={onclickMenuModal} />
        )}
      </header>
      <div className={styles.mainContents}>
        <img src={`public/K_img/K-logo-icon/text_logo_b.png`} alt="logo" className={styles.mainLogo} />
        <Carousel activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      </div>
      {menuModal === null ? null : <MenuModal menuModal={menuModal} onclickMenuModal={onclickMenuModal} />}
    </div>
  );
}

export default Home;
