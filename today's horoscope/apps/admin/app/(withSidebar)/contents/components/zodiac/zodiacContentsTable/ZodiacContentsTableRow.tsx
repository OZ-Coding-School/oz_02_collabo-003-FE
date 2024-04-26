import React, { ChangeEvent, useRef, useState } from 'react';
import TableCell from '../../../../../_components/table/TableCell';
import TableButton from '../../../../../_components/table/TableButton';
import { ZodiacData } from './fakeData';

interface ZodiacContentsTableRowProps {
  zodiac: ZodiacData;
  index: number;
}

function ZodiacContentsTableRow({ zodiac }: ZodiacContentsTableRowProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValues, setInputValues] = useState<{ [key: number]: string }>({});
  const [rowId, setRowId] = useState<number | null>(null);

  const handleClickButton = (id: number) => {
    setRowId(id);
    setInputValues(prev => ({
      ...prev,
      [id]: zodiac.zodiac[id - 1].contents,
    }));
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    checkButtonClicked(id);
  };

  const checkButtonClicked = (id: number) => {
    if (rowId === id) {
      setRowId(null);
    }
  };

  const handleChange = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValues(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <React.Fragment>
      <tr>
        <TableCell rowSpan={4}>{zodiac.title}</TableCell>
        <TableCell>{zodiac.zodiac[0].year}</TableCell>
        <TableCell textLeft>
          {rowId === 1 ? (
            <input
              type="text"
              ref={inputRef}
              value={inputValues[1] || ''}
              onChange={e => handleChange(1, e)}
              className="w-full px-2 py-1"
            />
          ) : (
            zodiac.zodiac[0].contents
          )}
        </TableCell>
        <TableCell textLeft>
          <TableButton isClickedButton={rowId === 1} onClick={() => handleClickButton(1)}>
            {rowId === 1 ? '저장' : '수정'}
          </TableButton>
        </TableCell>
      </tr>
      {zodiac.zodiac.slice(1).map((item, i) => (
        <tr key={i}>
          <TableCell>{item.year}</TableCell>
          <TableCell textLeft>
            {rowId === i + 2 ? (
              <input
                type="text"
                ref={i + 2 === rowId ? inputRef : null}
                value={inputValues[i + 2] || ''}
                onChange={e => handleChange(i + 2, e)}
                className="w-full px-2 py-1"
              />
            ) : (
              item.contents
            )}
          </TableCell>
          <TableCell textLeft>
            <TableButton isClickedButton={rowId === i + 2} onClick={() => handleClickButton(i + 2)}>
              {rowId === i + 2 ? '저장' : '수정'}
            </TableButton>
          </TableCell>
        </tr>
      ))}
    </React.Fragment>
  );
}

export default ZodiacContentsTableRow;
