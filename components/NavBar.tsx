import Link from "next/link";
import React from "react";
import MobileSideBar from "./utils/MobileSideBar";

const NavBar = () => {
  return (
    <nav
      id="home"
      className="w-full px-6 py-4 bg-white flex justify-between items-center border-b"
    >
      <Link href="/" className="text-xl font-bold text-green-700">
        CashCompass
      </Link>
      <MobileSideBar />
    </nav>
  );
};

export default NavBar;
