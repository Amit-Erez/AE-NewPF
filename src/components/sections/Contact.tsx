import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <motion.div
          className="contact-eyebrow"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="pulse-dot"></span>Currently open to roles · Remote /
          Portland, OR
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Let's
            <br />
            <span className="it">build it.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a
            className="contact-cta"
            href="/cdn-cgi/l/email-protection#86e7ebeff2e3f4e3fce2e3f0c6e1ebe7efeaa8e5e9eb"
          >
            <span
              className="__cf_email__"
              data-cfemail="593834302d3c2b3c233d3c2f193e34383035773a3634"
            >
              [email&#160;protected]
            </span>{" "}
            <span>↗</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/Amit-Erez" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/amiterez80/" target="_blank">
          LinkedIn
        </a>
        <a href="tel:+15038534849">+1 (503) 853-4849</a>
        <a href="#" target="_blank">
          Download résumé ↗
        </a>
      </motion.div>
    </section>
  );
}
