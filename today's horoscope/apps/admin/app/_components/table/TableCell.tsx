import React, { PropsWithChildren } from 'react';

interface TableCellProps {
  size?: 'sm' | 'md' | 'lg';
  textLeft?: boolean;
}

function TableCell({ children, size, textLeft }: PropsWithChildren<TableCellProps>) {
  return (
    <td
      className={`h-fit ${size === 'lg' && 'w-[800px]'} ${size === 'md' && 'w-[500px]'} ${size === 'sm' && 'w-[100px]'} px-2 py-2 border-b border-gray-200 bg-white text-md ${textLeft ? 'text-left' : 'text-center'}`}>
      <div className="max-h-[250px] overflow-y-scroll">{children}</div>
    </td>
  );
}

export default TableCell;
