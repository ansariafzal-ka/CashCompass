import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white flex justify-between items-center border-b sticky top-0">
      <Link href="/" className="text-xl font-bold text-green-700">
        CashCompass
      </Link>
      {/* <ul className="w-[500px] flex justify-evenly items-center">
        <li>
          <Link href="#home" className="font-medium hover:text-green-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="#features" className="font-medium hover:text-green-700">
            Features
          </Link>
        </li>
        <li>
          <Link href="#about" className="font-medium hover:text-green-700">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-medium hover:text-green-700">
            Contact
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
