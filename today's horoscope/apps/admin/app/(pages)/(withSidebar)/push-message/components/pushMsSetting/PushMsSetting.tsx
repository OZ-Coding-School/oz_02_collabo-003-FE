'use client';

import DropdownButton from './DropdownButton';
import DropdownList from './DropdownList';
import DropdownItems from './DropdownItems';
import useDropdownStore from '../../../../../_stores/useDropdownStore';
import Image from 'next/image';
import { Dropdown } from '../../../../../_images';

function PushMsSetting() {
  const { isOpenedHourDropdown, isOpenedMinuteDropdown, hourDropdownItem, minuteDropdownItem } = useDropdownStore();

  return (
    <form className="mt-10 w-[500px]">
      <h2 className="w-full bg-gray-400 text-white px-4 py-2 font-semibold">발송 시간 설정</h2>
      <section className="w-full h-28 flex justify-center items-center gap-4">
        <section className="relative">
          <DropdownButton type="hour" content={`${hourDropdownItem}시`}>
            <Image
              src={Dropdown}
              alt="dropdown"
              className={`w-[20px] ${isOpenedHourDropdown ? 'rotate-180' : ''} transition-all select-none`}
            />
          </DropdownButton>

          {isOpenedHourDropdown && (
            <DropdownList>
              <DropdownItems type="hour" />
            </DropdownList>
          )}
        </section>

        <section className="relative">
          <DropdownButton type="minute" content={`${minuteDropdownItem}분`}>
            <Image
              src={Dropdown}
              alt="dropdown"
              className={`w-[20px] ${isOpenedMinuteDropdown ? 'rotate-180' : ''} transition-all select-none`}
            />
          </DropdownButton>

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

export default PushMsSetting;
