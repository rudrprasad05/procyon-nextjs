import { Loader2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader2 />
      Loading...
    </div>
  );
}
