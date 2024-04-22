import Image from 'next/image';
import React from 'react';
import { Logo } from '../../_images';
import HeaderButtonSection from './HeaderButtonSection';

function Header() {
  return (
    <header className="h-[150px] relative flex justify-center items-center">
      <Image src={Logo} alt="Logo" />

      <HeaderButtonSection />
    </header>
  );
}

export default Header;
