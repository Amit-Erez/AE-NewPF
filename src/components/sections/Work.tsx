import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import ProjectMiniCard from "../ui/ProjectMiniCard";

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
            Six projects shipped in <span className="it">2025/6</span>
          </h2>
        </motion.div>

        <div className="projects">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[0]}
              className={"project flip reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[1]}
              className={"project reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={projects[2]}
              className={"project flip reveal in"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="minis-grid">
              <ProjectMiniCard project={projects[3]} />
              <ProjectMiniCard project={projects[4]} />
              <ProjectMiniCard project={projects[5]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
