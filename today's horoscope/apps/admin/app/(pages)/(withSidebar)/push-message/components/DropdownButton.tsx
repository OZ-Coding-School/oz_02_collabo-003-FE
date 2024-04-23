'use client';

import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Dropdown } from '../../../../_images';
import useDropdownStore from '../../../../_stores/useDropdownStore';

interface DropdownButtonProps {
  type: 'hour' | 'minute';
  content: string;
  dropdownButton: DropdownButton;
  setDropdownButton: Dispatch<SetStateAction<DropdownButton[]>>;
}

interface DropdownButton {
  id: number;
  clicked: boolean;
}

function DropdownButton({ type, content, dropdownButton, setDropdownButton }: DropdownButtonProps) {
  const { isOpenedHourDropdown, setIsOpenedHourDropdown, isOpenedMinuteDropdown, setIsOpenedMinuteDropdown } =
    useDropdownStore();
    
  const toggleDropdownButton = () => {
    setDropdownButton(buttons =>
      buttons.map(button => (button.id === dropdownButton.id ? { ...button, clicked: !button.clicked } : button)),
    );
    checkButtonType(type);
  };

  const checkButtonType = (type: 'hour' | 'minute') => {
    if (type === 'hour') setIsOpenedHourDropdown(!isOpenedHourDropdown);
    else setIsOpenedMinuteDropdown(!isOpenedMinuteDropdown);
  };

  return (
    <div
      onClick={toggleDropdownButton}
      className="w-[140px] border-[1px] px-4 py-1 border-gray-300 rounded-lg flex justify-between items-center cursor-pointer select-none">
      {content}
      <Image
        src={Dropdown}
        alt="dropdown"
        className={`w-[20px] ${dropdownButton.clicked ? 'rotate-180' : ''} transition-all select-none`}
      />
    </div>
  );
}

export default DropdownButton;
