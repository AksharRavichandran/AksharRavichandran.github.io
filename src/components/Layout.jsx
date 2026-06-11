import React from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { HomeIntroProvider, useHomeIntro } from "@/context/HomeIntroContext";

function LayoutShell() {
  const { stage, advance, isHome: introHome } = useHomeIntro();
  const showBackground = !introHome || stage !== "loading";

  return (
    <div className="paper-theme relative min-h-full">
      {introHome && stage === "loading" ? (
        <div className="pointer-events-none fixed inset-0 z-[1] bg-[var(--bg)]" aria-hidden />
      ) : null}
      {/* Shared white "notebook page" backdrop behind every route. */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden={!showBackground}
        initial={false}
        animate={{
          opacity: showBackground ? 1 : 0,
        }}
        transition={{
          duration: introHome ? 0.9 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={() => {
          if (introHome && stage === "background") advance();
        }}
      >
        <div className="notebook-page-stack absolute inset-0 h-full w-full">
          <div className="home-notebook-bg absolute inset-0 h-full w-full" />
        </div>
      </motion.div>
      {/* Paper grain, margin line, and faint blue rules scroll with the page. */}
      <motion.div
        className="notebook-rules pointer-events-none absolute inset-0 z-0"
        aria-hidden
        initial={false}
        animate={{ opacity: showBackground ? 1 : 0 }}
        transition={{
          duration: introHome ? 0.9 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
      <div className="relative z-10 flex min-h-full flex-col layout-content">
        <Navbar />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
      </div>
      {showBackground ? <Footer /> : null}
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <HomeIntroProvider isHome={isHome}>
      <LayoutShell />
    </HomeIntroProvider>
  );
}
