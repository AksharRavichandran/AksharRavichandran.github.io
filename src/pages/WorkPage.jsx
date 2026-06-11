import React, { useState } from "react";
import { motion } from "framer-motion";
import JournalSectionLayout from "@/components/journal/JournalSectionLayout";
import TypedJournalIntro from "@/components/journal/TypedJournalIntro";
import WorkStory from "@/components/work/WorkStory";
import WorkGallery from "@/components/work/WorkGallery";
import { workEdgePhotos } from "@/data/workJournal";

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
              lead="Every page here was built by hand."
              body="A working draft of where I have built things, and a shelf of everything else — entries written down the way they happened."
              onLeadComplete={() => setIntroDone(true)}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <JournalSectionLayout
                id="work-journal"
                className="about-journal-tab"
                edgePhotos={workEdgePhotos}
              >
                <WorkStory />
                <WorkGallery />
              </JournalSectionLayout>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
