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
            <Button
              size={"lg"}
              className="text-white font-semibold cursor-pointer tracking-wider burningBtn text-xl mt-5 md:mt-0"
            >
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
      className="text-white text-3xl md:text-5xl text-center flex gap-2 justify-center font-extrabold mt-28 md:mt-0 mb-10 md:mb-12 p-5"
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

export function TalkToUs() {
  return (
    <>
      <p
        className="text-white text-3xl md:text-5xl text-center font-extrabold mb-10"
        id="contact"
      >
        <span className="text-orange-500 italic">Interested? </span>Talk to Us
      </p>
      <div className="relative z-50">{/* <Contact /> */}</div>
    </>
  );
}

export function Register() {
  return (
    <>
      <p
        className="text-white text-3xl md:text-5xl text-center font-extrabold mb-10"
        id="contact"
      >
        <span className="text-orange-500 italic">Interested? </span>Talk to Us
      </p>
      <div className="relative z-50">{/* <Contact /> */}</div>
    </>
  );
}
