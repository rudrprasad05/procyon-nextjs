"use client";

import Head from "next/head";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesCard from "@/components/global/ServiceCard";
// import ClientTestimonial from "@/components/ClientTestimonial";
// import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const yellowPlanet = document.getElementById("yellow-planet");
    const pinkPlanet = document.getElementById("pink-planet");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      if (yellowPlanet && pinkPlanet) {
        yellowPlanet.style.top = -value * 0.15 + "px";
        yellowPlanet.style.left = -value * 0.15 + "px";
        pinkPlanet.style.top = -value * 0.15 + "px";
        pinkPlanet.style.left = -value * 0.15 + "px";
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      <Head>
        <title>Welcome | Procyon</title>
        <meta name="description" content="Welcome to Procyon!..." />
        <meta
          name="keywords"
          content="web development, graphic design, computer repairs, Fiji, website design"
        />
      </Head>

      <div className="relative h-screen pt-12 flex flex-col md:flex-row items-center justify-start m-auto w-4/5">
        <div className="py-14 md:h-50v w-full md:w-1/2 text-white z-10 opacity-100 flex flex-col justify-center relative">
          <p className="h-min font-extrabold italic text-4xl md:text-6xl">
            <span className="word">Unleash</span>{" "}
            <span className="word">Your</span> <br />
            <span className="word">Digital</span>{" "}
            <span className="word">Potential</span>
          </p>
          <p className="heroDescription h-min text-2xl my-5">
            Procyon: your destination for expert website development and stellar
            graphic design solutions.
          </p>
          <div className="flex md:flex-row flex-row h-min w-max">
            <div className="heroBtn">
              <a href="#contact">
                <button className="btn font-semibold tracking-wider burningBtn mr-5 md:mb-0 mb-2">
                  Free Consultation
                </button>
              </a>
            </div>
            <div className="heroBtn">
              <a href="/webdevelopment#ourwork">
                <button className="btn font-semibold tracking-wider border-2 border-amber-600">
                  Our Works
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="glow transform -scale-x-100 m-auto"
            src="/images/hero.webp"
            alt=""
          />
        </div>
      </div>

      <p
        className="text-white text-3xl md:text-5xl text-center font-extrabold mt-28 md:mt-0 mb-10 md:mb-28 p-5"
        id="services"
      >
        Developed and Deployed{" "}
        <span className="text-procyon-pink italic burningText text-3xl md:text-5xl">
          20+
        </span>{" "}
        Websites
      </p>

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

        <div className="planet w-4/5 md:w-4/12 absolute -bottom-1/3 -left-1/4 z-0 blur-sm rotate-45">
          <img
            src="/images/yellow-planet.png"
            alt=""
            className="w-full relative glow2 opacity-0"
            id="yellow-planet"
          />
        </div>
      </div>

      <div className="w-full bg-procyon-highlight-purple h-min py-5 md:py-14 mb-28">
        <div className="flex items-center flex-col md:flex-row w-4/5 bg-procyon-highlight-purple h-min justify-between mx-auto">
          <p className="text-white text-2xl md:text-4xl font-extrabold h-min">
            <span className="italic">Ready</span> to work with us?
          </p>
          <div>
            <a href="#contact">
              <button className="btn text-white font-semibold tracking-wider burningBtn h-min mt-5 md:mt-0">
                Hire Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-10 md:mb-28">
        <p className="text-white text-3xl md:text-5xl text-center font-extrabold mb-10">
          What Our Satisfied Clients Have To Say
        </p>

        <div className="grid h-30vw w-5/6 md:w-4/5 relative grid-cols-1 md:grid-cols-3 mx-auto gap-10 services-cont">
          {/* <ClientTestimonial
            name="Sarah Thopmson"
            image="/images/client_img_1.jpeg"
            desc="Working with Procyon Web Development Company was an absolute pleasure!..."
          />

          <ClientTestimonial
            name="Kevin McCallister"
            image="/images/client_img_2.jpeg"
            desc="From the moment we engaged them, their team demonstrated a deep understanding..."
          />

          <ClientTestimonial
            name="Klarke Kent"
            image="/images/client_img_3.webp"
            desc="Choosing Procyon for our website development was one of the best decisions..."
          /> */}

          <div className="planet w-full md:w-1/2 absolute -bottom-1/4 md:-bottom-2/3 -left-2/3 md:-left-1/3 z-0 blur-sm rotate-45">
            <img
              src="/images/pink-planet.png"
              alt=""
              className="w-full relative glow4 opacity-0"
              id="pink-planet"
            />
          </div>
        </div>
      </div>

      <p
        className="text-white text-3xl md:text-5xl text-center font-extrabold mb-10"
        id="contact"
      >
        Talk to Us
      </p>
      <div className="relative z-50">{/* <Contact /> */}</div>
    </>
  );
}
