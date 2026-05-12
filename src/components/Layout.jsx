import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import chennaiImage from "../assets/chennai.jpg";

export default function Layout() {
  return (
    <div className="relative min-h-full">
      <div className="pointer-events-none fixed inset-0 z-0">
        <GradientBackground
          backgroundImage={chennaiImage}
          enableNoise
          noiseIntensity={1}
          noisePatternSize={90}
          noisePatternRefreshInterval={2}
          noisePatternAlpha={50}
        />
      </div>
      <div className="relative z-10 flex min-h-full flex-col">
        <Navbar />
        <div className="flex min-h-0 flex-1 flex-col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
