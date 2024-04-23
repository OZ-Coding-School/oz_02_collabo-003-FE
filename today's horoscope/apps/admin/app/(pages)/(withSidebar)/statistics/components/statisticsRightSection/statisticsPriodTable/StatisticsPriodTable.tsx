import TableCell from '../../../../../../_components/table/TableCell';
import StatisticsTableHeader from '../../StatisticsTableHeader';

export interface PeriodVisitor {
  period: string;
  visitors: string;
  newVisitors: string;
  returningVisitors: string;
}

const periodVisitor: PeriodVisitor = {
  period: '',
  visitors: '5',
  newVisitors: '3',
  returningVisitors: '4',
};

function StatisticsPriodTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <StatisticsTableHeader type="period" />
        <tbody>
          <tr>
            <TableCell>{periodVisitor.period}</TableCell>
            <TableCell>{periodVisitor.visitors}</TableCell>
            <TableCell>{periodVisitor.newVisitors}</TableCell>
            <TableCell>{periodVisitor.returningVisitors}</TableCell>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsPriodTable;
