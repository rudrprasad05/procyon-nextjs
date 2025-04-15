import React from "react";

export default function ClientTestimonial({
  name,
  desc,
  image,
}: {
  name: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="relative rounded-md bg-purple-800 p-3 overflow-clip border border-purple-500 z-10 grid">
      <div className=" ">
        <img src="/images/svg/q.svg" alt="" className="w-8 h-8" />
      </div>
      <p className="text-white text-2xl font-bold h-min">{name}</p>
      <p className="grow text-white/80">{desc}</p>

      <div className="h-24 w-24 ml-auto mt-2 relative rounded-full overflow-clip border-2 border-purple-500">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
    </div>
  );
}
