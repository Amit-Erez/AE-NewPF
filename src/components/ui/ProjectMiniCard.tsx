import type { Project } from "../../types";

export default function ProjectMiniCard({
  project,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article className="project reveal in mini">
      <div className="project-inner-mini">
        <div className="project-info-mini">
          <div>
            <div className="project-meta">
              <span className="num">{project.num}</span>
              <span className="year">{project.year}</span>
            </div>
            <h3 className="project-title-mini">
              {project.title}<br/> <span className="it">{project.subtitle}</span>
            </h3>
            <p className="project-desc">{project.description}</p>
          </div>
          <div>
            <div className="project-tags" style={{ marginBottom: "16px" }}>
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
                Live demo
              </a>
              <a className="pill-link" href={project.githubUrl} target="_blank">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className={`project-canvas-mini ${project.canvasClass}`}>
          <div className="mock-mini">
            <div className="mock-bar">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="mock-body-mini">
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
