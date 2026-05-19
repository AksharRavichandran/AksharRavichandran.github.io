import React from "react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import About from "../components/About";
import bwiImage from "../assets/bwi.jpg";

export default function AboutPage() {
  return (
    <main className="page-main about-page about-page--viewport relative isolate flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <GradientBackground
          className="brightness-[0.72] contrast-[1.02]"
          backgroundImage={bwiImage}
          enableNoise
          noiseIntensity={1}
          noisePatternSize={90}
          noisePatternRefreshInterval={2}
          noisePatternAlpha={50}
        />
      </div>
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-black/28 via-black/10 to-black/34"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_110%_75%_at_50%_12%,rgba(255,255,255,0.08),transparent_58%)]"
        aria-hidden
      />
      <div className="relative z-[2] flex min-h-0 flex-1 flex-col">
        <About />
      </div>
    </main>
  );
}
