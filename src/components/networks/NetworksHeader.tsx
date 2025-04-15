"use client";

import React from "react";
import { Button } from "../ui/button";

export default function EmailHeader() {
  return (
    <div className="relative h-[75vh] mb-24 py-6 flex flex-col md:flex-row items-center justify-evenly m-auto w-full md:w-4/5 hero">
      <div className="w-11/12 md:w-1/2 z-10 gap-10 opacity-100 flex flex-col justify-center relative">
        <h1 className="text-4xl md:text-6xl">
          Professional <span className="text-orange-500 italic">Emails</span>,
          Without the Hassle.
        </h1>
        <div className="flex justify-between gap-6 h-min w-full md:w-min">
          <Button className="w-full btn font-semibold tracking-wider burningBtn">
            Pricing
          </Button>

          <Button
            variant={"ghost"}
            className="w-full btn font-semibold tracking-wider border-2 border-amber-600"
          >
            Features
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative" id="ast-div">
        <img
          alt="a planet"
          className="w-2/3 m-auto relative"
          src="/images/waving.png"
          id="ast"
        />
      </div>
    </div>
  );
}
