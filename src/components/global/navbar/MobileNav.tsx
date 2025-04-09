"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import React, { useContext } from "react";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";

interface props {
  children?: React.ReactNode;
}

const MobileNav: React.FC<props> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>McTech Computers</SheetTitle>
          <SheetDescription className="relative h-full"></SheetDescription>
        </SheetHeader>
        <div>
          <ul>
            <li>
              <Link href="/" legacyBehavior passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" legacyBehavior passHref>
                Products
              </Link>
            </li>
          </ul>
        </div>
        <SheetFooter className="absolute bottom-0 left-0 p-8 w-full">
          <div className="flex justify-between w-full">
            <ThemeSwitcher />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
