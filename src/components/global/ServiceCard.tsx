import { LucideIcon, MoveRight } from "lucide-react";
import Image from "next/image";
// components/ServiceCard.jsx

import Link from "next/link";

import CircleDesign from "./CircleDesign";

interface ServiceCardProps {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path?: string;
  desc: string;
  learnMore?: string;
}

export default function ServiceCard({
  name,
  Icon,
  path,
  desc,
  learnMore,
}: ServiceCardProps) {
  if (path?.length === 0 || !path) {
    return (
      <div className="z-10 relative flex items-center rounded-md bg-purple-800 p-3 overflow-clip border border-purple-500">
        <div className="w-full h-full grow flex flex-col">
          <Icon className="w-10 h-10 stroke-1 text-white" />
          <p className="text-white text-2xl z-10 font-extrabold h-min">
            {name}
          </p>
          <p className="grow text-white/80 z-10 mb-10 mt-6">{desc}</p>
          {learnMore && (
            <div
              className="h-min text-white/80 flex z-10 mt-auto relative"
              id="learn_more"
            >
              <div className="flex items-center">
                <p className="text-sm">{learnMore}</p>
                <span className="ml-2">
                  <MoveRight className="w-6 h-6" />
                </span>
              </div>
            </div>
          )}

          <CircleDesign />
        </div>
      </div>
    );
  }
  return (
    <div className="z-10 relative flex items-center rounded-md bg-purple-800 p-3 overflow-clip border border-purple-500">
      <Link prefetch={true} href={path} className="block grow h-full">
        <div className="w-full h-full grow flex flex-col">
          <Icon className="w-10 h-10 stroke-1 text-white" />
          <p className="text-white text-2xl z-10 font-extrabold h-min">
            {name}
          </p>
          <p className="grow text-white/80 z-10 mb-10 mt-6">{desc}</p>
          <div
            className="h-min text-white/80 flex z-10 mt-auto relative"
            id="learn_more"
          >
            <div className="flex items-center">
              <p className="text-sm">{learnMore}</p>
              <span className="ml-2">
                <MoveRight className="w-6 h-6" />
              </span>
            </div>
          </div>
          <CircleDesign />
        </div>
      </Link>
    </div>
  );
}
