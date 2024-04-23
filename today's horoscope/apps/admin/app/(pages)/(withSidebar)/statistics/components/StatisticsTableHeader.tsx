import React from 'react';
import TableHeader from '../../../../_components/table/TableHeader';

interface StatisticsTableHeaderProps {
  type: 'daily' | 'period';
}

function StatisticsTableHeader({ type }: StatisticsTableHeaderProps) {
  return (
    <thead>
      <tr>
        <TableHeader content={type === 'daily' ? '날짜' : '기간'} />
        <TableHeader content="방문자수" />
        <TableHeader content="신규방문자수" />
        <TableHeader content="재방문자수" />
      </tr>
    </thead>
  );
}

export default StatisticsTableHeader;
