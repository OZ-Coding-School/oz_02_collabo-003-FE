import React from 'react';

interface TableCellProps {
  children: React.ReactNode;
}

function TableCell({ children }: TableCellProps) {
  return <td className="px-2 py-2 border-b border-gray-200 bg-white text-md">{children}</td>;
}

export default TableCell;
