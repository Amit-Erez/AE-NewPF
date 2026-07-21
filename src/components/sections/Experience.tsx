import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="sec-num">§ 03 · Experience</div>
          <h2 className="sec-title">
            Three internships, <span className="it">one through-line</span>:
            ship the thing, on time, at quality.
          </h2>
        </motion.div>
        <motion.div
          className="timeline"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="tl-row">
            <div className="tl-date">Oct 2025 — Nov 2025</div>
            <div>
              <h3 className="tl-role">
                Frontend Developer <span className="it">Intern</span>
              </h3>
              <div className="tl-company">Frontend Simplified · Summarist</div>
              <p className="tl-blurb">
                Shipped a Stripe-integrated subscription app on Next.js with
                Redux global state, Firebase Auth (email / Google / guest),
                webhook-gated premium content, protected route wrappers, and 99%
                Lighthouse score.
              </p>
            </div>
            <div className="tl-stack">
              <span>Next.js</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Stripe</span>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-date">Sep 2025 — Oct 2025</div>
            <div>
              <h3 className="tl-role">
                Frontend Developer <span className="it">Intern</span>
              </h3>
              <div className="tl-company">Skinstric AI</div>
              <p className="tl-blurb">
                Built a responsive AI-powered skin-analysis app in React with
                custom camera-capture flow, robust permission &amp; API error
                recovery, and an interactive results dashboard that makes
                complex metrics legible to non-technical users.
              </p>
            </div>
            <div className="tl-stack">
              <span>React</span>
              <span>REST APIs</span>
              <span>Camera API</span>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-date">Aug 2025 — Sep 2025</div>
            <div>
              <h3 className="tl-role">
                Frontend Developer <span className="it">Intern</span>
              </h3>
              <div className="tl-company">Frontend Simplified · Ultraverse</div>
              <p className="tl-blurb">
                Converted a static NFT marketplace into fully dynamic components
                consuming multiple REST APIs. Migrated deployment from GitHub
                Pages to Vercel and cut load time by 15%.
              </p>
            </div>
            <div className="tl-stack">
              <span>React</span>
              <span>Axios</span>
              <span>Vercel</span>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-date">Sep 2018 - Mar 2023</div>
            <div>
              <h3 className="tl-role">Operations QA / Artist Services</h3>
              <div className="tl-company">CD Baby · Portland, OR</div>
              <p className="tl-blurb">
                • Performed quality assurance on digital music releases,
                inspecting catalogue metadata (titles, contributors, ISRC and
                UPC codes, artwork) and approving releases for delivery to
                streaming platforms. <br/><br/>
                • Resolved artist-facing distribution
                issues via phone, email and chat, translating platform
                requirements into plain language for non-technical clients.
              </p>
            </div>
            <div className="tl-stack">
              <span>Digital Assets</span>
              <span>Metadata</span>
              <span>QA</span>
              <span>Customer Service</span>
            </div>
          </div>
          <div className="tl-row">
            <div className="tl-date">2005 — 2025</div>
            <div>
              <h3 className="tl-role">
                Musician <span className="it">(Self-employed)</span>
              </h3>
              <div className="tl-company">Independent · Remote</div>
              <p className="tl-blurb">
                Composed, arranged and delivered original music for labels,
                private clients and sync-licensing libraries. Developed strong
                client communication and project-management discipline across
                concurrent deliverables.
              </p>
            </div>
            <div className="tl-stack">
              <span>Client work</span>
              <span>Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
