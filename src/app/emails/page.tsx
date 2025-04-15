import EmailHeader from "@/components/emails/EmailHeader";
import WhatWeOffer from "@/components/emails/WhatWeOffer";
import {
  CustomSolution,
  PlansAndPrices,
  WhatWeHavetoOffer,
} from "@/components/home/CallToActions";
import React from "react";
import Image from "next/image";
import EmailHostingPriceList from "@/components/emails/EmailHostingPriceList";

export default function Page() {
  return (
    <div>
      <EmailHeader />
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
        <CustomSolution />
        <div className="mb-24">
          <PlansAndPrices />
          <EmailHostingPriceList />
        </div>
      </div>
    </div>
  );
}
