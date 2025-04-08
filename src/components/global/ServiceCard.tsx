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
    <div className="services-cards service z-10">
      <Link href={path} className="block">
        <div>
          <div>
            <Image
              src={svg}
              alt=""
              className="service-card-img"
              width={100}
              height={100}
            />
          </div>
          <p className="text-white text-2xl font-extrabold h-min">{name}</p>
          <p className="grow text-secondary-color mb-10 mt-6">{desc}</p>
          <div className="h-min text-secondary-color flex" id="learn_more">
            <div className="flex items-center">
              <p>{learnMore}</p>
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
