import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { useHomeIntro } from "@/context/HomeIntroContext";

const AIRPORT_CLOCKS = [
  { code: "MAA", timeZone: "Asia/Kolkata", name: "Chennai (MAA)" },
  { code: "BWI", timeZone: "America/New_York", name: "Baltimore–Washington (BWI)" },
];

function formatLocalTime(date, timeZone) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function AirportClocks() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="nav-airport-times" aria-label="Local times by airport">
      {AIRPORT_CLOCKS.map(({ code, timeZone, name }) => (
        <span key={code} className="nav-airport-line">
          <span className="nav-airport-clock">{formatLocalTime(now, timeZone)}</span>{" "}
          <abbr title={name} className="nav-airport-code">
            {code}
          </abbr>
        </span>
      ))}
    </div>
  );
}

function navClass({ isActive }) {
  return isActive ? "nav-active" : undefined;
}

export default function Navbar() {
  const { stage, isHome } = useHomeIntro();
  const showHeader =
    !isHome ||
    stage === "background" ||
    stage === "greeting" ||
    stage === "definition" ||
    stage === "ready";

  return (
    <motion.nav
      className="navbar navbar--top"
      initial={false}
      animate={
        showHeader
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: -14 }
      }
      transition={{
        duration: isHome ? 0.9 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ pointerEvents: showHeader ? "auto" : "none" }}
    >
      <div className="nav-inner">
        <div className="nav-top">
          <h1 className="logo">
            <Link to="/">Akshar Ravichandran</Link>
          </h1>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={navClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/entries" className={navClass}>
                Entries
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-meta">
          <AirportClocks />
        </div>
      </div>
    </motion.nav>
  );
}
