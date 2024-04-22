import React, { PropsWithChildren } from 'react';

interface TableButtonProps {
  bgColor: string;
  onClick: () => void;
}

function TableButton({ children, bgColor, onClick }: PropsWithChildren<TableButtonProps>) {
  return (
    <button onClick={onClick} className={`px-4 py-1 bg-${bgColor} text-white text-md rounded-lg`}>
      {children}
    </button>
  );
}

export default TableButton;
