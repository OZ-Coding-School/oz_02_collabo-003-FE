'use client';

import { ToastContainer, toast } from 'react-toastify';
import TableCell from '../../../_components/table/TableCell';
import TableButton from '../../table/TableButton';
import { Prompt } from './fakeData';
import React from 'react';

interface PromptHistoryTableRowProps {
  prompt: Prompt;
}

function PromptHistoryTableRow({ prompt }: PromptHistoryTableRowProps) {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('히스토리가 복사되었습니다.');
    } catch (e) {
      toast.error('복사에 실패했습니다.');
    }
  };

  return (
    <React.Fragment>
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
      <ToastContainer />
    </React.Fragment>
  );
}

export default PromptHistoryTableRow;
