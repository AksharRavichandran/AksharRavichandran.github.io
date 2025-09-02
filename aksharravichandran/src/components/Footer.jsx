import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="section footer glass">
      <div className="footer-inner">
        <h3>Let’s build something great</h3>
        <p className="muted">Reach out for roles, collabs, or cool ideas.</p>
        <div className="footer-actions">
          <a className="btn btn-primary" href="mailto:akshar.r@gatech.edu">Email Me</a>
          <a className="btn btn-ghost" href="/Akshar_Ravichandran_Resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
        <div className="tiny">© {new Date().getFullYear()} Akshar Ravichandran</div>
      </div>
    </footer>
  );
}
