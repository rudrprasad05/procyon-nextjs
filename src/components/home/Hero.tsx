import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[85vh] flex flex-col md:flex-row items-center justify-start m-auto w-4/5">
      <div className="py-14 md:h-50v w-full md:w-1/2 text-white z-10 opacity-100 flex flex-col justify-center relative">
        <p className="h-min font-extrabold italic text-4xl md:text-6xl">
          <span className="word">Unleash</span>{" "}
          <span className="word">Your</span> <br />
          <span className="word">Digital</span>{" "}
          <span className="word">Potential</span>
        </p>
        <p className="heroDescription h-min text-2xl my-5">
          Procyon: your destination for expert website development and stellar
          graphic design solutions.
        </p>
        <div className="flex md:flex-row flex-row h-min w-max">
          <div className="">
            <Link href="#contact">
              <Button className="cursor-pointer btn font-semibold tracking-wider burningBtn mr-5 md:mb-0 mb-2">
                Free Consultation
              </Button>
            </Link>
          </div>
          <div className="">
            <Link href="/webdevelopment#ourwork">
              <Button className="cursor-pointer btn bg-transparent hover:burningBtn font-semibold tracking-wider border-2 border-amber-600">
                Our Works
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img
          className="glow transform -scale-x-100 m-auto"
          src="/images/hero.webp"
          alt=""
        />
      </div>
    </div>
  );
}
