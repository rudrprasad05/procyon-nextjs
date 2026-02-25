import Header from "@/components/apps/Header";
import WhatWeOffer from "@/components/apps/WhatWeOffer";
import {
  CustomPrices,
  LookingForANework,
  WhatWeHavetoOffer,
} from "@/components/home/CallToActions";
import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mb-24">
      <Header />
      <div className="relative">
        <WhatWeHavetoOffer />
        <WhatWeOffer />

        <div className="absolute z-0 hidden md:block md:-left-20 md:top-1/5  blur-xs ">
          <Image
            src={"/images/asteroid.png"}
            alt="orange planet"
            width={200}
            height={200}
            className="rotate-45 z-0 relative w-[400px] h-[400px] glow2"
          />
        </div>
      </div>
      <CustomPrices />
    </div>
  );
}
