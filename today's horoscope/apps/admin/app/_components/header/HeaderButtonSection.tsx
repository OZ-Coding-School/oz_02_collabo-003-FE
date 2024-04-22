'use client';

import React from 'react';
import HeaderButton from './HeaderButton';
import { usePathname, useRouter } from 'next/navigation';

function HeaderButtonSection() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === '/') return;

  const backToHome = () => {
    router.push('/home');
  };

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <section className="absolute bottom-5 right-20 flex gap-[60px]">
      <HeaderButton content="홈으로" onClick={backToHome} />
      <HeaderButton content="로그아웃" onClick={handleLogout} />
    </section>
  );
}

export default HeaderButtonSection;
