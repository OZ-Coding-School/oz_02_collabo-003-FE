'use client';

import Link from 'next/link';
import React, { useState } from 'react';

interface SidebarTabProps {
  content: TabType;
}

function SidebarTab({ content }: SidebarTabProps) {
  const [isClickedButton, setIsClickedButton] = useState(false);

  const handleClickButton = () => {
    setIsClickedButton(!isClickedButton);
  };

  return (
    <>
      {content === '기능 관리' ? (
        <React.Fragment>
          <button
            onClick={handleClickButton}
            className={`relative hover:bg-blue-500 ${isClickedButton ? 'bg-blue-500' : 'bg-blue-400'} transition-colors text-white py-[10px] rounded-md`}>
            {content}
            <p className="absolute top-[50%] translate-y-[-50%] right-[12px] text-lg">{isClickedButton ? '-' : '+'}</p>
          </button>
          {isClickedButton && (
            <React.Fragment>
              <Link
                href=""
                className="bg-blue-400 text-white hover:bg-blue-500 h-[30px] flex justify-center items-center rounded-md">
                푸시 메시지 관리
              </Link>
              <Link
                href=""
                className="bg-blue-400 text-white hover:bg-blue-500 h-[30px] flex justify-center items-center rounded-md">
                콘텐츠 관리
              </Link>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <Link
          href=""
          className="bg-blue-400 hover:bg-blue-500 transition-colors text-white text-center py-[10px] rounded-md">
          {content}
        </Link>
      )}
    </>
  );
}

export default SidebarTab;
