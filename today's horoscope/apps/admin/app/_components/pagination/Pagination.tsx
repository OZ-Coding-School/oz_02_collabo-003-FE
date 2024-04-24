import Image from 'next/image';
import { NextArrow, PrevArrow } from '../../_images';
import usePagination from '../../_hooks/usePagination';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

function Pagination({ totalItems, itemsPerPage }: PaginationProps) {
  const { currentPage, handleNext, handlePrevious, pageNumbers, setCurrentPage, totalPages } = usePagination({
    totalItems,
    itemsPerPage,
  });

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
