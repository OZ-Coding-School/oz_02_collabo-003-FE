'use client';

import Link from 'next/link';
import React from 'react';
import routes from '../../_constants/routes';
import useFunctionStore from '../../_stores/useFucntionStore';
import { usePathname } from 'next/navigation';

interface SidebarTabProps {
  content: TabType;
  href?: string;
}

function SidebarTab({ content, href }: SidebarTabProps) {
  const { isOpenedFunction, setIsOpenedFunction } = useFunctionStore();
  const pathname = usePathname();

  return (
    <>
      {content === '기능 관리' ? (
        <React.Fragment>
          <button
            onClick={() => setIsOpenedFunction(!isOpenedFunction)}
            className={`relative hover:bg-blue-500 ${isOpenedFunction ? 'bg-blue-500' : 'bg-blue-400'} transition-colors text-white py-[10px] rounded-md`}>
            {content}
            <p className="absolute top-[50%] translate-y-[-50%] right-[12px] text-lg">{isOpenedFunction ? '-' : '+'}</p>
          </button>

          {isOpenedFunction && (
            <React.Fragment>
              <Link
                href={routes.PUSH_MESSAGE}
                className={`bg-blue-400 text-white hover:bg-blue-500 h-[30px] ${pathname === routes.PUSH_MESSAGE && 'bg-blue-500'} flex justify-center items-center rounded-md`}>
                푸시 메시지 관리
              </Link>

              <Link
                href={routes.CONTENTS}
                className={`bg-blue-400 text-white hover:bg-blue-500 h-[30px] ${pathname === routes.CONTENTS && 'bg-blue-500'} flex justify-center items-center rounded-md`}>
                콘텐츠 관리
              </Link>
            </React.Fragment>
          )}
        </React.Fragment>
      ) : (
        <Link
          onClick={() => setIsOpenedFunction(false)}
          href={href as string}
          className={`bg-blue-400 hover:bg-blue-500 ${pathname === href && 'bg-blue-500'} transition-colors text-white text-center py-[10px] rounded-md`}>
          {content}
        </Link>
      )}
    </>
  );
}

export default SidebarTab;
