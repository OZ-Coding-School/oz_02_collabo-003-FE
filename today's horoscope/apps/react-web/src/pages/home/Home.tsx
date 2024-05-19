import { useState } from 'react';
import styles from './Home.module.scss';
import Carousel from './components/Carousel/Carousel';
import { IoMenuOutline } from 'react-icons/io5';
import MenuModal from './components/MenuModal/MenuModal';

function Home() {
  const [menuModal, setMenuModal] = useState<boolean | null>(null);
  const [activeSlide, setActiveSlide] = useState<string>('');

  function onclickMenuModal() {
    if (menuModal === null) {
      setMenuModal(true);
    } else {
      setMenuModal(!menuModal);
    }
  }

  function handleBackground() {
    switch (activeSlide) {
      case 'today':
        return 'linear-gradient(45deg, #F4CFD8, #94E4FD)';
      case 'zodiac':
        return 'linear-gradient(45deg, #D2FCF9, #8CBAFF)';
      case 'star':
        return 'linear-gradient(45deg, #FCF3D2, #B6EE94)';
      case 'mbti':
        return 'linear-gradient(45deg, #D2F9FC, #C6B2FE)';
      default:
        return 'none';
    }
  }

  return (
    <div className={styles.main} style={{ background: handleBackground() }}>
      <header className={styles.mainHeader}>
        {localStorage.userData === undefined ? (
          <div className={styles.menuIcon}></div>
        ) : (
          <IoMenuOutline className={styles.menuIcon} onClick={onclickMenuModal} />
        )}
      </header>
      <div className={styles.mainContents}>
        <img src={`/K_img/K-logo-icon/text_logo_b.png`} alt="logo" className={styles.mainLogo} />
        <Carousel setActiveSlide={setActiveSlide} />
      </div>
      {menuModal === null ? null : <MenuModal menuModal={menuModal} onclickMenuModal={onclickMenuModal} />}
    </div>
  );
}

export default Home;
