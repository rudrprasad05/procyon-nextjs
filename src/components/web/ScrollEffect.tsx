"use client";

import { useEffect } from "react";

export const ScrollEffect = () => {
  useEffect(() => {
    const ast = document.getElementById("ast");
    const astDiv = document.getElementById("ast-div");

    const handleScroll = () => {
      let value = window.scrollY;

      if (astDiv) {
        astDiv.style.transform = `translateX(${value * 0.5}px)`;
      }

      if (ast) {
        ast.style.transform = `translateY(${-value * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 relative" id="ast-div">
      <img
        alt="a planet"
        className="w-2/3 m-auto relative"
        src="/images/rocket.png"
        id="ast"
      />
    </div>
  );
};
