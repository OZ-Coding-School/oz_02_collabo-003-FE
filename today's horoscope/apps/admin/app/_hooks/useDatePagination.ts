import { useState } from 'react';
import getFormattedDate from '../_utils/getFormattedDate';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

function useDatePagination({ totalItems, itemsPerPage }: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const { dateForPagination, getDateForPage } = getFormattedDate();

  const pageNumbers: number[] = [];
  const pageDates: string[] = [];
  const visiblePages = 7;

  let startPage = currentPage - Math.floor(visiblePages / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
    dateForPagination(i, pageDates);
  }

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(1, prev - 7));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 7));
  };

  const findPageFromDate = (inputDate: string) => {
    for (let i = 1; i <= totalPages; i++) {
      const pageDate = getDateForPage(i);
      if (pageDate === inputDate) {
        return i;
      }
    }
    return null;
  };

  return {
    totalPages,
    handlePrevious,
    handleNext,
    currentPage,
    setCurrentPage,
    pageNumbers,
    pageDates,
    findPageFromDate,
  };
}

export default useDatePagination;
