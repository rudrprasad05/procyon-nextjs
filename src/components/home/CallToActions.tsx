import React from "react";
import { Button } from "../ui/button";

export function ReadyToWorkWithUs() {
  return (
    <div className="w-full bg-purple-800 h-min py-5 md:py-14 mb-28">
      <div className="flex items-center flex-col md:flex-row w-4/5 bg-purple-800 h-min justify-between mx-auto">
        <p className="text-white text-2xl md:text-4xl font-extrabold h-min">
          <span className="italic">Ready</span> to work with us?
        </p>
        <div>
          <a href="#contact">
            <Button className="btn text-white font-semibold tracking-wider burningBtn h-min mt-5 md:mt-0">
              Hire Us
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function DevelopedAndDeployed() {
  return (
    <p
      className="text-white text-3xl md:text-5xl text-center flex gap-2 justify-center font-extrabold mt-28 md:mt-0 mb-10 md:mb-28 p-5"
      id="services"
    >
      <span> Developed and Deployed</span>
      <span className="text-orange-500 italic burningText text-3xl md:text-5xl">
        20+
      </span>
      <span>Websites</span>
    </p>
  );
}
