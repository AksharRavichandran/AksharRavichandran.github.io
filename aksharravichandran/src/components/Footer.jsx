import React from "react";
import resumePdf from "../assets/AksharRavichandran25-26.pdf";

export default function Footer() {
  return (
    <footer id="footer" className="section footer glass">
      <div className="footer-inner">
        <h3>Let’s build something great</h3>
        <p className="muted">Reach out for roles, collabs, or cool ideas.</p>
        <div className="footer-actions">
          <a className="btn btn-primary" href="mailto:akshar.ravichandran@gmail.com">Email Me</a>
          <a className="btn btn-primary" href="https://www.linkedin.com/in/akshar-ravichandran-37678228b/">LinkedIn</a>
          <a className="btn btn-primary" href="https://github.com/AksharRavichandran">GitHub</a>
          <a className="btn btn-ghost" href={resumePdf} target="_blank" rel="noreferrer">View Resume</a>
        </div>
        <div className="tiny">© {new Date().getFullYear()} Akshar Ravichandran</div>
      </div>
    </footer>
  );
}
