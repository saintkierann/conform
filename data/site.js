// ─────────────────────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO MAKE THE SITE YOURS.
//  Replace the copy, keep the structure. Anything marked  ◂ PLACEHOLDER
//  is real-world detail to swap in (clients, links, team, repos).
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Company identity ─────────────────────────────────────────────────────────
  company: "Conform",
  fullName: "Conform Construction Consulting",
  eyebrow: "Construction × AI Consulting",
  tagline: "AI assessments, products and solutions — built for construction firms.",
  intro:
    "We help construction companies under 50 people cut through the AI noise. We assess where it actually fits, build what's worth building, and leave your team running it with confidence.",
  // Short proof points shown under the hero headline.
  heroFacts: [
    { k: "Built for", v: "Firms under 50" },
    { k: "We do", v: "Assess · Build · Enable" },
    { k: "How", v: "On-site, plain-spoken" },
  ],

  // Contact ──────────────────────────────────────────────────────────────────
  email: "hello@example.com", // ◂ PLACEHOLDER
  social: {
    linkedin: "https://linkedin.com/company/your-company", // ◂ PLACEHOLDER
    github: "https://github.com/your-username", // ◂ PLACEHOLDER
  },
  bookingUrl: "", // optional Calendly/Cal.com link — leave "" to hide the button

  // About the company ─────────────────────────────────────────────────────────
  about: {
    heading: "AI consulting that speaks construction.",
    body: [
      "Conform exists because most AI advice is written for tech companies, not the firms that pour concrete, win bids and run crews. Small builders don't need another platform — they need someone who understands the job and can tell which tools are worth the bother.",
      "We come on-site, learn how you actually work, and find the places AI saves real hours or wins real margin. Then we build it, integrate it, and hand it over — no jargon, no lock-in, no theatre.",
    ],
    traits: ["Practical", "Plain-spoken", "On-site", "Honest about trade-offs", "Hands-on"],
  },

  // Services ──────────────────────────────────────────────────────────────────
  services: [
    {
      title: "As-Is AI Assessment",
      body:
        "We map your current tools, data and workflows — estimating, scheduling, admin, safety — and give you a straight read on where AI helps, where it doesn't, and what to do first.",
    },
    {
      title: "AI Strategy & Roadmap",
      body:
        "A prioritised, costed plan tied to the things that move your business: jobs won, margin protected, hours given back. Not a wish list.",
    },
    {
      title: "Build & Integrate",
      body:
        "Custom AI tools and products fitted to how your site runs — from takeoff and document drafting to RFIs, reporting and back-office admin.",
    },
    {
      title: "Enablement & Training",
      body:
        "We leave your crew more capable than we found them — simple playbooks and training so the tools keep paying off after we're gone.",
    },
  ],

  // Selected client work ──────────────────────────────────────────────────────
  work: [
    {
      index: "01",
      client: "A regional contractor", // ◂ PLACEHOLDER (sector is fine if NDA)
      kind: "Assessment + Build",
      problem: "Estimators buried in manual takeoffs and repetitive quotes.",
      outcome: "Estimating workflow that cut quote turnaround by 40%.",
    },
    {
      index: "02",
      client: "A small homebuilder",
      kind: "Strategy",
      problem: "Owner wanted to 'do AI' but had no idea where to start.",
      outcome: "A focused roadmap targeting scheduling and admin first.",
    },
    {
      index: "03",
      client: "A specialist subcontractor",
      kind: "Build & Integrate",
      problem: "Project managers losing hours to RFIs and paperwork.",
      outcome: "Drafting assistant that gave each PM ~6 hours back per week.",
    },
  ],

  // Curated GitHub projects ───────────────────────────────────────────────────
  projects: [
    {
      name: "project-one", // ◂ PLACEHOLDER repo name
      blurb: "A short line on why this project is interesting and what it does.",
      url: "https://github.com/your-username/project-one",
      tags: ["Python", "LLM"],
    },
    {
      name: "project-two",
      blurb: "Another flagship repo — what problem it solves and why it stands out.",
      url: "https://github.com/your-username/project-two",
      tags: ["TypeScript", "Tooling"],
    },
    {
      name: "project-three",
      blurb: "A third project worth showing off, in one tidy sentence.",
      url: "https://github.com/your-username/project-three",
      tags: ["Automation"],
    },
  ],

  // Team ──────────────────────────────────────────────────────────────────────
  team: [
    { name: "Name One", role: "Founder / Principal Consultant" }, // ◂ PLACEHOLDER
    { name: "Name Two", role: "AI Engineer" },
    { name: "Name Three", role: "Delivery & Training" },
  ],

  // Why hire us ────────────────────────────────────────────────────────────────
  reasons: [
    "We know construction, not just AI.",
    "Built for firms under 50 — no enterprise bloat, no enterprise bill.",
    "We'll tell you when AI isn't the answer.",
    "Everything we build, your team can run without us.",
  ],
};
