import { useState } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

function usePagination({ totalItems, itemsPerPage }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return { totalPages, handlePrevious, handleNext, currentPage, setCurrentPage, pageNumbers };
}

export default usePagination;
