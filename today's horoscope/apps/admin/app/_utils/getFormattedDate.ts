function getFormattedDate() {
  const date = new Date();

  // 날짜 포맷팅을 위한 보조 함수 정의
  const formatDigits = (date: Date) => ({
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0'),
  });

  const { year, month, day } = formatDigits(date);

  const yearMonthDay = `${year}${month}${day}`;
  const monthDay = `${month}/${day}`;

  const adjustDate = (days: number) => {
    const resultDate = new Date();
    resultDate.setDate(resultDate.getDate() - days);
    const { month, day } = formatDigits(resultDate);
    return `${month}/${day}`;
  };

  const getSixMonthsAgoDate = () => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const { year, month, day } = formatDigits(sixMonthsAgo);
    return `${year}${month}${day}`;
  };

  return { yearMonthDay, monthDay, adjustDate, getSixMonthsAgoDate };
}

export default getFormattedDate;
