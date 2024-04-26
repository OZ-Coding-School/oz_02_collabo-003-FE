import React, { ChangeEvent, useRef, useState } from 'react';
import TableCell from '../../../../../../_components/table/TableCell';
import { TodayContent } from './fakeData';
import TableButton from '../../../../../../_components/table/TableButton';

interface ContentsTableRowProps {
  content: TodayContent;
  index: number;
}

function ContentsTableRow({ content, index }: ContentsTableRowProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(content.content);
  const [isClickedButton, setIsClickedButton] = useState(false);

  const handleClickButton = () => {
    setIsClickedButton(!isClickedButton);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <tr>
      <TableCell>{index + 1}</TableCell>
      <TableCell textLeft>
        {isClickedButton ? (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            className="w-full px-2 py-1"
          />
        ) : (
          content.content
        )}
      </TableCell>
      <TableCell>
        <TableButton isClickedButton={isClickedButton} onClick={handleClickButton}>
          {isClickedButton ? '저장' : '수정'}
        </TableButton>
      </TableCell>
    </tr>
  );
}

export default ContentsTableRow;
