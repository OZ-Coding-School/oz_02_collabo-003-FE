'use client';

import TableCell from '../../../../../_components/table/TableCell';
import { Visitor } from './StatisticsDailyTable';

interface StatisticsDailyTableRowProps {
  visitor: Visitor;
}

function StatisticsDailyTableRow({ visitor }: StatisticsDailyTableRowProps) {
  return (
    <tr>
      <TableCell>{visitor.date}</TableCell>
      <TableCell>{visitor.visitors}</TableCell>
      <TableCell>{visitor.newVisitors}</TableCell>
      <TableCell>{visitor.returningVisitors}</TableCell>
    </tr>
  );
}

export default StatisticsDailyTableRow;
