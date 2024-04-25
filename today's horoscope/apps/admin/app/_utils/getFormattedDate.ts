import dayjs from 'dayjs';

function getFormattedDate() {
  const today = dayjs();

  const yearMonthDay = today.format('YYYYMMDD');
  const monthDay = today.format('MM/DD');

  const dateForPagination = (i: number, pageDates: string[]) => {
    const date = today.add(i - 1, 'day').format('YYYYMMDD');
    pageDates.push(date);
  };

  const getDateForPage = (page: number) => {
    return today.add(page - 1, 'day').format('YYYYMMDD');
  };

  return { yearMonthDay, monthDay, dateForPagination, getDateForPage };
}

export default getFormattedDate;
