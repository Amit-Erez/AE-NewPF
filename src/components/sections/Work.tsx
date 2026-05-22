import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <motion.div
          className="sec-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="sec-num">§ 01 · Selected Work</div>
          <h2 className="sec-title">
            Five projects shipped in <span className="it">2025</span>, each held
            to a 96+ Lighthouse score.
          </h2>
        </motion.div>

        <div className="projects">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[0]}
              className={"project reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[1]}
              className={"project flip reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[2]}
              className={"project reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[3]}
              className={"project flip reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[4]}
              className={"project reveal in"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
