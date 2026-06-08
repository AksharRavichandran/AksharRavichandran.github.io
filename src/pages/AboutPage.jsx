import React from "react";
import About from "../components/About";

export default function AboutPage() {
  // Background is owned by the Layout route wrapper (.about-route) so it sits
  // continuously behind both the transparent header and this content.
  return (
    <main className="page-main about-page relative flex flex-col">
      <div className="relative z-[2] flex flex-1 flex-col">
        <About />
      </div>
    </main>
  );
}
