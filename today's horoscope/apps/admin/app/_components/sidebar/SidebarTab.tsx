import Link from 'next/link';
import React from 'react';

interface SidebarTabProps {
  content: TabType;
}

function SidebarTab({ content }: SidebarTabProps) {
  return (
    <>
      {content === '기능 관리' ? (
        <button className="relative bg-blue-300 hover:bg-blue-400 transition-colors text-white py-[10px] rounded-md">
          {content}
          <p className="absolute top-[50%] translate-y-[-50%] right-[12px] text-lg">+</p>
        </button>
      ) : (
        <Link
          href=""
          className="bg-blue-300 hover:bg-blue-400 transition-colors text-white text-center py-[10px] rounded-md">
          {content}
        </Link>
      )}
    </>
  );
}

export default SidebarTab;
