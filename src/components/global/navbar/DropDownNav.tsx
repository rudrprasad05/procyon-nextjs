"use client";

import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavigationMenu";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

const DropDownNav = () => {
  return (
    <nav className="z-50 w-screen bg-transparent ">
      <main className="hidden md:flex z-50 items-center justify-between h-[15vh]  mx-auto w-4/5">
        <div className="flex items-center gap-5">
          <Image
            src={"/images/fav.png"}
            alt="ProcyonFiji Logo"
            height={50}
            width={50}
          />
          <div className="font-semibold text-xl">Procyon</div>
        </div>
        <div className="flex gap-10">
          <NavigationMenuDemo />
        </div>
      </main>

      <main className="flex items-center justify-between w-4/5 mx-auto pt-10 md:hidden">
        <div>Procyon</div>
        <div className="flex gap-5">
          <MobileNav>
            <Menu className="h-8 w-8" />
          </MobileNav>
        </div>
      </main>
    </nav>
  );
};

export default DropDownNav;
