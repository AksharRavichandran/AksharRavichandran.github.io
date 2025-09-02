import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import SpotifyStats from "./components/SpotifyStats";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <SpotifyStats />
      <Projects />
      <Footer />
    </>
  );
}
