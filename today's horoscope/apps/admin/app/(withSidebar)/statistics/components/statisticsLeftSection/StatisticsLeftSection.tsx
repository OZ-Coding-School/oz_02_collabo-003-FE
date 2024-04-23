import React from 'react';
import ContentTitle from '../../../../_components/contentTitle/ContentTitle';
import StatisticsDailyTable from './statisticsDailyTable/StatisticsDailyTable';

function StatisticsLeftSection() {
  return (
    <section className="w-[50%]">
      <ContentTitle title="일일 방문 통계" />
      <StatisticsDailyTable />
    </section>
  );
}

export default StatisticsLeftSection;
