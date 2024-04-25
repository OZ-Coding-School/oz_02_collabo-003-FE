import './MenuModal.scss';
import { IoCloseOutline } from 'react-icons/io5';

type MenuModalProps = {
  menuModal: boolean;
  onclickMenuModal: () => void;
};

function MenuModal({ onclickMenuModal }: MenuModalProps) {
  return (
    <div className="menuModal">
      <header className="modalHeader">
        <IoCloseOutline onClick={onclickMenuModal} className="modalCloseIcon" />
        <h1 className="modalTitle">오늘의 운세</h1>
      </header>
      <main className="modalMain">
        <div className="userInfo">
          <div className="userName">닉네임</div>
          <div className="userBirth">0000.00.00</div>
        </div>
        <ul className="menuList">
          <li>개인정보수정</li>
          <li>설정</li>
        </ul>
      </main>
    </div>
  );
}

export default MenuModal;
