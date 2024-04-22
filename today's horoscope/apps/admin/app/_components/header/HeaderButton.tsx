import React from 'react';

interface HeaderButtonProps {
  content: '홈으로' | '로그아웃';
}

function HeaderButton({ content }: HeaderButtonProps) {
  return <button className="font-medium">{content}</button>;
}

export default HeaderButton;
