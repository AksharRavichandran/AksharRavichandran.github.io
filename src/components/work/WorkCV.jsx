import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { workExperiences } from "@/data/workExperiences";
import resumePdf from "@/assets/AksharRavichandranGrad25-26.pdf";

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
};

function ExperienceRow({ experience }) {
  return (
    <li className="work-cv__row">
      <div className="work-cv__entry">
        {experience.logo ? (
          <img
            className="work-cv__logo"
            src={experience.logo}
            alt={`${experience.organization} logo`}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ) : (
          <span className="work-cv__logo work-cv__logo--blank" aria-hidden />
        )}

        <div className="work-cv__row-body">
          <div className="work-cv__row-head">
            <div className="work-cv__row-titles">
              <p className="work-cv__org">{experience.organization}</p>
              <p className="work-cv__role">{experience.role}</p>
            </div>

            <div className="work-cv__row-meta">
              <span className="work-cv__dates">{experience.dates}</span>
              {experience.location ? (
                <span className="work-cv__location">{experience.location}</span>
              ) : null}
            </div>
          </div>

          {experience.summary ? (
            <p className="work-cv__summary">{experience.summary}</p>
          ) : null}

          {experience.tech?.length > 0 || experience.links?.length > 0 ? (
            <div className="work-cv__row-foot">
              {experience.tech?.length > 0 ? (
                <p className="work-cv__chips">
                  {experience.tech.map((t) => (
                    <span key={t} className="work-cv__chip">
                      {t}
                    </span>
                  ))}
                </p>
              ) : null}
              {experience.links?.length > 0 ? (
                <p className="work-cv__links">
                  {experience.links.map((link) => (
                    <a
                      key={link.href}
                      className="work-cv__link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}

/**
 * The experience list — a clean, LinkedIn-style ledger. Each role shows the
 * essentials (org, title, dates, location) with one short summary line. No
 * deep-dive prose; just the scannable facts.
 */
export default function WorkCV() {
  const reduceMotion = useReducedMotion();

  const experience = workExperiences.filter((item) => item.category !== "education");
  const education = workExperiences.filter((item) => item.category === "education");

  const Wrapper = reduceMotion ? "div" : motion.div;
  const wrapperProps = reduceMotion
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "show" };
  const RowWrap = reduceMotion ? "div" : motion.div;
  const rowWrapProps = reduceMotion ? {} : { variants: rowVariants };

  return (
    <Wrapper className="work-cv" {...wrapperProps}>
      <RowWrap {...rowWrapProps}>
        <section className="work-cv__section" aria-label="Experience">
          <h3 className="work-cv__group-title">Experience</h3>
          <ul className="work-cv__rows">
            {experience.map((item) => (
              <ExperienceRow key={item.id} experience={item} />
            ))}
          </ul>
        </section>
      </RowWrap>

      {education.length > 0 ? (
        <RowWrap {...rowWrapProps}>
          <section className="work-cv__section" aria-label="Education">
            <h3 className="work-cv__group-title">Education</h3>
            <ul className="work-cv__rows">
              {education.map((item) => (
                <ExperienceRow key={item.id} experience={item} />
              ))}
            </ul>
          </section>
        </RowWrap>
      ) : null}

      <div className="work-cv__cta">
        <a className="work-cv__cta-button" href="mailto:akshar.ravichandran@gmail.com">
          Get in touch
        </a>
        <a
          className="work-cv__cta-link"
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
        <a
          className="work-cv__cta-link"
          href="https://www.linkedin.com/in/akshar-ravi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </Wrapper>
  );
}
