import React from 'react';

interface TabHeaderProps {
  content?: string;
}

function TableHeader({ content }: TabHeaderProps) {
  return (
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-md font-semibold text-gray-600 uppercase tracking-wider">
      {content}
    </th>
  );
}

export default TableHeader;
