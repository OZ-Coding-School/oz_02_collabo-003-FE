import Image from 'next/image';
import { NextArrow, PrevArrow } from '../../_images';
import { Dispatch, SetStateAction } from 'react';

interface DatePaginationProps {
  pageDates: string[];
  handlePrevious: () => void;
  handleNext: () => void;
  currentPage: number;
  pageNumbers: number[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

function DatePagination({
  pageNumbers,
  pageDates,
  handleNext,
  handlePrevious,
  setCurrentPage,
  currentPage,
  totalPages,
}: DatePaginationProps) {
  return (
    <div className="flex justify-evenly space-x-2">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4">
        <Image src={PrevArrow} alt="prev-arrow" className="w-4" />
      </button>

      {pageDates.map((date, index) => (
        <button
          key={pageNumbers[index]}
          onClick={() => setCurrentPage(pageNumbers[index])}
          className={`px-3 py-2 border rounded ${currentPage === pageNumbers[index] ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          {date}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 ">
        <Image src={NextArrow} alt="next-arrow" className="w-4" />
      </button>
    </div>
  );
}

export default DatePagination;
