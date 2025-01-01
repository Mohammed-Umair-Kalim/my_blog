"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import heart from "../../public/images/heart.png";
import user from "../../public/images/user.png";

import menuIcon from "../../public/images/menu.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return <nav className="flex justify-between items-center px-6 md:px-16 py-4 relative">
      {/* Menu Links for larger screens */}
      <ul className="hidden md:flex space-x-20 font-semibold text-white">
        <li className="hover:text-[#ff3d0d] cursor-pointer text-[#560dff]">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-[#560dff] text-[#ff3d0d] cursor-pointer">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:text-[#0dff19] text-[#ffd30d] cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        
      </ul>

      {/* Burger Menu Icon for small screens */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src={menuIcon} alt="Menu" width={28} height={28} />
      </button>

      {/* Burger Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 z-50 md:hidden">
          <li
            className="hover:text-[#ff3d0d] cursor-pointer text-[#560dff]"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="hover:text-[#560dff] text-[#ff3d0d] cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
            className="hover:text-[#0dff19] text-[#ffd30d] cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}

      <div className="flex items-center space-x-10">
        {/* alert icon */}
        <button>
          <Link href="/signIn">
            <Image 
              src={user} 
              alt="User" 
              width={28} 
              height={28}
            />
          </Link>
        </button>

        <button>
          <Link href="/blog">
            <Image
              src={heart}
              alt="heart-icon"
              width={28} 
              height={28}
            />
          </Link>
        </button>
      </div>
    </nav>
};

export default NavBar;
