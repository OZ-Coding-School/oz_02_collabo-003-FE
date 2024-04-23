import React, { PropsWithChildren } from 'react';
import useDropdownStore from '../../../../../_stores/useDropdownStore';

interface DropdownItemProps {
  type: 'hour' | 'minute';
  time: number;
}

function DropdownItem({ children, type, time }: PropsWithChildren<DropdownItemProps>) {
  const { setHourDropdownItem, setMinuteDropdownItem, setIsOpenedHourDropdown, setIsOpenedMinuteDropdown } =
    useDropdownStore();

  const handleClickDropDownItem = () => {
    if (type === 'hour') {
      setHourDropdownItem(time);
      setIsOpenedHourDropdown(false);
    } else {
      setMinuteDropdownItem(time);
      setIsOpenedMinuteDropdown(false);
    }
  };

  return (
    <li onClick={handleClickDropDownItem} className="px-4 hover:underline cursor-pointer select-none">
      {children}
    </li>
  );
}

export default DropdownItem;
