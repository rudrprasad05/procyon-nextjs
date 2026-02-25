import Header from "@/components/custom/Header";
import WhatWeOffer from "@/components/custom/WhatWeOffer";
import {
  CustomPrices,
  LookingForANework,
  WhatWeHavetoOffer,
} from "@/components/home/CallToActions";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mb-24">
      <Header />
      <LookingForANework />

      <div className="relative">
        <WhatWeHavetoOffer />
        <WhatWeOffer />

        <div className="absolute hidden md:block md:-left-20 md:top-1/4  blur-xs ">
          <Image
            src={"/images/orange-planet.png"}
            alt="orange planet"
            width={200}
            height={200}
            className="rotate-45 w-[400px] h-[400px] glow2"
          />
        </div>
      </div>
      <CustomPrices />
    </div>
  );
}
