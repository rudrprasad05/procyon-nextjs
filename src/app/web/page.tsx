import {
  GetADomain,
  GetAQuote,
  PlansAndPrices,
  WhatWeHavetoOffer,
} from "@/components/home/CallToActions";
import WebHostingPriceList from "@/components/home/WebHostingPriceList";
import OurWork from "@/components/web/OurWork";
import WebHeader from "@/components/web/WebHeader";
import WhatWeOffer from "@/components/web/WhatWeOffer";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <WebHeader />
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
      <GetAQuote />
      <OurWork />
      <GetADomain />
      <div className="mb-24">
        <PlansAndPrices />
        <WebHostingPriceList />
      </div>
    </div>
  );
}
