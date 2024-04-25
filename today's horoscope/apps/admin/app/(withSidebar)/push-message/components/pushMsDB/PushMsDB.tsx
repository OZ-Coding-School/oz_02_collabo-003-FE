import React, { useState } from 'react';
import ContentTitle from '../../../../_components/contentTitle/ContentTitle';
import PushMsPromptTable from './pushMsTable/pushMsPromptTable/PushMsPromptTable';
import PushMsContentsTable from './pushMsTable/pushMsContentsTable/PushMsContentsTable';
import PushMsDBContentsForm from './PushMsDBContentsForm';
import DatePagination from '../../../../_components/pagination/DatePagination';
import useDatePagination from '../../../../_hooks/useDatePagination';
import PromptHistory from '../../../../_components/promptHistory/PromptHistory';

function PushMsDB() {
  const [isClickedHistoryButton, setIsClickedHistoryButton] = useState(false);
  const totalItems = 540;
  const itemsPerPage = 7;
  const {
    currentPage,
    handleNext,
    handlePrevious,
    pageNumbers,
    pageDates,
    setCurrentPage,
    totalPages,
    findPageFromDate,
  } = useDatePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <div className="relative">
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PushMsPromptTable setIsClickedHistoryButton={setIsClickedHistoryButton} />
      </section>
      <section className="mt-10">
        <ContentTitle title="생성 콘텐츠" />
        <PushMsDBContentsForm {...{ findPageFromDate, setCurrentPage }} />
        <div className="mb-8">
          <DatePagination
            {...{ pageDates, handleNext, handlePrevious, currentPage, pageNumbers, setCurrentPage, totalPages }}
          />
        </div>
        <PushMsContentsTable />
      </section>
      {isClickedHistoryButton && <PromptHistory setIsClickedHistoryButton={setIsClickedHistoryButton} />}
    </div>
  );
}

export default PushMsDB;
