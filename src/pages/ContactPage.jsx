import React from "react";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="page-main contact-page relative flex flex-col">
      <div className="relative z-[2] flex flex-col">
        <Contact />
      </div>
    </main>
  );
}
