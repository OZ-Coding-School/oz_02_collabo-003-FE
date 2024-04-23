'use client';

import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownList from './DropdownList';
import DropdownItems from './DropdownItems';
import useDropdownStore from '../../../../_stores/useDropdownStore';

function PushMessageSetting() {
  const { isOpenedHourDropdown, isOpenedMinuteDropdown, hourDropdownItem, minuteDropdownItem } = useDropdownStore();
  const [dropdownButton, setDropdownButton] = useState([
    {
      id: 1,
      clicked: false,
    },
    {
      id: 2,
      clicked: false,
    },
  ]);

  return (
    <form className="mt-10 w-[500px]">
      <h2 className="w-full bg-gray-400 text-white px-4 py-2 font-semibold">발송 시간 설정</h2>
      <section className="w-full h-28 flex justify-center items-center gap-4">
        <section className="relative">
          <DropdownButton
            type="hour"
            content={`${hourDropdownItem}시`}
            dropdownButton={dropdownButton[0]}
            setDropdownButton={setDropdownButton}
          />

          {isOpenedHourDropdown && (
            <DropdownList>
              <DropdownItems type="hour" />
            </DropdownList>
          )}
        </section>

        <section className="relative">
          <DropdownButton
            type="minute"
            content={`${minuteDropdownItem}분`}
            dropdownButton={dropdownButton[1]}
            setDropdownButton={setDropdownButton}
          />

          {isOpenedMinuteDropdown && (
            <DropdownList>
              <DropdownItems type="minute" />
            </DropdownList>
          )}
        </section>
      </section>

      <section className="w-full h-10 bg-gray-200 flex justify-end items-center ">
        <button className="w-20 h-fit py-[2.5px] mr-1 rounded-md bg-blue-500 text-white">적용</button>
      </section>
    </form>
  );
}

export default PushMessageSetting;
