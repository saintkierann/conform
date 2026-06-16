"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

// The reveal moment: "Analysing…" resolves into a Compliant verdict + a
// checklist that ticks in. Plays once when scrolled into view, then holds.
// Default state is fully visible (analysing) so the screen is never blank;
// the reveal is an enhancement, and reduced-motion jumps straight to the result.

const CHECKS = [
  "Seal completeness",
  "Fire collar fitted",
  "Correct firestop product",
  "Opening correctly sized",
];

function Tick() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PhoneDemo() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          timer = setTimeout(() => setRevealed(true), 1150);
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="product-figure">
      <div className="phone">
        <div
          ref={ref}
          className={"phone-screen demo-screen" + (revealed ? " is-revealed" : "")}
          role="img"
          aria-label={site.flagship.shotAlt}
        >
          <div className="demo-top">
            <span className="demo-brand">
              Conform <span className="demo-dot" />
            </span>
            <span className="demo-report">Report</span>
          </div>

          {/* Analysing */}
          <div className="demo-layer demo-analysing" aria-hidden="true">
            <div className="demo-photo">
              <span className="demo-scan" />
            </div>
            <div className="demo-analabel">
              <span className="demo-spin" /> Analysing the fire-stopping…
            </div>
            <div className="demo-skel" style={{ width: "82%" }} />
            <div className="demo-skel" style={{ width: "63%" }} />
          </div>

          {/* Verdict + checklist */}
          <div className="demo-layer demo-reveal">
            <div className="demo-item demo-verdict" style={{ "--i": 0 }}>
              <div className="demo-verdict-top">
                <span className="demo-verdict-word">
                  <span className="demo-verdict-ico">
                    <Tick />
                  </span>
                  Compliant
                </span>
                <span className="demo-chip">High</span>
              </div>
              <p className="demo-verdict-sum">
                Penetration correctly fire-stopped — gap sealed, pipe collar
                fitted, seal cured.
              </p>
            </div>
            {CHECKS.map((c, i) => (
              <div className="demo-item demo-check" key={c} style={{ "--i": i + 1 }}>
                <span className="demo-tick" style={{ "--i": i + 1 }}>
                  <Tick />
                </span>
                <span className="demo-check-label">{c}</span>
                <span className="demo-pass">Pass</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {site.flagship.caption ? (
        <p className="product-caption">{site.flagship.caption}</p>
      ) : null}
    </div>
  );
}
