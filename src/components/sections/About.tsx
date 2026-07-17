import { motion } from "framer-motion";
import vinyl from "../../assets/logo-vinyl-transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function About({
  togglePlay,
  isPlaying,
}: {
  togglePlay: () => void;
  isPlaying: boolean;
}) {
  return (
    <section className="section" id="about">
      <motion.div
        className="wrap"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="sec-head">
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
              <span className="it">deadlines, drafts and detail </span>
              to React, TypeScript and Next.js.
            </p>
            <div className="about-body">
              <p>
                In 2025 I shipped three consecutive internships back to back: a
                Stripe-integrated book platform, an AI skin-analysis tool, and a
                dynamic NFT marketplace. Each project hit a 96% Lighthouse score
                across performance, SEO and accessibility.
              </p>
              <p>
                Before code I spent twenty years as a self-employed musician —
                composing, arranging and delivering for labels, private clients
                and sync libraries. That work is where I learned how to ship:
                take feedback cleanly, hit the brief, and protect the soul of
                the thing while still meeting the spec.
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
                  99<span className="it">%</span>
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

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
              <div className="portrait">
                <figure
                  className={`portrait-figure ${isPlaying ? "spinning" : ""}`}
                >
                  <img
                    src={vinyl}
                    alt="Portrait of AE as a stylised vinyl record" className="vinyl"
                  />
                  <div className="playPause" onClick={togglePlay}>
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} className="pauseBtn" />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} className="playBtn" />
                    )}
                  </div>
                </figure>
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
