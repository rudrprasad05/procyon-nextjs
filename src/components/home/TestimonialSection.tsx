import React from "react";
import ClientTestimonial from "./ClientTestimonial";

export default function TestimonialSection() {
  return (
    <div className="mb-10 md:mb-28">
      <p className="text-white text-3xl md:text-5xl text-center font-extrabold mb-10">
        What Our Satisfied Clients Have To Say
      </p>

      <div className="grid h-30vw w-5/6 md:w-4/5 relative grid-cols-1 md:grid-cols-3 mx-auto gap-10 services-cont">
        <ClientTestimonial
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
        />

        <div className="planet w-full md:w-1/2 absolute -bottom-1/4 md:-bottom-2/3 -left-2/3 md:-left-1/3 z-0 blur-sm rotate-45">
          <img
            src="/images/pink-planet.png"
            alt=""
            className="w-full relative glow4"
            id="pink-planet"
          />
        </div>
      </div>
    </div>
  );
}
