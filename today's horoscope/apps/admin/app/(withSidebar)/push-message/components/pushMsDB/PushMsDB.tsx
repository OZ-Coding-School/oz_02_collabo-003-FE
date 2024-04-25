import React from 'react';
import ContentTitle from '../../../../_components/contentTitle/ContentTitle';
import PushMsPromptTable from './pushMsTable/pushMsPromptTable/PushMsPromptTable';
import PushMsContentsTable from './pushMsTable/pushMsContentsTable/PushMsContentsTable';
import PushMsDBContentsForm from './PushMsDBContentsForm';
import usePagination from '../../../../_hooks/usePagination';
import DatePagination from '../../../../_components/pagination/DatePagination';

function PushMsDB() {
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
  } = usePagination({
    totalItems,
    itemsPerPage,
  });

  return (
    <React.Fragment>
      <section className="mt-10">
        <ContentTitle title="프롬프트 관리" />
        <PushMsPromptTable />
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
    </React.Fragment>
  );
}

export default PushMsDB;
