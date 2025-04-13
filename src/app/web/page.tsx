import React from "react";
import { ScrollEffect } from "./ScrollEffect";
import { Button } from "@/components/ui/button";
import { WhatWeHavetoOffer } from "@/components/home/CallToActions";
import ServicesCard from "@/components/global/ServiceCard";
import {
  Cog,
  DollarSign,
  Globe,
  Image,
  Mail,
  Paperclip,
  Shield,
  User2,
} from "lucide-react";
import { SiWordpress } from "@icons-pack/react-simple-icons";

export default function Page() {
  return (
    <div>
      <div className="relative h-[80vh] py-6 flex flex-col md:flex-row items-center justify-evenly m-auto w-full md:w-4/5 hero">
        <div className="w-11/12 md:w-1/2 z-10 gap-10 opacity-100 flex flex-col justify-center relative">
          <h1 className="text-4xl md:text-6xl">
            Create a <span className="text-orange-500">Stella</span> Web
            Experience
          </h1>
          <div className="flex justify-between gap-6 h-min w-full md:w-min">
            <Button className="w-full btn font-semibold tracking-wider burningBtn">
              Pricing
            </Button>

            <Button
              variant={"ghost"}
              className="w-full btn font-semibold tracking-wider border-2 border-amber-600"
            >
              Features
            </Button>
          </div>
        </div>
        <ScrollEffect />
      </div>
      <div>
        <WhatWeHavetoOffer />
        <div className="md:grid-cols-3 grid grid-cols-1 gap-10 w-4/5 mx-auto mb-28">
          <ServicesCard
            name="WordPress"
            Icon={SiWordpress}
            desc="Get a custom WordPress website that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
          <ServicesCard
            name="E-Commerce"
            Icon={DollarSign}
            desc="Grow your business with a custom e-commerce website that is fast, secure, and easy to manage. Add providers like MPaisa, MyCash, Visa and MasterCard"
          />
          <ServicesCard
            name="Custom Website"
            Icon={Cog}
            desc="Get a custom website, built using the latest technologies, that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
          <ServicesCard
            name="Authentication"
            Icon={User2}
            desc="Get a custom WordPress website that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
          <ServicesCard
            name="Free Emails & Domain"
            Icon={Mail}
            desc="Get a free 2GB email inbox and custom .com domain with every website purchase"
          />
          <ServicesCard
            name="Free Consultation"
            Icon={Paperclip}
            desc="Get a custom WordPress website that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
          <ServicesCard
            name="Image & Video"
            Icon={Image}
            desc="Get a custom WordPress website that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
          <ServicesCard
            name="Security & Backup"
            Icon={Shield}
            desc="Get a custom WordPress website that is fast, secure, and easy to manage. Intergrate with your existing systems or create something new, we can help."
          />
        </div>
      </div>
    </div>
  );
}
