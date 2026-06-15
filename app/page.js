import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

// Small inline SVG arrow (no emojis as icons — per design system).
function Arrow({ className = "" }) {
  return (
    <svg className={`arrow ${className}`} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Section header with oversized ghost numeral + serif title.
function SectionHead({ index, eyebrow, title }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-index" aria-hidden="true">{index}</span>
      <div className="sec-title-wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading">{title}</h2>
      </div>
    </Reveal>
  );
}

export default function Home() {
  // Split the tagline on an em dash to give the second half an editorial accent.
  const [taglineA, taglineB] = site.tagline.split("—").map((s) => s.trim());

  return (
    <>
      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">{site.company}</a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#product">Product</a>
            <a href="#services">Services</a>
            <a href="#work">Where we help</a>
            <a href="#contact" className="nav-cta">Book a call</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="container hero">
          <Reveal as="p" className="eyebrow">{site.eyebrow}</Reveal>
          <Reveal as="h1" className="display" delay={80}>
            {taglineB ? (
              <>
                {taglineA} <span className="accent">{taglineB}.</span>
              </>
            ) : (
              site.tagline
            )}
          </Reveal>
          <Reveal as="p" className="lead" delay={120} style={{ maxWidth: "56ch", marginTop: "1.6rem" }}>
            {site.intro}
          </Reveal>
          <Reveal className="hero-meta" delay={160}>
            <a href="#contact" className="btn btn--accent">
              Book a discovery call <Arrow />
            </a>
            <div className="hero-facts">
              {site.heroFacts.map((f) => (
                <div className="fact" key={f.k}>
                  <span className="fact-k">{f.k}</span>
                  <span className="fact-v">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <div className="container"><Reveal className="stripe" /></div>

        {/* ── About ──────────────────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container grid-2">
            <Reveal>
              <p className="eyebrow">01 — About</p>
              <h2 className="heading">{site.about.heading}</h2>
              <div className="traits">
                {site.about.traits.map((t) => (
                  <span key={t} className="trait">{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              {site.about.body.map((p, i) => (
                <p key={i} className={i === 0 ? "lead" : "muted"} style={{ maxWidth: "52ch", marginTop: i ? "1.4rem" : 0 }}>
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── Flagship product ───────────────────────────────────────────── */}
        <section id="product" className="section">
          <div className="container grid-2">
            <Reveal>
              <p className="eyebrow">02 — {site.flagship.eyebrow}</p>
              <h2 className="heading">{site.flagship.name}</h2>
              <p className="lead" style={{ maxWidth: "40ch", marginTop: "1.2rem" }}>
                {site.flagship.tagline}
              </p>
              {site.flagship.status ? (
                <div className="traits"><span className="trait">{site.flagship.status}</span></div>
              ) : null}
              <div style={{ marginTop: "1.6rem" }}>
                <a href="#contact" className="btn btn--accent">Book a discovery call <Arrow /></a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="muted" style={{ maxWidth: "52ch" }}>{site.flagship.body}</p>
              <ul className="reasons" style={{ marginTop: "1.4rem" }}>
                {site.flagship.features.map((f, i) => (
                  <li key={i} className="reason">
                    <span className="reason-mark">{String(i + 1).padStart(2, "0")}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────────── */}
        <section id="services" className="section">
          <div className="container">
            <SectionHead index="03" eyebrow="What we do" title="Four ways we work with you." />
            <div className="services-list">
              {site.services.map((s, i) => (
                <Reveal key={s.title} className="service" delay={i * 50}>
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="service-title">{s.title}</h3>
                  <p>{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Where we help ──────────────────────────────────────────────── */}
        <section id="work" className="section">
          <div className="container">
            <SectionHead index="04" eyebrow="Where we help" title="The admin we make disappear." />
            <div className="work-list">
              {site.work.map((w, i) => (
                <Reveal key={w.index} className="work-row" delay={i * 50}>
                  <span className="work-num">{w.index}</span>
                  <div>
                    <div className="work-client">{w.client}</div>
                    <div className="work-kind">{w.kind}</div>
                  </div>
                  <div className="work-detail">
                    <p className="work-problem">{w.problem}</p>
                    <p className="work-outcome"><Arrow /> {w.outcome}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why us ─────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container grid-2">
            <Reveal>
              <p className="eyebrow">05 — Why us</p>
              <h2 className="heading">Reasons teams keep us close.</h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="reasons">
                {site.reasons.map((r, i) => (
                  <li key={i} className="reason">
                    <span className="reason-mark">{String(i + 1).padStart(2, "0")}</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Team ───────────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <SectionHead index="06" eyebrow="The team" title="The people you'll actually work with." />
            <div className="team-grid">
              {site.team.map((m, i) => (
                <Reveal key={m.name} className="member" delay={i * 50}>
                  <div className="member-name">{m.name}</div>
                  <div className="member-role">{m.role}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────────────────── */}
        <section id="contact" className="section">
          <div className="container contact">
            <Reveal as="p" className="eyebrow">07 — Contact</Reveal>
            <Reveal as="h2" className="display" delay={80}>Let's cut the admin out of your week.</Reveal>
            <Reveal className="contact-actions" delay={160}>
              {site.bookingUrl ? (
                <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn btn--accent">
                  Book a discovery call <Arrow />
                </a>
              ) : null}
              <a href={`mailto:${site.email}`} className={site.bookingUrl ? "btn" : "btn btn--accent"}>
                {site.email} <Arrow />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <div className="footer-wrap">
        <footer className="footer container">
          <span>© {new Date().getFullYear()} {site.fullName}</span>
          <span className="footer-links">
            <a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={site.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={`mailto:${site.email}`}>Email</a>
          </span>
        </footer>
      </div>
    </>
  );
}
