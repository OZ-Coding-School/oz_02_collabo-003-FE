function getFormattedDate() {
  const date = new Date();

  const formatDigits = (date: Date) => ({
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
  });

  const { year, month, day } = formatDigits(date);

  const yearMonthDay = `${year}${month}${day}`;
  const monthDay = `${month}/${day}`;

  const adjustDate = (days: number) => {
    date.setDate(date.getDate() - days);
    const { month, day } = formatDigits(date);
    return `${month}/${day}`;
  };

  const dateForPagination = (date: Date, i: number, pageDates: string[]) => {
    date.setDate(date.getDate() + (i - 1));
    const { year, month, day } = formatDigits(date);

    const formatNumber = (num: number) => (num < 10 ? '0' + num : num.toString());

    const dateString = `${year}${formatNumber(Number(month))}${formatNumber(Number(day))}`;
    pageDates.push(dateString);
  };

  const getDateForPage = (page: number) => {
    date.setDate(date.getDate() + (page - 1));
    const { year, month, day } = formatDigits(date);
    return `${year}${month}${day}`;
  };

  return { yearMonthDay, monthDay, adjustDate, dateForPagination, getDateForPage };
}

export default getFormattedDate;
