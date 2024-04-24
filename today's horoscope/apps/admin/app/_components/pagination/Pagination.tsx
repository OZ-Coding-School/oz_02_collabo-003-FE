import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { NextArrow, PrevArrow } from '../../_images';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const pageNumbers: number[] = [];
  const visiblePages = 9;

  let startPage = currentPage - Math.floor(visiblePages / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  function handlePrevious() {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }

  function handleNext() {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }

  return (
    <div className="flex justify-center space-x-2">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="px-4">
        <Image src={PrevArrow} alt="prev-arrow" className="w-4" />
      </button>

      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-[50px] px-4 py-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          {page}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages} className="px-4 ">
        <Image src={NextArrow} alt="prev-arrow" className="w-4" />
      </button>
    </div>
  );
}

export default Pagination;
