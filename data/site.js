// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO MAKE THE SITE YOURS.
//  Copy is aligned to the Conform business plan. Anything marked ◂ TO ADD
//  is real-world detail to fill in before going live (contact, booking,
//  client work, team).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Company identity ─────────────────────────────────────────────────────────
  company: "Conform",
  fullName: "Conform Consultancy",
  eyebrow: "AI consultancy for UK construction",
  // The tagline splits on the em dash ( — ); the second half gets the accent.
  tagline: "Less paperwork, fewer errors, faster sign-off — built for UK construction",
  intro:
    "We build AI tools for ambitious construction firms and property developers — the ones running lean teams, coordinating subcontractors, and turning sites into serious money. We take the admin off site: inspection reports, compliance evidence, the back-office grind. So your people spend less time on paperwork and more on the work that actually pays.",
  // Short proof points shown under the hero headline.
  heroFacts: [
    { k: "Built for", v: "Builders & developers" },
    { k: "We fix", v: "Admin & compliance" },
    { k: "How", v: "Audit · Build · Hand over" },
  ],

  // Contact ──────────────────────────────────────────────────────────────────
  email: "hello@example.com", // ◂ TO ADD — your real business email
  social: {
    linkedin: "https://linkedin.com/company/your-company", // ◂ TO ADD
    github: "https://github.com/saintkierann",
  },
  bookingUrl: "", // ◂ TO ADD — Calendly/Cal.com link (leave "" to hide the button)

  // About the company ─────────────────────────────────────────────────────────
  about: {
    heading: "We start on site, not in a pitch deck.",
    body: [
      "Most AI advice is written for software companies — not for firms juggling retentions, variations and a building-control deadline. Builders and developers don't need another dashboard. They need someone who's sat in the site cabin and can tell which tools earn their keep and which are a waste of a Friday.",
      "So that's where we begin. We learn how your jobs actually run — where the hours leak, where margin slips, where compliance gets messy — then build something that fixes it. You own it. Your team runs it. We're not looking to become a line on your overheads.",
    ],
    traits: ["On site, not off-the-shelf", "Plain English", "Compliance-literate", "Build & hand over", "No lock-in"],
  },

  // Flagship product ──────────────────────────────────────────────────────────
  flagship: {
    eyebrow: "Flagship product",
    name: "Compliance Photo & Reporting",
    tagline: "Photo the work on site. Hand over a report that passes building control.",
    body:
      "Your project managers capture photos and inspection data as they walk the job. The app structures the evidence, fills the report and produces documentation that's ready for building control. The re-keying of site notes at 7pm, and the hunt for the one photo that proves a detail was signed off — gone.",
    features: [
      "Capture photos and inspection data on site",
      "Auto-structure the compliance evidence",
      "Reports written in minutes, not evenings",
      "Documentation that holds up at building control",
    ],
    status: "", // ◂ TO ADD — e.g. "In pilot" or "Now onboarding firms" (leave "" to hide)
  },

  // Services ──────────────────────────────────────────────────────────────────
  services: [
    {
      title: "The on-site audit",
      body:
        "We spend time on your sites and in the back office and map where the hours and margin actually go — estimating, RFIs, reporting, compliance. You get a straight list: what's worth automating, what isn't, and what to do first.",
    },
    {
      title: "Compliance & site reporting",
      body:
        "Inspection reports, evidence trails and building-control documentation, automated. Built so a site manager can run it from a phone — and so nothing's missing the day someone asks you to prove it.",
    },
    {
      title: "Automation & custom tools",
      body:
        "The repetitive admin — quotes, RFIs, document drafting, chasing — built into tools that fit how your firm already works. No rip-and-replace, no six-month rollout.",
    },
    {
      title: "Build, train, hand over",
      body:
        "We build it, connect it to what you already use, and train your team to run it without us. A retainer after, if you want a hand on call — not because you're tied in.",
    },
  ],

  // Where we help (problem → what we do). Swap in real client work when ready. ─
  work: [
    {
      index: "01",
      client: "The 7pm report",
      kind: "Site admin",
      problem: "Site notes and photos get re-typed into reports after hours. The PM's day ends long after the gate's shut.",
      outcome: "Capture it once on site — the report's done before they leave.",
    },
    {
      index: "02",
      client: "The building-control scramble",
      kind: "Compliance",
      problem: "When building control asks for evidence, it's spread across phones, WhatsApp and folders — and someone loses a morning to it.",
      outcome: "Every photo and check filed, and ready to hand over.",
    },
    {
      index: "03",
      client: "Admin that doesn't bill",
      kind: "Automation",
      problem: "Quotes, RFIs and chasing, all done by hand. Billable people doing unbillable work.",
      outcome: "Automate the repetitive parts and put the hours back on the tools.",
    },
  ],

  // Why hire us ────────────────────────────────────────────────────────────────
  reasons: [
    "We've worked in construction. We're not AI tourists.",
    "Priced for lean local firms — no enterprise software, no enterprise invoice.",
    "We start with the admin and compliance that quietly bleed your margin.",
    "If AI's the wrong tool for the job, we'll tell you.",
    "You own what we build. No lock-in, no dependency.",
  ],

  // Team ──────────────────────────────────────────────────────────────────────
  team: [
    { name: "Kieran Saint-Louis", role: "Founder & Principal Consultant" },
  ],
};
