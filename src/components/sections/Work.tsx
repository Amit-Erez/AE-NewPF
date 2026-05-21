import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-head reveal in">
          <div className="sec-num">§ 01 · Selected Work</div>
          <h2 className="sec-title">
            Five projects shipped in <span className="it">2025</span>, each held
            to a 96+ Lighthouse score.
          </h2>
        </div>
        <div className="projects">
           <ProjectCard project={projects[0]} className={"project reveal in"} />
           <ProjectCard project={projects[1]} className={"project flip reveal in"} />
           <ProjectCard project={projects[2]} className={"project reveal in"} />
           <ProjectCard project={projects[3]} className={"project flip reveal in"} />
           <ProjectCard project={projects[4]} className={"project reveal in"} />
         </div>
      </div>
    </section>
  );
}
