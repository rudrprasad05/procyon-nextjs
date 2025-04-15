"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { link } from "fs";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function OurWork() {
  let arr = [
    {
      image: "w1.png",
      text: "rudrprasad.com",
      type: "Personal Portfolio",
      link: "https://rudrprasad.com",
    },
    {
      image: "w2.png",
      text: "Goshawk Fiji",
      type: "E-Commerce",
      link: "https://goshawkfiji.com",
    },
    {
      image: "w6.png",
      text: "MC Tech Computers",
      type: "E-Commerce",
      link: "https://mctech-port.vercel.app/",
    },
    {
      image: "w4.png",
      text: "Computer One",
      type: "E-Commerce",
      link: "https://computerone.netlify.app",
    },
    {
      image: "w3.png",
      text: "Kant's Rentals",
      type: "E-Commerce",
      link: "https://kantsrentals.netlify.app/",
    },
    {
      image: "w5.png",
      text: "Bismuth Web Designs",
      type: "Gallery",
      link: "https://bismuthweb.netlify.app/",
    },
  ];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-3/5 mx-auto mb-24" id="ourwork">
      <p
        className="text-3xl md:text-5xl text-center font-extrabold mb-10"
        id="contact"
      >
        What We Have to Offer
      </p>
      <Carousel setApi={setApi} className="">
        <CarouselContent className="h-fit">
          {arr.map((item, i) => (
            <CarouselItem
              key={i}
              className="relative flex justify-center items-center h-fit"
            >
              <div className="absolute top-4 left-10">
                <div className="text-3xl">{item.text}</div>
                <div className="mb-2 text-lg text-white/80">{item.type}</div>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonVariants({
                    variant: "outline",
                  })}`}
                >
                  View
                </Link>
              </div>
              <Image
                src={`https://bucket.procyonfiji.com/procyon/${item.image}`}
                alt={item.image + " image"}
                width={500}
                className="w-full object-cover rounded-md shadow-md border-1 border-purple-500"
                height={0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current - 1 ? "bg-orange-500" : "bg-white/50"
              }`}
              onClick={() => {
                api?.scrollTo(i);
              }}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
