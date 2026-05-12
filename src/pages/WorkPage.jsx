import React from "react";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import atlImage from "../assets/atl.jpg";

export default function WorkPage() {
  return (
    <main className="page-main work-page relative isolate flex min-h-0 flex-1 flex-col">
      <div className="pointer-events-none fixed inset-0 z-0">
        <GradientBackground
          className="brightness-[0.72] contrast-[1.02]"
          backgroundImage={atlImage}
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
      <div className="relative z-[2]">
        <ScrollExpandMedia
          hideMedia
          embedded
          animateTitleChars
          title="Experiences"
          scrollHintArrow
          contentSectionClassName="flex w-full flex-col px-0 py-4 md:py-6"
        >
          <Experience />
          <Projects />
        </ScrollExpandMedia>
      </div>
    </main>
  );
}
