import "../../index.css";
import { motion } from "framer-motion";
import headshot from "../../assets/headshot_circle.png";
import html from "../../assets/HTML5.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import next from "../../assets/nextjs.png";
import ts from "../../assets/typescript.png";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux-logo.png";
import firebase from "../../assets/firebase.png";
import zustand from "../../assets/zustand.svg";
import node from "../../assets/nodejs.png";
import express from "../../assets/express.png";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">
            <span className="dot"></span>Frontend Developer · Portland, OR
          </span>
        </motion.div>
        <div className="hero_title-container">
          <motion.div
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="hero-title">
              <span className="row">
                Amit <span className="it">Erez</span>
              </span>
              <span className="row smaller">
                ships <span className="it">interfaces</span>.
              </span>
            </h1>
          </motion.div>
          <motion.div
            className="headshot_container"
            initial={{
              x: "20vw",
              y: "-20vh",
              opacity: 0,
              scale: 0.1,
              filter: "saturate(0)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "saturate(1)",
              x: 0,
              y: 0,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src={headshot}
              alt="Headshot of Amit Erez"
              className="headshot"
            />
          </motion.div>
        </div>
        <motion.div
          className="hero-sub-row"
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="hero-lede reveal in">
            Frontend developer in Portland, OR, working in <em>React</em>, <em>TypeScript</em> and 
            <em> Next.js</em>, with growing full-stack experience in <em>Node</em> and <em>Express</em>.
            Twenty years of music production taught me to deliver client work on
            deadline; six deployed projects show what that looks like in code.
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
          <span>
            Node.js<span className="it">/Express</span>
          </span>
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
          <span>
            Node.js<span className="it">/Express</span>
          </span>
          <span className="it">Stripe</span>
          <span>Web Audio API</span>
          <span>SVG &amp; Canvas</span>
          <span className="it">REST integration</span>
          <span>Vercel</span>
        </div>
      </div>
      <div className="logo_marquee" aria-hidden="true">
        <div className="logo_marquee-track">
          <span>
            <img src={html} alt="html logo" className="logos" />
          </span>
          <span>
            <img src={css} alt="css logo" className="logos" />
          </span>
          <span>
            <img src={js} alt="javascript logo" className="logos" />
          </span>
          <span>
            <img src={ts} alt="typescript logo" className="logos" />
          </span>
          <span>
            <img src={redux} alt="redux logo" className="logos" />
          </span>
          <span>
            <img src={zustand} alt="zustand logo" className="logos" />
          </span>
          <span>
            <img src={tailwind} alt="tailwind logo" className="logos" />
          </span>
          <span>
            <img src={firebase} alt="firebase logo" className="logos" />
          </span>
          <span>
            <img src={react} alt="react logo" className="logos" />
          </span>
          <span>
            <img src={next} alt="next logo" className="logos" />
          </span>
          <span>
            <img src={node} alt="next logo" className="logos" />
          </span>
          <span>
            <img src={express} alt="next logo" className="logos" />
          </span>

          {/* <!-- duplicated for seamless loop --> */}
          <span>
            <img src={html} alt="html logo" className="logos" />
          </span>
          <span>
            <img src={css} alt="css logo" className="logos" />
          </span>
          <span>
            <img src={js} alt="javascript logo" className="logos" />
          </span>
          <span>
            <img src={ts} alt="typescript logo" className="logos" />
          </span>
          <span>
            <img src={redux} alt="redux logo" className="logos" />
          </span>
          <span>
            <img src={zustand} alt="zustand logo" className="logos" />
          </span>
          <span>
            <img src={tailwind} alt="tailwind logo" className="logos" />
          </span>
          <span>
            <img src={firebase} alt="firebase logo" className="logos" />
          </span>
          <span>
            <img src={react} alt="react logo" className="logos" />
          </span>
          <span>
            <img src={next} alt="next logo" className="logos" />
          </span>
          <span>
            <img src={node} alt="next logo" className="logos" />
          </span>
          <span>
            <img src={express} alt="next logo" className="logos" />
          </span>
        </div>
      </div>
    </header>
  );
}
