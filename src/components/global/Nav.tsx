"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <nav className="md:flex items-center justify-between md:p-5 text-white h-10v bg-transparent z-20 w-full absolute top-0 left-0">
      <div className="ml-5 font-semibold text-xl flex items-center justify-between">
        <Link href="/">Procyon</Link>
        <svg
          className={`h-16 w-16 ham hamRotate ham1 block md:hidden ${
            open ? "active" : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
          onClick={toggle}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </div>

      <ul
        className={`text-white bg-purple-950 md:bg-transparent absolute md:relative transition w-full md:w-auto left-0 md:p-0 p-3 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } flex items-center flex-col md:flex-row z-50`}
      >
        <li className="md:mr-5 mt-2 md:mt-0 hover:text-procyon-pink transition">
          <Link href="/">Home</Link>
        </li>
        <li className="md:mr-5 mt-2 md:mt-0 hover:text-procyon-pink transition">
          <Link href="/#services">Services</Link>
        </li>
        <li className="md:mr-5 mt-2 md:mt-0 hover:text-procyon-pink transition">
          <Link href="/about">About</Link>
        </li>
        <li className="md:mr-5 mt-2 md:mt-0 hover:text-procyon-pink transition">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
