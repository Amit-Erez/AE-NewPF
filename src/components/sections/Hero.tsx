import "../../index.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="reveal in">
          <span className="eyebrow">
            <span className="dot"></span>Frontend Developer · Portland, OR
          </span>
        </div>

        <h1 className="hero-title reveal in">
          <span className="row">
            Amit <span className="it">Erez</span>
          </span>
          <span className="row">
            builds the <span className="it">web</span>.
          </span>
        </h1>
        <motion.div
          className="hero-sub-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="hero-lede reveal in">
            I'm a frontend developer shipping production <em>React</em> and{" "}
            <em>Next.js</em> applications — from Stripe-integrated platforms to
            real-time audio tools. Twenty years of disciplined client work as a
            music producer, now turned into <em>maintainable</em>, performant
            UI.
          </p>
          <div className="hero-meta reveal in">
            <div className="meta-row">
              <span>Based</span>
              <b>Portland, Oregon</b>
            </div>
            <div className="meta-row">
              <span>Focus</span>
              <b>React · Next.js · TS</b>
            </div>
            <div className="meta-row">
              <span>Lighthouse</span>
              <b>96 / 100 avg.</b>
            </div>
            <div className="meta-row">
              <span>Status</span>
              <b style={{ color: "#5ad17d" }}>Open to roles</b>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            React<span className="it">/Next.js</span>
          </span>
          <span>TypeScript</span>
          <span className="it">Redux toolkit</span>
          <span>Tailwind CSS</span>
          <span>Firebase</span>
          <span className="it">Stripe</span>
          <span>Web Audio API</span>
          <span>SVG &amp; Canvas</span>
          <span className="it">REST integration</span>
          <span>Vercel</span>
          {/* <!-- duplicated for seamless loop --> */}
          <span>
            React<span className="it">/Next.js</span>
          </span>
          <span>TypeScript</span>
          <span className="it">Redux toolkit</span>
          <span>Tailwind CSS</span>
          <span>Firebase</span>
          <span className="it">Stripe</span>
          <span>Web Audio API</span>
          <span>SVG &amp; Canvas</span>
          <span className="it">REST integration</span>
          <span>Vercel</span>
        </div>
      </div>
    </header>
  );
}
