import SearchBar from "@/components/domains/SearchBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function Page() {
  return (
    <div className="w-4/5 mx-auto py-12 mb-24">
      <div className="flex flex-col gap-4">
        <div className="font-extrabold text-4xl md:text-6xl text-white">
          Register A <span className="text-orange-500 italic">Domain</span>
        </div>
        <div className="text-xl text-white/80">
          Start your journey with a custom domain
        </div>
      </div>
      <SearchBar />
    </div>
  );
}
