import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="project-top">
        <span className="eyebrow">{project.category} project</span>
        <span className="project-index">/{project.id}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.details && (
        <ul>
          {project.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}

      <div className="tags">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live demo <FiArrowUpRight />
          </a>
        )}

        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            Source code <FiArrowUpRight />
          </a>
        )}
      </div>
    </article>
  );
}