import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section" id="about">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

          <div className="sec-head reveal in">
            <div className="sec-num">§ 02 · About</div>
            <h2 className="sec-title">
              Two decades of <span className="it">client delivery</span>, three
              internships of production code.
            </h2>
          </div>

          <div className="about-grid">
            <div className="reveal in">
              <p className="about-lede">
                I moved from <span className="it">producing music</span> into
                building production frontends — bringing the same discipline of{" "}
                <span className="it">deadlines, drafts and detail</span>
                to React, TypeScript and Next.js.
              </p>
              <div className="about-body">
                <p>
                  In 2025 I shipped three consecutive internships back to back:
                  a Stripe-integrated book platform, an AI skin-analysis tool,
                  and a dynamic NFT marketplace. Each project hit a 96%
                  Lighthouse score across performance, SEO and accessibility.
                </p>
                <p>
                  Before code I spent twenty years as a self-employed musician —
                  composing, arranging and delivering for labels, private
                  clients and sync libraries. That work is where I learned how
                  to ship: take feedback cleanly, hit the brief, and protect the
                  soul of the thing while still meeting the spec.
                </p>
                <p>
                  I'm based in Portland, OR and currently open to frontend roles
                  where craft, audio, data visualisation or audio-driven UI is
                  part of the product story.
                </p>
              </div>

              <div className="stats">
                <div>
                  <div className="stat-num">
                    96<span className="it">%</span>
                  </div>
                  <div className="stat-label">Avg Lighthouse score</div>
                </div>
                <div>
                  <div className="stat-num">
                    3<span className="it">×</span>
                  </div>
                  <div className="stat-label">Internships in 2025</div>
                </div>
                <div>
                  <div className="stat-num">
                    20<span className="it">yrs</span>
                  </div>
                  <div className="stat-label">Client delivery</div>
                </div>
              </div>
            </div>

            <div className="reveal in">
              <div className="portrait">
                {/* <!-- Decorative portrait placeholder: stylised vinyl + AE --> */}
                <svg className="portrait-figure" viewBox="0 0 200 200">
                  <defs>
                    <radialGradient id="vinyl" cx="50%" cy="50%" r="50%">
                      <stop offset="0" stop-color="#1a1916" />
                      <stop offset=".55" stop-color="#0c0b0a" />
                      <stop offset="1" stop-color="#000" />
                    </radialGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="96"
                    fill="url(#vinyl)"
                    stroke="#26241f"
                  />
                  <g fill="none" stroke="#1f1d18" stroke-width="1">
                    <circle cx="100" cy="100" r="86" />
                    <circle cx="100" cy="100" r="78" />
                    <circle cx="100" cy="100" r="70" />
                    <circle cx="100" cy="100" r="62" />
                    <circle cx="100" cy="100" r="54" />
                    <circle cx="100" cy="100" r="46" />
                  </g>
                  <circle cx="100" cy="100" r="34" fill="#ff5b2e" />
                  <text
                    x="100"
                    y="108"
                    text-anchor="middle"
                    font-family="Instrument Serif"
                    font-size="38"
                    fill="#0b0b0a"
                    font-style="italic"
                  >
                    Æ
                  </text>
                  <circle cx="100" cy="100" r="3" fill="#0b0b0a" />
                </svg>
                <div className="portrait-caption">
                  <div>
                    <b>Side A</b>
                    <span>Frontend Developer · 2025–</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <b>Side B</b>
                    <span>Music Producer · 2003–2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </motion.div>
    </section>
  );
}
