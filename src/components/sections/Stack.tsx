import { motion } from "framer-motion";

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="wrap">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="sec-num">§ 04 · Stack</div>
          <h2 className="sec-title">
            The tools I reach for, <span className="it">grouped by job</span>.
          </h2>
        </motion.div>

        <motion.div
          className="stack-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="stack-card">
            <div className="k">Languages</div>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Frameworks</div>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>Zustand</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Styling</div>
            <ul>
              <li>Tailwind CSS</li>
              <li>CSS Modules</li>
              <li>Radix UI</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Backend &amp; Auth</div>
            <ul>
              <li>Firebase v9</li>
              <li>REST APIs</li>
              <li>Stripe</li>
              <li>Webhooks</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Browser APIs</div>
            <ul>
              <li>Web Audio API</li>
              <li>BiquadFilterNode</li>
              <li>AnalyserNode</li>
              <li>SVG</li>
              <li>Canvas</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Data &amp; Async</div>
            <ul>
              <li>Axios</li>
              <li>Recharts</li>
              <li>Firestore</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Testing</div>
            <ul>
              <li>Vitest</li>
              <li>Jest</li>
              <li>RTL</li>
            </ul>
          </div>
          <div className="stack-card">
            <div className="k">Tooling</div>
            <ul>
              <li>Vite</li>
              <li>Vercel</li>
              <li>Git / GitHub</li>
              <li>Figma</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
