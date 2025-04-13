"use client";

import { Check, Cloud, Crown, Sparkles, X } from "lucide-react";
import { Separator } from "../ui/separator";

export default function PricingTable() {
  const features = [
    {
      name: "Maintanence",
      starter: "$10 / month",
      business: "$50 / month",
      cloud: "$100 / month",
    },
    {
      name: "Storage",
      starter: "5 GB",
      business: "50 GB",
      cloud: "Unlimited",
    },

    {
      name: "Website Design",
      starter: "true",
      business: "true",
      cloud: "true",
    },
    {
      name: "Responsive Layout",
      starter: "true",
      business: "true",
      cloud: "true",
    },

    {
      name: "Custom Domain",
      starter: "true",
      business: "true",
      cloud: "true",
    },
    {
      name: "Emails",
      starter: "false",
      business: "1 x 2GB",
      cloud: "10 x 5GB",
    },
    {
      name: "SEO Optimization",
      starter: "false",
      business: "true",
      cloud: "true",
    },
    {
      name: "Content Management",
      starter: "false",
      business: "true",
      cloud: "true",
    },
    {
      name: "SSL Certificate",
      starter: "false",
      business: "true",
      cloud: "true",
    },
    {
      name: "Backups",
      starter: "false",
      business: "Weekly",
      cloud: "Daily",
    },
    {
      name: "E-commerce Integration",
      starter: "false",
      business: "false",
      cloud: "true",
    },
    {
      name: "Custom API Integration",
      starter: "false",
      business: "false",
      cloud: "true",
    },
    {
      name: "24/7 Support",
      starter: "false",
      business: "false",
      cloud: "true",
    },
    {
      name: "Performance Monitoring",
      starter: "false",
      business: "true",
      cloud: "true",
    },
    {
      name: "Backup & Security",
      starter: "false",
      business: "true",
      cloud: "true",
    },
  ];

  return (
    <div className="w-4/5 mx-auto py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Features column */}
        <div className="space-y-2 pt-18">
          <h2 className="">
            Development{" "}
            <span className="text-sm text-gray-500">(one-time payment)</span>
          </h2>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature.name} className="h-12 flex items-center">
                {feature.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Starter Plan */}
        <div className="h-full relative flex flex-col border-x border-purple-800">
          <div className="relative flex items-center rounded-md p-3 overflow-clip text-2xl">
            <div className="text-center w-full flex items-center gap-3 justify-center text-white font-medium">
              <Sparkles className="inline h-6 w-6 text-orange-500" />
              Starter
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-3xl font-bold">$299</p>
          </div>
          <ul className="my-2 space-y-2">
            {features.map((feature) => (
              <li
                key={feature.name}
                className="h-12 flex justify-center items-center"
              >
                <HandleInput name={feature.starter} />
              </li>
            ))}
          </ul>
          <button className="m-auto w-4/5 py-2 px-4 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Business Plan */}
        <div className="relative h-full flex flex-col ">
          <div className="relative flex items-center rounded-md p-3 overflow-clip text-2xl">
            <div className="text-center w-full flex items-center gap-3 justify-center text-white font-medium">
              <Crown className="inline h-6 w-6 text-orange-500" />
              Business
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-3xl font-bold">$599</p>
          </div>
          <ul className="my-2 space-y-2">
            {features.map((feature) => (
              <li
                key={feature.name}
                className="h-12 flex justify-center items-center"
              >
                <HandleInput name={feature.business} />
              </li>
            ))}
          </ul>
          <button className="m-auto w-4/5  py-2 px-4 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Cloud Plan */}
        <div className="relative flex h-full flex-col border-x border-purple-800">
          <div className="relative flex items-center rounded-md  p-3 overflow-clip ">
            <div className="text-center text-2xl w-full flex items-center gap-3 justify-center text-white font-medium">
              <Cloud className="inline h-6 w-6 text-orange-500" />
              Cloud
            </div>
          </div>
          <div className="mt-2 text-center">
            <p className="text-3xl font-bold">$1199</p>
          </div>
          <ul className="my-2 space-y-2">
            {features.map((feature) => (
              <li
                key={feature.name}
                className="h-12 flex justify-center items-center"
              >
                <HandleInput name={feature.cloud} />
              </li>
            ))}
          </ul>
          <button className="m-auto w-4/5 py-2 px-4 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function HandleInput({ name }: { name: string }) {
  if (name.toLowerCase() == "true") {
    return <Check className="h-5 w-5 text-green-500" />;
  } else if (name.toLowerCase() == "false") {
    return <X className="h-5 w-5 text-red-500" />;
  }
  return <>{name}</>;
}
