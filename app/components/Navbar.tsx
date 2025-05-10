'use client'
import React, { useState } from 'react'
import { PiHamburgerFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { _NavBarData } from '@/utils/_index';
import Link from 'next/link';
import TitleAnimation from './TitleAnimation';


const Navbar = () => { 
  const [active, setActive] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 relative z-50">
      {/* Logo */}
      <div>
        <Link href={'/'}>
        <h2 className="text-3xl font-semibold hover:scale-100 text-[rgb(124,124,179)]"><TitleAnimation title='Chalat Rahul' /></h2>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50" onClick={() => setActive(!active)}>
        {active ? (
          <IoClose className="text-3xl cursor-pointer" />
        ) : (
          <PiHamburgerFill className="text-3xl cursor-pointer" />
        )}
      </div>

      {/* Navigation Links */}
      <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center gap-4 transition-all duration-300 ease-in-out 
        ${active ? "flex flex-col items-center py-4 shadow-md" : "hidden md:flex"}`}>
          {
            _NavBarData.map((navItem,index)=>{
              return(
                <Link href={navItem.link} key={index}>
<li  className="list-none px-4 py-2 cursor-pointer hover:text-[#5b5bae]">{navItem.title}</li>
                </Link>
              )
            })
          }
      </ul>
    </nav>
  );
}

export default Navbar;
