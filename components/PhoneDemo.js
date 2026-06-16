import { site } from "@/data/site";

// ~10s loop, pure CSS (can't ship blank; reduced motion shows the result still):
//  1. Analysing (longer dwell, scan-line)
//  2. Real result slow-scrolls through every check + reason
//  3. "Add to report" — tap pulse + an "Added to report" confirmation
//  4. The real Final Report document slow-scrolls
//  …then gently loops. Screenshots are the real compliance app.

export default function PhoneDemo() {
  return (
    <div className="product-figure">
      <div className="phone">
        <div className="phone-screen demo">
          {/* 1 — Analysing intro (beneath; shown until the result fades in) */}
          <div className="demo-analysing" aria-hidden="true">
            <div className="demo-top">
              <span className="demo-brand">
                Conform <span className="demo-dot" />
              </span>
              <span className="demo-report-pill">Report</span>
            </div>
            <div className="demo-anabody">
              <div className="demo-photo">
                <span className="demo-scan" />
              </div>
              <div className="demo-analabel">
                <span className="demo-spin" /> Analysing the fire-stopping…
              </div>
              <div className="demo-skel" style={{ width: "82%" }} />
              <div className="demo-skel" style={{ width: "63%" }} />
            </div>
          </div>

          {/* 2 — Real result, slow-scrolled */}
          <div className="demo-shotwrap">
            <img
              className="demo-shot"
              src="/app/firecheck-result.png"
              alt={site.flagship.shotAlt}
            />
          </div>

          {/* 4 — Real final report, slow-scrolled */}
          <div className="demo-reportwrap" aria-hidden="true">
            <img className="demo-report" src="/app/firereport.png" alt="" />
          </div>

          {/* 3 — Add-to-report tap + confirmation */}
          <span className="demo-tap" aria-hidden="true" />
          <div className="demo-toast" aria-hidden="true">
            <span className="demo-toast-ico">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6 9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Added to report
          </div>
        </div>
      </div>
      {site.flagship.caption ? (
        <p className="product-caption">{site.flagship.caption}</p>
      ) : null}
    </div>
  );
}
