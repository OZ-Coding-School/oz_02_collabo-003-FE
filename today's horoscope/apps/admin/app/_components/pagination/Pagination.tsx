import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';
import { NextArrow, PrevArrow } from '../../_images';

interface PaginationProps {
  handlePrevious: () => void;
  handleNext: () => void;
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({
  handleNext,
  handlePrevious,
  currentPage,
  totalPages,
  pageNumbers,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div className="w-fit mx-auto flex items-center h-20">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4">
        <Image src={PrevArrow} alt="prev-arrow" className="w-4" />
      </button>

      <div className="flex gap-4">
        {pageNumbers.map(number => (
          <button
            onClick={() => setCurrentPage(number)}
            key={number}
            className={`w-10 h-10 rounded-full text-xl ${currentPage === number && 'bg-blue-500 text-white'}`}>
            {number}
          </button>
        ))}
      </div>

      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 ">
        <Image src={NextArrow} alt="next-arrow" className="w-4" />
      </button>
    </div>
  );
}

export default Pagination;
