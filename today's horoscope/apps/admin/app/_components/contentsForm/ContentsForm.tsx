import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import getFormattedDate from '../../_utils/getFormattedDate';
import getNumericValue from '../../_utils/getNumericValue';
import { ToastContainer, toast } from 'react-toastify';

interface ContentsFormProps {
  findPageFromDate: (inputDate: string) => number | null;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function ContentsForm({ findPageFromDate, setCurrentPage }: ContentsFormProps) {
  const [inputValue, setInputValue] = useState('');
  const { yearMonthDay } = getFormattedDate();
  const { handleChange } = getNumericValue(setInputValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const page = findPageFromDate(inputValue);

    if (page) {
      setCurrentPage(page);
    } else {
      toast.error(`해당 날짜에 대한 페이지를 찾을 수 없습니다.`);
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="h-[60px] bg-gray-100 mb-8 flex justify-between items-center p-4">
        <section className="flex gap-4">
          <p>최신 생성 콘텐츠</p>
          <p className="font-bold">{yearMonthDay}</p>
        </section>

        <section className="flex items-center gap-4">
          <p>날짜 검색</p>
          <input
            type="text"
            placeholder={yearMonthDay}
            value={inputValue}
            onChange={handleChange}
            maxLength={8}
            className="px-2 py-1"
          />
          <button className="bg-blue-500 text-white px-4 py-1 rounded-md">검색</button>
        </section>
      </form>
      <ToastContainer />
    </React.Fragment>
  );
}

export default ContentsForm;
