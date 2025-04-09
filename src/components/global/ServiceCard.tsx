// components/ServiceCard.jsx

import Link from "next/link";
import Image from "next/image";
import CircleDesign from "./CircleDesign";

interface ServiceCardProps {
  name: string;
  svg: string;
  path: string;
  desc: string;
  learnMore: string;
}

export default function ServiceCard({
  name,
  svg,
  path,
  desc,
  learnMore,
}: ServiceCardProps) {
  return (
    <div className="z-10 relative flex items-center rounded-md bg-purple-800 p-3 overflow-clip border border-purple-500">
      <Link href={path} className="block grow h-full">
        <div className="w-full h-full grow flex flex-col">
          <div>
            <Image
              src={svg}
              alt=""
              className="w-12 h-12"
              width={50}
              height={50}
            />
          </div>
          <p className="text-white text-2xl font-extrabold h-min">{name}</p>
          <p className="grow text-white/80 mb-10 mt-6">{desc}</p>
          <div
            className="h-min text-white/80 flex z-10 mt-auto relative"
            id="learn_more"
          >
            <div className="flex items-center">
              <p className="text-sm">{learnMore}</p>
              <span className="ml-2">
                <Image
                  src="/images/svg/right-arrow.svg"
                  alt=""
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          </div>
          <CircleDesign />
        </div>
      </Link>
    </div>
  );
}
