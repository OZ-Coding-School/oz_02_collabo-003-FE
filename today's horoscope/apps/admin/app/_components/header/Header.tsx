import Image from 'next/image';
import React from 'react';
import { Logo } from '../../_images';
import LogoutButton from './LogoutButton';

function Header() {
  return (
    <header className="w-[1440px] h-[150px] mx-auto relative flex justify-center items-center">
      <Image src={Logo} alt="Logo" className="w-44" />

      <LogoutButton />
    </header>
  );
}

export default Header;
