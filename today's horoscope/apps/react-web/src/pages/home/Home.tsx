import { useState } from 'react';
import styles from './Home.module.scss';
import Carousel from './components/Carousel/Carousel';
import { IoMenuOutline } from 'react-icons/io5';
import MenuModal from './components/MenuModal/MenuModal';

// test
function Home() {
  const [menuModal, setMenuModal] = useState<boolean>(false);
  function onclickMenuModal() {
    setMenuModal(!menuModal);
  }
  return (
    <div className={styles.main}>
      <div className={styles.stateBar}></div>
      <header className={styles.mainHeader}>
        <IoMenuOutline className={styles.menuIcon} onClick={onclickMenuModal} />
      </header>
      <div className={styles.mainContents}>
        <div className={styles.mainLogo}>오늘의 운세</div>
        <Carousel />
      </div>
      <MenuModal menuModal={menuModal} onclickMenuModal={onclickMenuModal} />
    </div>
  );
}

export default Home;
