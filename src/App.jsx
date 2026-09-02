import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AboutEntryPage from "./pages/AboutEntryPage";
import WorkPage from "./pages/WorkPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/globals.css";

function LegacyEntryRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/entries/${slug}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* About page now hosts the Story + CV (formerly the Work page) */}
        <Route path="/about" element={<WorkPage />} />
        {/* Entries is the journal index (formerly the About page) */}
        <Route path="/entries" element={<AboutPage />} />
        <Route path="/entries/:slug" element={<AboutEntryPage />} />
        {/* Legacy redirects */}
        <Route path="/work" element={<Navigate to="/about" replace />} />
        <Route path="/about/:slug" element={<LegacyEntryRedirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
