import React from 'react';
import StatisticDailyTableRow from './StatisticDailyTableRow';
import getFormattedDate from '../../../../../../_utils/getFormattedDate';
import StatisticsTableHeader from '../../StatisticsTableHeader';

export interface Visitor {
  id: number;
  date: string;
  visitors: string;
  newVisitors: string;
  returningVisitors: string;
}

const { monthDay, adjustDate } = getFormattedDate();

const visitors: Visitor[] = [
  { id: 1, date: adjustDate(6), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 2, date: adjustDate(5), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 3, date: adjustDate(4), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 4, date: adjustDate(3), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 5, date: adjustDate(2), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 6, date: adjustDate(1), visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 7, date: monthDay, visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 8, date: '7일합계', visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 9, date: '15일합계', visitors: '5', newVisitors: '3', returningVisitors: '4' },
  { id: 10, date: '30일합계', visitors: '5', newVisitors: '3', returningVisitors: '4' },
];

function StatisticsDailyTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <StatisticsTableHeader type="daily" />
        <tbody>
          {visitors.map(visitor => (
            <StatisticDailyTableRow key={visitor.id} visitor={visitor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsDailyTable;
