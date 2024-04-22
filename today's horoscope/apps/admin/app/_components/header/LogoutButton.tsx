'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import routes from '../../_constants/routes';

function LogoutButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === routes.LOGIN) return;

  const handleLogout = () => {
    router.push(routes.LOGIN);
  };

  return (
    <button onClick={handleLogout} className="absolute bottom-5 right-10 flex gap-[60px] font-medium">
      로그아웃
    </button>
  );
}

export default LogoutButton;
