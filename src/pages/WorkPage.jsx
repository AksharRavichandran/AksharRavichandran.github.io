import React, { useState } from "react";
import { motion } from "framer-motion";
import TypedJournalIntro from "@/components/journal/TypedJournalIntro";
import JournalPolaroid from "@/components/about/JournalPolaroid";
import WorkBlurb from "@/components/work/WorkBlurb";
import WorkCV from "@/components/work/WorkCV";
import WorkGallery from "@/components/work/WorkGallery";
import friendsImage from "@/assets/friends.jpg";

export default function WorkPage() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="page-main work-page relative flex flex-col">
      <div className="relative z-[2] flex flex-1 flex-col">
        <section
          id="work"
          className="section home-hero-section work work--story work--journal flex flex-col"
        >
          <motion.div
            className="work-journal journal-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <TypedJournalIntro
              lead="About Me"
              onLeadComplete={() => setIntroDone(true)}
              afterLead={
                <>
                  <JournalPolaroid
                    orientation="landscape"
                    src={friendsImage}
                    alt="Friends together with the Atlanta skyline at night"
                    rotate={0}
                    tapeRotate={0}
                    className="journal-intro__polaroid journal-intro__polaroid--work"
                  />
                  <p className="journal-intro__caption">
                    My experiences would never be an experience if I did not have the people to share
                    them with.
                  </p>
                </>
              }
            />

            <motion.div
              className="work-tabs-panel w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkBlurb />

              <WorkCV />

              <WorkGallery />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
