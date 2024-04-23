import React from 'react';
import StatisticsPeriodLookupForm from './StatisticsPeriodLookupForm';
import StatisticsPriodTable from './statisticsPriodTable/StatisticsPriodTable';

function StatisticsRightSection() {
  return (
    <section className="w-[50%]">
      <section className="w-fit h-[30px] flex items-center gap-4 ml-auto mb-[10px]">
        <p className="w-fit">기간 조회</p>
        <StatisticsPeriodLookupForm />
      </section>
      <StatisticsPriodTable />
      <p className="w-fit ml-auto mt-[10px]">기간 조회는 최대 6개월까지 가능합니다.</p>
    </section>
  );
}

export default StatisticsRightSection;
