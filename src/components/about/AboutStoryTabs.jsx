import React from "react";
import TopMusic from "@/components/TopMusic";
import StravaStats from "@/components/StravaStats";

const SPOTIFY_EMBED_URL =
  "https://open.spotify.com/embed/playlist/5gWOsJFdToIBRQFCBWh65d?utm_source=generator";
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/5gWOsJFdToIBRQFCBWh65d";

const IMG_ORIGIN =
  "https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
        A short atlas — three words, three threads. Replace with your own story.
      </p>
      <StoryWord
        word="Origin"
        pron={<span lang="en">/ˈɒr.ɪ.dʒɪn/</span>}
        pos="noun"
        ety={<>From Latin <em>origo</em>, “beginning, source.”</>}
        defs={[
          <>
            The <strong>places</strong> and chapters that set your defaults — cities, schools, families, first
            languages.
          </>,
          <>
            On a CV it is the answer to <em>why this path</em>; on a site it is the human frame around the
            projects.
          </>,
        ]}
        media={{ src: IMG_ORIGIN, alt: "Warm city skyline at dusk" }}
      />
      <StoryWord
        word="Thread"
        pron={<span lang="en">/θred/</span>}
        pos="noun"
        ety={<>Old English <em>thrǣd</em>; cognate with “threat” only by sound — here, continuity.</>}
        defs={[
          <>
            A <strong>through-line</strong> in work: datasets, systems, teams, or ideas you keep pulling forward.
          </>,
          <>
            Recruiters look for a thread that connects internships, research, and side projects into one craft.
          </>,
        ]}
        media={{ src: IMG_THREAD, alt: "Abstract path and texture" }}
      />
      <StoryWord
        word="Hearth"
        pron={<span lang="en">/hɑːθ/</span>}
        pos="noun"
        ety={<>Old English <em>heorð</em>, the fire at the center of a hall.</>}
        defs={[
          <>
            Where you <strong>recharge</strong> — people, rituals, or corners of the internet that keep you
            curious.
          </>,
          <>
            Optional on a résumé, essential on a personal site: it signals sustainability, not just hustle.
          </>,
        ]}
        media={{ src: IMG_COMPASS, alt: "Mountain horizon at golden hour" }}
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
