import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import AboutEntryPageContent from "@/components/about/AboutEntryPageContent";
import { getAboutEntry } from "@/data/aboutEntries";

export default function AboutEntryPage() {
  const { slug } = useParams();
  const entry = getAboutEntry(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!entry) {
    return <Navigate to="/entries" replace />;
  }

  return (
    <main className="page-main about-page about-entry-page relative flex flex-col">
      <div className="relative z-[2] flex flex-1 flex-col">
        <section
          id={`about-entry-${entry.slug}`}
          className="section home-hero-section about about--story about--journal about-entry-page__shell about-entry-page--centered flex flex-col"
        >
          <div className="about-entry-page__backdrop">
            <Link to="/entries" className="about-entry-page__back-link">
              Back to entries
            </Link>
            <AboutEntryPageContent entry={entry} />
          </div>
        </section>
      </div>
    </main>
  );
}
