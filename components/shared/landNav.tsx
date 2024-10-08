"use client"

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const LandNav = () => {

  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-md transform transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <ul className="flex bg-primary h-full p-4 justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/assets/images/Krishi-bazaar-logo.jpg"}
            alt="logo"
            width={25}
            height={25}
            className=" object-contain rounded-full"
          />
        </Link>
        <div className="flex gap-5">
          <Link href={"/about"} className="font-semibold">
            About
          </Link>
          <Link href={"/contact"} className="font-semibold">
            Contact
          </Link>
        </div>
        <div>
          <Link href={"/auth/login"} className="bg-white text-slate-700 font-medium p-2 rounded-lg">
            ENTER
          </Link>
        </div>
      </ul>
    </header>
  )
}

export default LandNav 