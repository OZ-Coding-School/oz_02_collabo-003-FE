'use client';

import React from 'react';
import HeaderButton from './HeaderButton';
import { usePathname, useRouter } from 'next/navigation';
import routes from '../../_constants/routes';

function HeaderButtonSection() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === routes.LOGIN) return;

  const backToHome = () => {
    router.push(routes.HOME);
  };

  const handleLogout = () => {
    router.push(routes.LOGIN);
  };

  return (
    <section className="absolute bottom-5 right-20 flex gap-[60px]">
      <HeaderButton content="홈으로" onClick={backToHome} />
      <HeaderButton content="로그아웃" onClick={handleLogout} />
    </section>
  );
}

export default HeaderButtonSection;
