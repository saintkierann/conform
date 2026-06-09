import { site } from "@/data/site";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand">{site.company}</a>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="container hero">
          <Reveal as="p" className="eyebrow">{site.eyebrow}</Reveal>
          <Reveal as="h1" className="display" delay={80}>{site.tagline}</Reveal>
          <div className="hero-meta">
            <Reveal className="lead" delay={160}>{site.intro}</Reveal>
            <Reveal delay={220}>
              <a href="#contact" className="btn btn--accent">Start a conversation</a>
            </Reveal>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container grid-2">
            <Reveal>
              <p className="eyebrow">About</p>
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

        {/* ── Services ───────────────────────────────────────────────────── */}
        <section id="services" className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow">What we do</p>
              <h2 className="heading">Four ways we work with you.</h2>
            </Reveal>
            <div className="services-list" style={{ marginTop: "2.5rem" }}>
              {site.services.map((s, i) => (
                <Reveal key={s.title} className="service" delay={i * 60}>
                  <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected work ──────────────────────────────────────────────── */}
        <section id="work" className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Selected work</p>
              <h2 className="heading">Outcomes we're proud of.</h2>
            </Reveal>
            <div className="work-list" style={{ marginTop: "2.5rem" }}>
              {site.work.map((w, i) => (
                <Reveal key={w.index} className="work-row" delay={i * 60}>
                  <span className="work-num">{w.index}</span>
                  <div>
                    <div className="work-client">{w.client}</div>
                    <div className="work-kind">{w.kind}</div>
                  </div>
                  <div className="work-detail">
                    <p className="work-problem">{w.problem}</p>
                    <p className="work-outcome">{w.outcome}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ───────────────────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow">From our GitHub</p>
              <h2 className="heading">Things we've built in the open.</h2>
            </Reveal>
            <div className="projects-grid" style={{ marginTop: "2.5rem" }}>
              {site.projects.map((p) => (
                <a key={p.name} className="project" href={p.url} target="_blank" rel="noreferrer">
                  <div className="project-name">{p.name}</div>
                  <p className="project-blurb">{p.blurb}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="project-link">View on GitHub ↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why us + team ──────────────────────────────────────────────── */}
        <section className="section">
          <div className="container grid-2">
            <Reveal>
              <p className="eyebrow">Why us</p>
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

        <section className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow">The team</p>
              <h2 className="heading">The people you'll actually work with.</h2>
            </Reveal>
            <div className="team-grid" style={{ marginTop: "2.5rem" }}>
              {site.team.map((m, i) => (
                <Reveal key={m.name} delay={i * 60}>
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
            <Reveal as="p" className="eyebrow">Contact</Reveal>
            <Reveal as="h2" className="display" delay={80}>Let's figure out what's worth building.</Reveal>
            <Reveal className="contact-actions" delay={160}>
              <a href={`mailto:${site.email}`} className="btn btn--accent">{site.email}</a>
              {site.bookingUrl ? (
                <a href={site.bookingUrl} target="_blank" rel="noreferrer" className="btn">Book a call</a>
              ) : null}
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="footer container">
        <span>© {new Date().getFullYear()} {site.company}</span>
        <span style={{ display: "flex", gap: "1.5rem" }}>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.social.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </span>
      </footer>
    </>
  );
}
