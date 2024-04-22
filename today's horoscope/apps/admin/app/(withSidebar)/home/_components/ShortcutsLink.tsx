import Link from 'next/link';
import React from 'react';

interface ShortcutsLinkProps {
  href: string;
}

function ShortcutsLink({ href }: ShortcutsLinkProps) {
  return (
    <Link
      href={href}
      className="absolute bottom-4 right-4 w-24 h-8 flex justify-center items-center bg-blue-300 text-white rounded-md">
      바로 가기
    </Link>
  );
}

export default ShortcutsLink;
