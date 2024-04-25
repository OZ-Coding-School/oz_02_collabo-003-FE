'use client';

import TableCell from '../../../_components/table/TableCell';
import TableButton from '../../table/TableButton';
import { Prompt } from './fakeData';

interface PromptHistoryTableRowProps {
  prompt: Prompt;
}

function PromptHistoryTableRow({ prompt }: PromptHistoryTableRowProps) {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <tr>
      <TableCell size="sm">{prompt.date}</TableCell>
      <TableCell textLeft size="xl">
        {prompt.prompt}
      </TableCell>
      <TableCell size="sm">
        <TableButton blue onClick={() => handleCopyClipBoard(prompt.prompt)}>
          복사
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default PromptHistoryTableRow;
