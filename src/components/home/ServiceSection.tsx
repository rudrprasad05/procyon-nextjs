import React from "react";
import ServicesCard from "@/components/global/ServiceCard";

export default function ServiceSection() {
  return (
    <div className="grid h-30vw w-5/6 md:w-4/5 relative grid-cols-1 md:grid-cols-3 mx-auto gap-10 services-cont mb-28">
      <div className="absolute w-2/12 z-50 opacity-100 -bottom-1/2 -right-20">
        <img
          src="/images/star.png"
          alt=""
          className="w-full relative glow2"
          id="star"
        />
      </div>

      <ServicesCard
        name="Web Development"
        svg="/images/svg/computer.svg"
        path="/webdevelopment"
        desc="Transform Your Vision into Reality with Our Cutting-Edge Web Development Services!"
        learnMore="Our Websites"
      />

      <ServicesCard
        name="Graphic Design"
        svg="/images/svg/graphics.svg"
        path="/design"
        desc="Unleash Creative Brilliance: Elevate Your Brand with Our Captivating Graphic Design Services!"
        learnMore="Our Designs"
      />

      <ServicesCard
        name="Computer Repairs"
        svg="/images/svg/gear.svg"
        path="/repairs"
        desc="Revive Your Digital Lifeline: Experience Unparalleled Computer Repair Services!"
        learnMore="More on Repairs"
      />

      <div className="planet w-4/5 md:w-4/12 absolute -bottom-1/3 -left-1/4 z-0 blur-xs rotate-45">
        <img
          src="/images/yellow-planet.png"
          alt=""
          className="w-full relative glow2"
          id="yellow-planet"
        />
      </div>
    </div>
  );
}
