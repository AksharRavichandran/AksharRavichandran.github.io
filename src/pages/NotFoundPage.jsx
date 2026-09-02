import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="page-main not-found-page">
      <section className="not-found" aria-labelledby="not-found-title">
        <p className="not-found__dateline">a torn page</p>
        <h1 id="not-found-title" className="not-found__title">
          This page isn&apos;t in the notebook.
        </h1>
        <p className="not-found__body journal-section__para">
          Whatever you were looking for got scribbled out or never made it into the margins. Head back
          to a page that still has its corners taped down.
        </p>
        <nav className="not-found__links" aria-label="Back to site">
          <Link to="/" className="not-found__link">
            Cover
          </Link>
          <Link to="/about" className="not-found__link">
            About me
          </Link>
          <Link to="/entries" className="not-found__link">
            Entries
          </Link>
        </nav>
      </section>
    </main>
  );
}
