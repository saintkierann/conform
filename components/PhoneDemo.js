import { site } from "@/data/site";

// Simple, two-phase loop (~10.5s), pure CSS:
//  1. Analysing — scan-line, ~5s.
//  2. The real result slow-scrolls from the Compliant verdict through every
//     check + reason (~4s), holds ~1s, then fades back to the scan and loops.
// Screenshot is the real compliance app; reduced motion shows the result still.

export default function PhoneDemo() {
  return (
    <div className="product-figure">
      <div className="phone">
        <div className="phone-screen demo">
          {/* Analysing (beneath; shown until the result fades in) */}
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

          {/* Real result, slow-scrolled through the checklist + reasons */}
          <div className="demo-shotwrap">
            <img
              className="demo-shot"
              src="/app/firecheck-result.png"
              alt={site.flagship.shotAlt}
            />
          </div>
        </div>
      </div>
      {site.flagship.caption ? (
        <p className="product-caption">{site.flagship.caption}</p>
      ) : null}
    </div>
  );
}
