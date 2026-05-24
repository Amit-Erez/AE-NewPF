import { motion } from "framer-motion";
import resume from "../../assets/Amit_Erez_CV-5-2026.pdf";


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
          <a className="contact-cta" href="mailto:amiterezdev@gmail.com">
            <span>amiterezdev@gmail.com</span> <span>↗</span>
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
        <a href={resume} target="_blank">
          résumé ↗
        </a>
      </motion.div>
    </section>
  );
}
