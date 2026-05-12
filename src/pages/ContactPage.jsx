import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import resumePdf from "../assets/AksharRavichandranGrad25-26.pdf";

const LINKS = [
  {
    href: "https://github.com/AksharRavichandran",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.instagram.com/akshar.ravi/",
    label: "Instagram (@akshar.ravi)",
    icon: "instagram",
  },
  {
    href: "mailto:akshar.ravichandran@gmail.com",
    label: "Email",
    icon: "mail",
  },
  {
    href: "https://www.linkedin.com/in/akshar-ravichandran-37678228b/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: resumePdf,
    label: "Resume (PDF)",
    icon: "resume",
  },
];

const TITLE = "Contact Me";
const TYPE_MS = 58;

function ContactTypewriterHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45, margin: "0px 0px -8% 0px" });
  const [typedLen, setTypedLen] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    setTypedLen(0);
    let n = 0;
    const id = window.setInterval(() => {
      n += 1;
      const next = Math.min(n, TITLE.length);
      setTypedLen(next);
      if (next >= TITLE.length) window.clearInterval(id);
    }, TYPE_MS);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="home-hero-scene pointer-events-none">
      <div className="home-hero-scene-intro">
        <p
          className="home-hero-headline home-hero-headline--name-only m-0 min-h-[1.15em] text-center"
          aria-label={TITLE}
        >
          <span className="home-hero-name-wrap">
            <span className="home-hero-name home-hero-name-inline inline-block text-center">
              {TITLE.slice(0, typedLen)}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
}

function ContactIcon({ name }) {
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.37 1.12 2.95.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .85-.28 2.8 1.05.81-.23 1.67-.35 2.53-.35s1.72.12 2.53.35c1.95-1.33 2.8-1.05 2.8-1.05.55 1.43.2 2.48.1 2.74.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.56 5.09.36.32.67.95.67 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 4.98 18.02 3 15.4 3H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 6 1.25 1.25 0 0 1 16 4.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.07 2.07 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "resume":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  return (
    <main className="page-main contact-route relative isolate flex min-h-0 flex-1 flex-col">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#0a0a0e]">
        <GradientBackground
          customGradient="#0e0e14"
          enableNoise
          noiseIntensity={1}
          noisePatternSize={90}
          noisePatternRefreshInterval={2}
          noisePatternAlpha={52}
          className="h-full w-full"
        />
      </div>
      <div className="relative z-[1] flex w-full flex-1 flex-col items-center justify-center px-4 py-6 min-h-0">
        <ContactTypewriterHeadline />
        <nav
          className="contact-page-icons mt-3 sm:mt-4"
          aria-label="Social and contact links"
        >
          {LINKS.map((item) => {
            const newTab = item.href.startsWith("http") || item.icon === "resume";
            return (
              <a
                key={item.label}
                className="contact-icon-link"
                href={item.href}
                aria-label={item.label}
                {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <ContactIcon name={item.icon} />
              </a>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
