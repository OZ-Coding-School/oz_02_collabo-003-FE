import React from 'react';
import TableCell from '../../../../../../../_components/table/TableCell';
import { TodayContent } from './fakeData';
import TableButton from '../../../../../../../_components/table/TableButton';

interface PushMsContentsTableRow {
  content: TodayContent;
}

function PushMsContentsTableRow({ content }: PushMsContentsTableRow) {
  return (
    <tr>
      <TableCell>{content.date}</TableCell>
      <TableCell>{content.content}</TableCell>
      <TableCell>
        <TableButton onClick={() => console.log('')}>보기</TableButton>
      </TableCell>
    </tr>
  );
}

export default PushMsContentsTableRow;
