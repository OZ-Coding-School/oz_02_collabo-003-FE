'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import routes from '../../_constants/routes';

interface HeaderButtonProps {
  content: '홈으로' | '로그아웃';
  onClick: () => void;
}

function HeaderButton({ content, onClick }: HeaderButtonProps) {
  const pathname = usePathname();
  if (content === '홈으로' && pathname === routes.HOME) return;

  return (
    <button onClick={onClick} className="font-medium">
      {content}
    </button>
  );
}

export default HeaderButton;
