import React from 'react';

interface TabHeaderProps {
  pointer?: boolean;
  content?: string;
  onClick?: () => void;
}

function TableHeader({ content, onClick, pointer }: TabHeaderProps) {
  return (
    <th
      onClick={onClick}
      className={`px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-md font-semibold text-gray-600 uppercase tracking-wider text-center ${pointer && 'cursor-pointer'}`}>
      {content}
    </th>
  );
}

export default TableHeader;
