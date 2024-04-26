import React, { Dispatch, SetStateAction } from 'react';
import TableHeader from '../../../_components/table/TableHeader';

interface PromptHistoryTableHeaderProps {
  setIsClickedHistoryButton: Dispatch<SetStateAction<boolean>>;
}

function PromptHistoryTableHeader({ setIsClickedHistoryButton }: PromptHistoryTableHeaderProps) {
  return (
    <thead>
      <tr>
        <TableHeader content="날짜" />
        <TableHeader content="프롬프트" />

        <TableHeader
          pointer
          content="닫기"
          onClick={() => {
            setIsClickedHistoryButton(false);
          }}
        />
      </tr>
    </thead>
  );
}

export default PromptHistoryTableHeader;
