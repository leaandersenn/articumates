import React from "react";
import Image from 'next/image';
import "./Header.css";

import Logo from '../../../../public/images/logo.jpg'; 

const Header = () => {
  return (
    <header className="flex justify-center p-4">
      <Image
          src={Logo} 
          height={544} 
          width={544} 
          alt="logo"
        />
    </header>
  );
};

export default Header;