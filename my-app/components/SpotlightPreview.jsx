import React from "react";
import { Spotlight } from "./ui/spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="left-0 -top-40 md:left-60 md:-top-20"
        fill="white"
      />
    </div>
  );
}
