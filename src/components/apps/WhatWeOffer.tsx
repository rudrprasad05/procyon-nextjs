"use client";

import ServicesCard from "@/components/global/ServiceCard";
import { Box, BoxesIcon, HandCoins, Rocket, Truck, User2 } from "lucide-react";

export default function WhatWeOffer() {
  return (
    <div
      className="md:grid-cols-3 grid grid-cols-1 gap-10 w-4/5 mx-auto mb-28 relative z-10"
      id="features"
    >
      <ServicesCard
        name="Android App"
        Icon={HandCoins}
        desc="An Android app that is fast, secure, and easy to manage"
      />
      <ServicesCard
        name="iOS App"
        Icon={Truck}
        desc="An iOS app that is fast, secure, and easy to manage"
      />
      <ServicesCard
        name="Web App"
        Icon={Box}
        desc="A web app that is fast with instant updates"
      />
    </div>
  );
}
