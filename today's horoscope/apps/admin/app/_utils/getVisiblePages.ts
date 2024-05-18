function getVisiblePages(visiblePages: number, currentPage: number, totalPages: number) {
  let startPage = currentPage - Math.floor(visiblePages / 2);
  startPage = Math.max(startPage, 1);
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(endPage - visiblePages + 1, 1);
  }

  return { startPage, endPage };
}

export default getVisiblePages;
