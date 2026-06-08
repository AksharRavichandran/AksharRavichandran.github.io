import React from "react";
import TopMusic from "@/components/TopMusic";
import StravaStats from "@/components/StravaStats";
import { experience } from "@/data/experience";
import {
  AboutDictionaryEntry,
  AboutHighlight,
  AboutNarrativeTitle,
  AboutProse,
  AboutProseP,
  AboutStoryBeat,
  AboutTerm,
} from "@/components/about/AboutNarrative";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/5gWOsJFdToIBRQFCBWh65d?utm_source=generator";
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/5gWOsJFdToIBRQFCBWh65d";

const IMG_BALTIMORE =
  "https://images.unsplash.com/photo-1576489028103-0113f8e220cc?q=80&w=1200&auto=format&fit=crop";

const legible = "text-[#1f1c18]";

function findExp(id) {
  return experience.find((e) => e.id === id);
}

function BackgroundTab() {
  const gtVip = findExp("gt-vip-ra");
  const amazon = findExp("amazon-sde-intern");
  const sparksoft = findExp("sparksoft-intern");
  const scheller = findExp("scheller-ra");

  return (
    <div className="about-tab-story-body about-narrative text-left">
      <AboutNarrativeTitle>How I got here</AboutNarrativeTitle>

      <AboutProse>
        <AboutProseP>
          This is not a résumé in story form. It is the through-line I notice when I look back: small choices
          at home, on the track, and in the lab that quietly became habits—and those habits are most of who I am
          now.
        </AboutProseP>
      </AboutProse>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            I grew up in <AboutTerm>Baltimore</AboutTerm> as an only child. Without siblings to lean on, I
            learned early to figure things out myself and to take responsibility when something needed doing.
            That independence still shows up when I am stuck on a problem: I will sit with it longer than I
            should before asking for help, for better and worse.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="Baltimore"
          pron={<span lang="en">/ˈbɔːl.tɪ.mɔːr/</span>}
          pos="proper noun"
          ety={
            <>
              Named for Cecil Calvert, 2nd Baron Baltimore; from the Calvert estate{" "}
              <em>Baltimore</em> in County Longford, Ireland.
            </>
          }
          defs={[
            <>
              Where I was born—the city in the background when I learned, as an only child, to be self-reliant
              before I had language for it.
            </>,
          ]}
          media={{ src: IMG_BALTIMORE, alt: "Baltimore skyline" }}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            When my dad was diagnosed with <AboutTerm>multiple sclerosis</AboutTerm>, I became an extra pair of
            hands at home—schedules, errands, whatever steadied the day. I could not fix the disease, but I
            could show up. That is still the filter I use for what is worth building: does it actually help
            someone, or does it only look good in a demo?
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="multiple sclerosis"
          pron={<span lang="en">/ˈmʌl.tɪ.pl əl skləˈroʊ.sɪs/</span>}
          pos="noun"
          ety={
            <>
              Latin <em>multiplex</em> “many” + <em>sclerosis</em> “hardening”—an autoimmune disease affecting
              the central nervous system.
            </>
          }
          defs={[
            <>
              A condition in which the immune system attacks the protective sheath of nerves, often causing
              fatigue, mobility challenges, and unpredictable symptoms over time.
            </>,
            <>
              In my story, it is the reason I stopped treating engineering as performance and started treating
              it as care—including the tremor wearable I built for my dad.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            My mom works hard all day and carries a quiet <AboutTerm>determination</AboutTerm> I still try to
            match. Watching her hold the household together while my dad faced MS taught me patience and
            teamwork: progress is often slow, shared, and unglamorous. I am less interested in hero moments
            than in showing up again tomorrow.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="determination"
          pron={<span lang="en">/dɪˌtɜː.mɪˈneɪ.ʃən/</span>}
          pos="noun"
          ety={<>From Latin <em>determinare</em>, “to limit, fix, decide.”</>}
          defs={[
            <>
              Firmness of purpose; continuing toward a goal despite obstacles.
            </>,
            <>
              The standard I inherited at home—the reason I do not quit when a project or season gets tedious.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            At <AboutTerm>Centennial High School</AboutTerm> in Ellicott City I ran track and raced at meets
            like New Balance Nationals and the Penn Relays. Track did not give me a love of suffering—it gave me
            a respect for repetition. The person who shows up to practice in bad weather is the same person who
            debugs firmware at midnight. I did not know that then; I know it now.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="Centennial High School"
          pron={<span lang="en">/senˈten.i.əl/</span>}
          pos="proper noun"
          ety={<>A public high school in Howard County, Maryland; named for the U.S. bicentennial era.</>}
          defs={[
            <>
              Where discipline became a habit before I called it engineering—through years of training, travel,
              and competition that rewarded consistency over talent on a single day.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            At <AboutTerm>Georgia Tech</AboutTerm> I chose computer science because I loved{" "}
            <AboutTerm>puzzle-solving</AboutTerm>, not because I already loved writing code. The major stuck
            when I realized research, internships, and side projects were the same instinct: take something
            messy, break it apart, test what you think you know, and revise when the pieces do not fit. That is
            still how I approach hard problems—technical or personal.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="puzzle-solving"
          pron={<span lang="en">/ˈpʌz.əl ˌsɒl.vɪŋ/</span>}
          pos="noun"
          ety={<>The habit of decomposing complexity—cousin to debugging, proof, and design.</>}
          defs={[
            <>
              Splitting an unclear problem into tractable parts, testing hypotheses, and revising when the
              answer does not hold.
            </>,
            <>
              The reason CS felt like home before I thought of myself as a programmer—and why I still reach
              for building when words are not enough.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            My <AboutTerm>VIP research</AboutTerm> at Tech bent my path toward{" "}
            <AboutTerm>academia</AboutTerm>. Working on monetary-policy sentiment, LLM benchmarks, and financial
            text with faculty and peers taught me to care about questions that outlast a sprint—not because
            academia is glamorous, but because some problems deserve years of attention. I still carry that
            patience into industry work: I would rather understand a system than ship the fastest patch.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="academia"
          pron={<span lang="en">/ˌæk.əˈdiː.mi.ə/</span>}
          pos="noun"
          ety={<>From Greek <em>Akademeia</em>, the grove where Plato taught.</>}
          defs={[
            <>
              The world of universities and research—questions pursued for years, not quarters.
            </>,
            <>
              Where I learned to think like a researcher: Georgia Tech&apos;s Vertically Integrated Project
              program, and the stretch that made research feel like a real path, not a line on a résumé.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutProse>
        <AboutProseP>
          The project I am proudest of never made it onto a job description. After years of watching my dad
          live with MS, I built a wrist-mounted wearable to damp tremor with haptic feedback—embedded firmware,
          sensing, enclosures, and tests at home. It is the clearest example of who I am trying to be: someone
          who turns care into something you can hold.
        </AboutProseP>
        <AboutProseP>
          The roles below are the public chapters of the same story—each one changed what I reach for next.
        </AboutProseP>
      </AboutProse>

      <AboutHighlight
        name="MS Tremor Wearable · Vibrotactile Feedback Device"
        logoFallback="MS"
        tags={["C++", "Arduino ESP32", "I2C", "PWM", "Fusion 360", "Atlanta"]}
      >
        Built for my dad: ESP32-S3 firmware, GY-521 over I2C, real-time tremor detection, PWM haptics under
        5ms latency, Fusion 360 enclosures—about 22% lower mean postural sway across five test cases. The work
        that best explains why I build.
      </AboutHighlight>

      {gtVip ? (
        <AboutHighlight
          name="Georgia Tech · Vertically Integrated Project"
          logo={gtVip.logo}
          logoAlt=""
          tags={["Research", "LLMs", "Atlanta"]}
        >
          Where home taught me to show up and track taught me to repeat—VIP taught me to ask questions that
          survive a semester. I started taking research seriously as a life path, not a credential.
        </AboutHighlight>
      ) : null}

      {amazon ? (
        <AboutHighlight
          name={`${amazon.company} · ${amazon.role}`}
          logo={amazon.logo}
          logoAlt=""
          tags={["React", "Harmony", "Internship", "Seattle"]}
        >
          Proof I could ship under real constraints: React and Harmony on an internal portal, production services
          for certification workflows—useful software at scale, not just prototypes.
        </AboutHighlight>
      ) : null}

      {sparksoft ? (
        <AboutHighlight
          name={`${sparksoft.company} · ${sparksoft.role}`}
          logo={sparksoft.logo}
          logoAlt=""
          tags={["Angular", "CMS", "Medicare", "Remote"]}
        >
          Medicare-facing work taught me that bugs have beneficiaries—performance and clarity matter when the
          user is not in the room with you.
        </AboutHighlight>
      ) : null}

      {scheller ? (
        <AboutHighlight
          name={scheller.company}
          logo={scheller.logo}
          logoAlt=""
          tags={["LLMs", "Polymarket", "Research"]}
        >
          Back to long-horizon questions: LLM benchmarks on discourse and prediction markets—how narrative and
          price move together, and when a model is only echoing the crowd.
        </AboutHighlight>
      ) : null}
    </div>
  );
}

function InspirationsTab() {
  return (
    <div className="about-tab-story-body about-narrative about-inspirations-stack text-left">
      <AboutNarrativeTitle>What keeps me going</AboutNarrativeTitle>

      <AboutProse>
        <AboutProseP>
          The habits from home and track did not disappear when I started working—they just moved. Off the
          clock I still need rhythm and recovery, or I burn out on the things I care about most.
        </AboutProseP>
      </AboutProse>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            <AboutTerm>Music</AboutTerm> is how I decompress and reset my attention; it is less about genre than
            about giving my brain something that is not a problem to solve.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="music"
          pron={<span lang="en">/ˈmjuː.zɪk/</span>}
          pos="noun"
          ety={<>From Greek <em>mousikē</em>, “art of the Muses.”</>}
          defs={[
            <>
              What I loop while coding or unwinding—a signal of taste more honest than a skills list. One
              playlist I keep coming back to is below.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            Strava is how I track <AboutTerm>movement</AboutTerm> outside the desk—proof I try to earn the screen
            time.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="movement"
          pron={<span lang="en">/ˈmuːv.mənt/</span>}
          pos="noun"
          defs={[
            <>
              Running, training, and staying active—the habit carried forward from track into everyday life.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <div className={`about-music glass mt-2 w-full px-4 py-6 md:px-6 ${legible}`}>
        <div className="music-grid">
          <TopMusic />
          <div className="spotify-card glass">
            <h4 className={legible} style={{ marginBottom: 8 }}>
              <a
                className="text-[#14110e] underline decoration-[#14110e]/40 underline-offset-2 hover:text-[#8a3d3d]"
                href={SPOTIFY_PLAYLIST_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open playlist on Spotify
              </a>
            </h4>
            <iframe
              title="Spotify Embed"
              className="spotify-embed"
              src={SPOTIFY_EMBED_URL}
              width="100%"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
        <StravaStats />
      </div>
    </div>
  );
}

function BeliefsTab() {
  return (
    <div className="about-tab-story-body about-narrative text-left">
      <AboutNarrativeTitle>What I believe</AboutNarrativeTitle>

      <AboutProse>
        <AboutProseP>
          Beliefs are not decorations on a page—they are the decisions I already made at home and on the track,
          stated plainly. Three ideas I return to when I am choosing what to prioritize next.
        </AboutProseP>
      </AboutProse>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            I think realizing your <AboutTerm>destiny</AboutTerm> is a real obligation—not passive waiting, but
            choosing to move toward what you are meant to build.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="destiny"
          pron={<span lang="en">/ˈdɛs.tɪ.ni/</span>}
          pos="noun"
          ety={
            <>
              Middle English <em>destinee</em>; Latin <em>destinare</em>, “to make firm, establish.”
            </>
          }
          quote={
            <>
              To realize one&apos;s destiny is a person&apos;s only real obligation; and when you want something,
              all the universe conspires in helping you to achieve it.
              <footer className="mt-2 block text-[0.85rem] not-italic text-[#1f1c18]/55">
                — Paulo Coelho, <cite>The Alchemist</cite>
              </footer>
            </>
          }
          defs={[
            <>
              The course of events regarded as meant to happen—and the choice to move toward it rather than
              away.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            I do not think being a <AboutTerm>polymath</AboutTerm> means collecting fields for a résumé. It means
            listening deeply enough that different disciplines start echoing the same truth.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="polymath"
          pron={<span lang="en">/ˈpɒl.i.mæθ/</span>}
          pos="noun"
          ety={
            <>
              Greek <em>polymathēs</em> (πολυμαθής): <em>poly-</em> “many” + <em>manthanein</em> “to learn.”
            </>
          }
          quote={
            <>
              A true polymath is not one who masters many fields, but one who listens so deeply to the world that
              every discipline begins to whisper the same truth in a different tongue.
            </>
          }
          defs={[
            <>
              Wide-ranging learning held together by attention—not mere accumulation of credentials.
            </>,
          ]}
        />
      </AboutStoryBeat>

      <AboutStoryBeat>
        <AboutProse>
          <AboutProseP>
            Everything else has to fit around <AboutTerm>family</AboutTerm>—the people who raised you and the
            home you come back to.
          </AboutProseP>
        </AboutProse>
        <AboutDictionaryEntry
          word="family"
          pron={<span lang="en">/ˈfæm.ɪ.li/</span>}
          pos="noun"
          ety={
            <>
              Latin <em>familia</em>, “household”; the circle bound by kinship and shared roof.
            </>
          }
          quote={
            <>
              No other success can compensate for failure in the home.
              <footer className="mt-2 block text-[0.85rem] not-italic text-[#1f1c18]/55">
                — often attributed to David O. McKay
              </footer>
            </>
          }
          defs={[
            <>
              The domestic sphere where character is first formed—success elsewhere cannot redeem neglect here.
            </>,
          ]}
        />
      </AboutStoryBeat>
    </div>
  );
}

export function buildAboutStoryTabs() {
  return [
    {
      id: "background",
      label: "Background",
      content: <BackgroundTab />,
    },
    {
      id: "inspirations",
      label: "Inspirations",
      content: <InspirationsTab />,
    },
    {
      id: "beliefs",
      label: "Beliefs",
      content: <BeliefsTab />,
    },
  ];
}
