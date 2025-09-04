import React from "react";
import resumePdf from "../assets/AksharRavichandran25-26.pdf";

export default function Footer() {
  return (
    <footer id="footer" className="section footer glass">
      <div className="footer-inner">
        <h3>Feel free to reach out!</h3>
        <p className="muted">Here are some ways to get a hold of me: </p>
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
