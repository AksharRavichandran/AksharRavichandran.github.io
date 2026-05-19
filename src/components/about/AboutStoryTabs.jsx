import React from "react";
import TopMusic from "@/components/TopMusic";
import StravaStats from "@/components/StravaStats";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/5gWOsJFdToIBRQFCBWh65d?utm_source=generator";
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/5gWOsJFdToIBRQFCBWh65d";

/* Background — personal story */
const IMG_BALTIMORE =
  "https://images.unsplash.com/photo-1576489028103-0113f8e220cc?q=80&w=2000&auto=format&fit=crop";
const IMG_HOUSEHOLD =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000&auto=format&fit=crop";
const IMG_GEORGIA_TECH =
  "https://images.unsplash.com/photo-1541339907198-e08756dedfbf?q=80&w=2000&auto=format&fit=crop";

const IMG_THREAD =
  "https://images.unsplash.com/photo-1506543730435-e2c1d4553a84?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMG_COMPASS =
  "https://images.unsplash.com/photo-1522428938647-2baa7c899f2f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const IMG_DESTINY =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop";
const IMG_POLYMATH =
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000&auto=format&fit=crop";
const IMG_FAMILY =
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop";

const legible = "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.8),0_4px_20px_rgba(0,0,0,0.5)]";

function StoryWord({ word, pron, pos, ety, quote, defs, media }) {
  return (
    <div className="about-dict-with-media mb-10 grid gap-6 last:mb-0 lg:mb-12 lg:grid-cols-[minmax(0,1fr)_minmax(200px,300px)] lg:items-start lg:gap-8">
      <article className="dictionary-entry about-story-dict m-0" aria-label={`Dictionary-style entry: ${word}`}>
        <div className="dictionary-headword">
          <span className="dictionary-word">{word}</span>
          {pron ? <span className="dictionary-pron">{pron}</span> : null}
          <span className="dictionary-pos">{pos}</span>
        </div>
        {ety ? <p className="dictionary-ety">{ety}</p> : null}
        {quote ? (
          <blockquote className="about-story-quote m-0 mb-4 border-l-2 border-white/25 pl-4 text-[1.02rem] italic leading-relaxed text-white/90">
            {quote}
          </blockquote>
        ) : null}
        <ol className="dictionary-definitions">
          {defs.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ol>
      </article>
      {media ? (
        <img
          src={media.src}
          alt={media.alt}
          className="h-52 w-full shrink-0 rounded-xl border border-white/10 object-cover shadow-[0_12px_40px_rgba(0,0,0,0.35)] lg:h-auto lg:max-h-[min(52vh,420px)] lg:min-h-[200px]"
        />
      ) : null}
    </div>
  );
}

function BackgroundTab() {
  return (
    <div className="about-tab-story-body text-left">
      <p className={`mb-8 text-sm font-medium uppercase tracking-[0.2em] text-white/80 ${legible}`}>
        Where I started — city, household, and first campus.
      </p>
      <StoryWord
        word="Baltimore"
        pron={<span lang="en">/ˈbɔːl.tɪ.mɔːr/</span>}
        pos="proper noun"
        ety={
          <>
            Named for Cecil Calvert, 2nd Baron Baltimore; the title comes from the Calvert family estate{" "}
            <em>Baltimore</em> in County Longford, Ireland.
          </>
        }
        defs={[
          <>
            A major city in Maryland on the Chesapeake Bay — port city, Inner Harbor, and the cultural anchor
            of the Baltimore–Washington corridor.
          </>,
          <>
            I was born here, an <strong>only child</strong>. Growing up in Baltimore meant learning early how
            to be self-reliant — and how much strength you can draw from a small, close family when life gets
            heavy.
          </>,
        ]}
        media={{ src: IMG_BALTIMORE, alt: "Baltimore skyline and harbor at dusk" }}
      />
      <StoryWord
        word="household"
        pron={<span lang="en">/ˈhaʊs.hoʊld/</span>}
        pos="noun"
        ety={
          <>
            From Old English <em>hūs</em> “house” + <em>hold</em> “holding, possession” — the people and life
            under one roof.
          </>
        }
        defs={[
          <>
            A house and its occupants regarded as a single unit; the daily economy of meals, bills, care, and
            shared responsibility.
          </>,
          <>
            I grew up in a household that <strong>depended on each other</strong>. We each faced our own
            challenges, but we worked through them together — that is where I first learned what teamwork
            actually means.
          </>,
          <>
            My dad&apos;s <strong>multiple sclerosis</strong> and my mom keeping the household running taught me
            two things I still carry: <strong>determination</strong> in the long fight, and{" "}
            <strong>patience</strong> when progress is slow — watching someone you love adapt, and watching
            someone you love hold everything else steady.
          </>,
        ]}
        media={{ src: IMG_HOUSEHOLD, alt: "Family gathered together at home" }}
      />
      <StoryWord
        word="Yellow Jacket"
        pron={<span lang="en">/ˈjɛl.oʊ ˌdʒæk.ɪt/</span>}
        pos="noun"
        ety={
          <>
            The stinging wasp with yellow-and-black markings; at{" "}
            <strong>Georgia Institute of Technology</strong>, the nickname for students, athletes, and the
            campus community — gold and white, mascot <em>Buzz</em>.
          </>
        }
        defs={[
          <>
            Colloquially, a <strong>Georgia Tech student</strong> or member of its athletics programs; also the
            informal name for the Institute&apos;s competitive spirit and engineering-heavy culture in Atlanta.
          </>,
          <>
            I attended <strong>Georgia Tech</strong> for my first year of college — my introduction to rigorous
            coursework, late nights in collaboration, and a campus that expects you to build, test, and iterate.
            Being among the Yellow Jackets shaped how I approach hard problems: precise, persistent, and willing
            to ask for help when the problem outgrows one person.
          </>,
        ]}
        media={{ src: IMG_GEORGIA_TECH, alt: "University campus walkways and buildings" }}
      />
    </div>
  );
}

function InspirationsTab() {
  return (
    <div className="about-tab-story-body about-inspirations-stack text-left">
      <StoryWord
        word="Spotify"
        pron={<span lang="en">/ˈspɒt.ɪ.faɪ/</span>}
        pos="proper noun"
        ety={
          <>
            Streaming audio — here, a public{" "}
            <a
              className="underline decoration-white/40 underline-offset-2 transition-colors hover:text-white"
              href={SPOTIFY_PLAYLIST_URL}
              target="_blank"
              rel="noreferrer"
            >
              playlist
            </a>{" "}
            you curate.
          </>
        }
        defs={[
          <>
            A <strong>signal of taste</strong>: what you loop while coding, writing, or commuting says something
            recruiters rarely get from a PDF.
          </>,
          <>
            Keep it genuine — a tight playlist beats a generic “top 50” every time.
          </>,
        ]}
        media={{ src: IMG_THREAD, alt: "Listening and headphones mood" }}
      />

      <StoryWord
        word="Strava"
        pron={<span lang="en">/ˈstrɑː.və/</span>}
        pos="proper noun"
        ety={
          <>
            Activity tracking — link your public profile in{" "}
            <a className="underline decoration-white/40 underline-offset-2 hover:text-white" href="/contact">
              Contact
            </a>{" "}
            if you want it discoverable elsewhere too.
          </>
        }
        defs={[
          <>
            Proof of <strong>motion under load</strong>: consistency, discipline, and a life outside the desk —
            useful color for collaborative teams.
          </>,
          <>
            Share only what you are comfortable making public; the widget below respects your site styling.
          </>,
        ]}
        media={{ src: IMG_COMPASS, alt: "Outdoor trail and movement" }}
      />

      <StoryWord
        word="Charts"
        pron={<span lang="en">/tʃɑːts/</span>}
        pos="noun, plural"
        ety={<>From Greek <em>khártēs</em>, “leaf of papyrus” — today, the songs you actually replay.</>}
        defs={[
          <>
            Snapshot of <strong>recent listening</strong> from your saved snapshot data; swap copy when you wire
            live APIs.
          </>,
        ]}
        media={null}
      />

      <div className={`about-music glass mt-2 w-full px-4 py-6 md:px-6 ${legible}`}>
        <h3 className="music-section-title">The motivation behind my work</h3>
        <div className="music-grid">
          <TopMusic />
          <div className="spotify-card glass">
            <h4 className={legible} style={{ marginBottom: 8 }}>
              One of my favorite playlists I&apos;ve made:
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
    <div className="about-tab-story-body text-left">
      <p className={`mb-8 text-sm font-medium uppercase tracking-[0.2em] text-white/80 ${legible}`}>
        Three words I return to — each with a line I believe and a dictionary sense.
      </p>
      <StoryWord
        word="destiny"
        pron={<span lang="en">/ˈdɛs.tɪ.ni/</span>}
        pos="noun"
        ety={
          <>
            Middle English <em>destinee</em>, from Old French <em>destinée</em>; ultimately Latin{" "}
            <em>destinare</em>, “to make firm, establish.”
          </>
        }
        quote={
          <>
            To realize one&apos;s destiny is a person&apos;s only real obligation; and when you want something,
            all the universe conspires in helping you to achieve it.
            <footer className="mt-2 block text-[0.85rem] not-italic text-white/55">
              — Paulo Coelho, <cite>The Alchemist</cite>
            </footer>
          </>
        }
        defs={[
          <>
            The <strong>course of events</strong> regarded as predetermined or inevitable; what is meant to
            happen to a person or thing.
          </>,
          <>
            A person&apos;s <strong>predetermined lot</strong> or future; the hidden power believed to shape
            outcomes — and the choice to move toward it rather than away.
          </>,
        ]}
        media={{ src: IMG_DESTINY, alt: "Mountain path stretching toward the horizon" }}
      />
      <StoryWord
        word="polymath"
        pron={<span lang="en">/ˈpɒl.i.mæθ/</span>}
        pos="noun"
        ety={
          <>
            From Greek <em>polymathēs</em> (πολυμαθής): <em>poly-</em> “many” + <em>manthanein</em> “to learn.”
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
            A person of <strong>wide-ranging knowledge</strong> or learning across several disciplines.
          </>,
          <>
            Often distinguished from mere accumulation: breadth held together by a single habit of{" "}
            <strong>attention</strong> — reading widely so patterns repeat across fields.
          </>,
        ]}
        media={{ src: IMG_POLYMATH, alt: "Library shelves filled with books" }}
      />
      <StoryWord
        word="family"
        pron={<span lang="en">/ˈfæm.ɪ.li/</span>}
        pos="noun"
        ety={
          <>
            Latin <em>familia</em>, “household, servants of a house”; from <em>famulus</em>, “servant” — later,
            the circle bound by kinship and shared roof.
          </>
        }
        quote={
          <>
            No other success can compensate for failure in the home.
            <footer className="mt-2 block text-[0.85rem] not-italic text-white/55">
              — often attributed to David O. McKay
            </footer>
          </>
        }
        defs={[
          <>
            A group of people related by blood, marriage, or adoption; a <strong>household</strong> as a unit of
            care and obligation.
          </>,
          <>
            The <strong>domestic sphere</strong> where character is first formed — success elsewhere cannot
            redeem neglect here.
          </>,
        ]}
        media={{ src: IMG_FAMILY, alt: "Warm light in a home interior" }}
      />
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
