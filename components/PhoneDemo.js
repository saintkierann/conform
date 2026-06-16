import { site } from "@/data/site";

// Loop: a short hand-built "Analysing" intro, then the REAL app result
// screenshot slow-scrolls so every check and its reason reads at a calm pace,
// holds, and gently loops. Pure CSS (no JS) so it can't ship blank; reduced
// motion shows the result static at the verdict. The screenshot keeps the
// in-app result identical to the real compliance app.

export default function PhoneDemo() {
  return (
    <div className="product-figure">
      <div className="phone">
        <div className="phone-screen demo">
          {/* Analysing intro (sits beneath; visible until the result fades in) */}
          <div className="demo-analysing" aria-hidden="true">
            <div className="demo-top">
              <span className="demo-brand">
                Conform <span className="demo-dot" />
              </span>
              <span className="demo-report">Report</span>
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

          {/* Real result, slow-scrolled through the detail */}
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
