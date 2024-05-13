import { useState } from 'react';
import getFormattedDate from '../_utils/getFormattedDate';
import getVisiblePages from '../_utils/getVisiblePages';

interface UseDatePaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

function useDatePagination({ totalItems, itemsPerPage }: UseDatePaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const { dateForPagination, getDateForPage } = getFormattedDate();

  const pageNumbers: number[] = [];
  const pageDates: string[] = [];
  const visiblePages = 7;

  const { startPage, endPage } = getVisiblePages(visiblePages, currentPage, totalPages);

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
