import React, { PropsWithChildren } from 'react';

interface TableCellProps {
  rowSpan?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textLeft?: boolean;
}

function TableCell({ children, rowSpan, size, textLeft }: PropsWithChildren<TableCellProps>) {
  return (
    <td
      rowSpan={rowSpan}
      className={`h-fit ${size === 'lg' || (size === 'xl' && 'w-[800px] py-4')} ${size === 'md' && 'w-[500px]'} ${size === 'sm' && 'w-[100px]'} px-2 py-2 border-b border-gray-200 bg-white text-md ${textLeft ? 'text-left' : 'text-center'}`}>
      <div className={`${size === 'xl' && 'max-h-[650px]'} max-h-[250px] overflow-y-auto`}>{children}</div>
    </td>
  );
}

export default TableCell;
