import type { Project } from "../../types";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="project-inner">
        <div className="project-info">
          <div>
            <div className="project-meta">
              <span className="num">{project.num}</span>
              <span className="year">{project.year}</span>
            </div>
            <h3 className="project-title">
              {project.title}<br/> <span className="it">{project.subtitle}</span>
            </h3>
            <p className="project-desc">{project.description}</p>
          </div>
          <div>
            <div className="project-tags" style={{ marginBottom: "20px" }}>
              {project.tags.map((tag: string, index: number) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a
                className="pill-link primary"
                href={project.liveDemoUrl}
                target="_blank"
              >
                Live demo ↗
              </a>
              <a className="pill-link" href={project.githubUrl} target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className={`project-canvas ${project.canvasClass}`}>
          <div className="mock">
            <div className="mock-bar">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="mock-body">
              <img
                src={project.imageSrc}
                loading="lazy"
                alt="EQ-Project Image"
                width={"full"}
                height={"full"}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
