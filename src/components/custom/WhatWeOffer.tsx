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
        name="Point of Sale System"
        Icon={HandCoins}
        desc="Get a custom point of sale system that is fast, secure, and easy to manage. Perfect for retail and restaurants."
      />
      <ServicesCard
        name="Fleet Management"
        Icon={Truck}
        desc="Manage your fleet with our custom fleet management system. Track vehicles, monitor performance, and optimize routes."
      />
      <ServicesCard
        name="Inventory Management"
        Icon={Box}
        desc="Manage your inventory with our custom inventory management system. Track stock levels, manage orders, and optimize supply chains."
      />
      <ServicesCard
        name="App Development"
        Icon={Rocket}
        desc="Get a custom mobile app that is fast, secure, and easy to manage. Perfect for iOS and Android."
      />
      <ServicesCard
        name="CRM System"
        Icon={BoxesIcon}
        desc="Manage your customer relationships with our custom CRM system. Track leads, manage sales, and optimize customer interactions."
      />
      <ServicesCard
        name="HR Management System"
        Icon={User2}
        desc="Manage your human resources with our custom HR management system. Track employees, manage payroll, and optimize HR processes."
      />
    </div>
  );
}
