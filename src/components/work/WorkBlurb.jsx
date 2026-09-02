import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/about/SectionHeader";
import { renderMarked } from "@/components/journal/MarkedText";

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const PARAGRAPHS = [
  "Computer science first found me through a card game. I was convinced there had to be an edge in blackjack, so I hacked together a small simulation and let the numbers settle it — turns out I'd only win about 42% of the time. That result reframed code for me: a way to test a hunch, not just follow instructions.",
  "Since then I've chased the same question — *where's the edge?* — across recommendation systems at Amazon, central-bank language for a NeurIPS-accepted paper, and prediction markets at Scheller. What ties it all together is turning messy information into something genuinely useful for real people.",
  "Outside of that, you'll usually find me logging miles on a run or working through a playlist. I like building things to answer my own questions, and this page is a running log of where that's taken me.",
];

export default function WorkBlurb() {
  const reduceMotion = useReducedMotion();

  const Wrapper = reduceMotion ? "section" : motion.section;
  const wrapperProps = reduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden",
        animate: "show",
      };
  const Item = reduceMotion ? "div" : motion.div;
  const itemProps = reduceMotion ? {} : { variants: itemVariants };

  return (
    <Wrapper className="work-blurb" aria-label="About me" {...wrapperProps}>
      <div className="work-blurb__content">
        <Item {...itemProps}>
          <SectionHeader title="Building to answer my own questions" kicker="About me" />
        </Item>

        {PARAGRAPHS.map((para, index) => (
          <Item key={index} {...itemProps}>
            <p className="journal-section__para">{renderMarked(para)}</p>
          </Item>
        ))}
      </div>
    </Wrapper>
  );
}
