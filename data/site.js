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
  eyebrow: "Construction × AI — done properly",
  // The tagline splits on the em dash ( — ); the second half gets the accent.
  tagline: "Less admin, fewer errors, faster compliance — built for construction",
  intro:
    "Conform helps small and mid-sized UK construction firms cut the admin, tidy up compliance, and get hours back — by designing and building practical AI tools around the way your sites actually run.",
  // Short proof points shown under the hero headline.
  heroFacts: [
    { k: "Built for", v: "UK firms under 50" },
    { k: "Focus", v: "Compliance & admin" },
    { k: "Model", v: "Assess · Build · Run" },
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
    heading: "AI that speaks construction, not Silicon Valley.",
    body: [
      "Most AI advice is written for tech companies, not the firms that pour concrete, win bids and run crews. Conform exists for the other side: small and mid-sized builders who don't need another platform — they need someone who understands the job and can tell which tools are actually worth the bother.",
      "We come on-site, learn how you really work, and find the places where AI saves real hours or protects real margin — usually in admin, reporting and compliance. Then we build it, integrate it and hand it over. No jargon, no lock-in, no theatre.",
    ],
    traits: ["Construction-first", "Plain-spoken", "On-site", "Compliance-savvy", "Hands-on"],
  },

  // Flagship product ──────────────────────────────────────────────────────────
  flagship: {
    eyebrow: "Flagship product",
    name: "Compliance Photo & Reporting",
    tagline: "From site photo to building-control-ready report — on one phone.",
    body:
      "A mobile-first tool for project managers and site teams. Capture images and inspection data on site, structure the compliance evidence automatically, and generate reports that are ready for building control — without the evening admin or the lost paperwork.",
    features: [
      "Capture site photos & inspection data on site",
      "Structure compliance evidence automatically",
      "Generate professional reports in minutes",
      "Building-control-ready documentation",
    ],
    status: "", // ◂ TO ADD — e.g. "In pilot" or "Now onboarding firms" (leave "" to hide)
  },

  // Services ──────────────────────────────────────────────────────────────────
  services: [
    {
      title: "AI Opportunity Assessment",
      body:
        "We come on-site and map your tools, data and workflows — estimating, admin, safety, compliance — then give you a straight read on where AI saves real hours, where it doesn't, and what to do first.",
    },
    {
      title: "Compliance & Reporting Systems",
      body:
        "Site-reporting automation, evidence management and building-control-ready documentation — so compliance stops eating evenings and nothing slips through the cracks.",
    },
    {
      title: "Workflow Automation & Custom Tools",
      body:
        "We automate the repetitive admin and build internal tools fitted to how your site runs — quotes, RFIs, document drafting and back-office work.",
    },
    {
      title: "Implementation, Training & Support",
      body:
        "We build it, integrate it and leave your crew able to run it without us — with ongoing support and retainers when you want a steady hand.",
    },
  ],

  // Where we help (problem → what we do). Swap in real client work when ready. ─
  work: [
    {
      index: "01",
      client: "Endless paperwork",
      kind: "Admin & reporting",
      problem: "Site photos, inspection notes and reports pile up and get re-typed after every visit.",
      outcome: "Capture once on site — the report writes itself.",
    },
    {
      index: "02",
      client: "Slow compliance",
      kind: "Documentation",
      problem: "Compliance evidence is scattered across phones, emails and folders when building control asks.",
      outcome: "Structured evidence, building-control-ready on demand.",
    },
    {
      index: "03",
      client: "Manual back-office",
      kind: "Automation",
      problem: "Quotes, RFIs and admin done by hand, quietly eating billable hours.",
      outcome: "Automate the repetitive parts and give the team its hours back.",
    },
  ],

  // Why hire us ────────────────────────────────────────────────────────────────
  reasons: [
    "We know construction, not just AI.",
    "Built for firms under 50 — no enterprise bloat, no enterprise bill.",
    "Compliance and admin first — the work that actually drains your team.",
    "We'll tell you when AI isn't the answer.",
    "Everything we build, your team can run without us.",
  ],

  // Team ──────────────────────────────────────────────────────────────────────
  team: [
    { name: "Your name", role: "Founder & Principal Consultant" }, // ◂ TO ADD
  ],
};
