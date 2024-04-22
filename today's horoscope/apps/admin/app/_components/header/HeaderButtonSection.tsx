'use client';

import React from 'react';
import HeaderButton from './HeaderButton';
import { usePathname } from 'next/navigation';

function HeaderButtonSection() {
  const pathname = usePathname();

  if (pathname === '/') return;

  return (
    <section className="absolute bottom-5 right-20 flex gap-[60px]">
      <HeaderButton content="홈으로" />
      <HeaderButton content="로그아웃" />
    </section>
  );
}

export default HeaderButtonSection;
