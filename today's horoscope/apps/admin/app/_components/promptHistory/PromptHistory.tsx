import React, { Dispatch, SetStateAction } from 'react';
import PromptHistoryTable from './promptHistoryTable/PromptHistoryTable';
import Pagination from '../pagination/Pagination';
import usePagination from '../../_hooks/usePagination';
import ContentTitle from '../contentTitle/ContentTitle';

interface PromptHistoryProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PromptHistory({ setIsClickedHistoryButton }: PromptHistoryProps) {
  const totalItems = 100;
  const itemsPerPage = 3;
  const { currentPage, handleNext, handlePrevious, pageNumbers, setCurrentPage, totalPages } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <div className="absolute top-0 left-0 bg-white w-full h-full">
      <ContentTitle title="프롬프트 히스토리" />
      <PromptHistoryTable setIsClickedHistoryButton={setIsClickedHistoryButton} />
      <Pagination {...{ currentPage, handleNext, handlePrevious, totalPages, pageNumbers, setCurrentPage }} />
    </div>
  );
}

export default PromptHistory;
