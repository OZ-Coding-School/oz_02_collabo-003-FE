import { useState } from 'react';
import './Home.scss';
import Carousel from './components/Carousel/Carousel';
import { IoMenuOutline } from 'react-icons/io5';
import MenuModal from './components/MenuModal/MenuModal';

function Home() {
  const [menuModal, setMenuModal] = useState<boolean>(false);
  function onclickMenuModal() {
    setMenuModal(!menuModal);
  }
  return (
    <div className="main">
      <header className="mainHeader">
        <IoMenuOutline className="menuIcon" onClick={onclickMenuModal} />
      </header>
      <div className="mainContents">
        <div className="mainLogo">오늘의 운세</div>
        <Carousel />
      </div>
      {menuModal ? <MenuModal menuModal={menuModal} onclickMenuModal={onclickMenuModal} /> : null}
    </div>
  );
}

export default Home;
