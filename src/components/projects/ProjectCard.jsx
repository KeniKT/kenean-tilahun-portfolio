import { ArrowUpRight, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img src={project.image} alt={`Interface preview of ${project.title}`} loading={index > 0 ? 'lazy' : 'eager'} />
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-lede">{project.description}</p>
        <dl className="project-evidence">
          <div><dt>Problem</dt><dd>{project.challenge}</dd></div>
          <div><dt>Delivered</dt><dd>{project.outcome}</dd></div>
        </dl>
        <ul className="tag-list" aria-label="Technologies">{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-links">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View live <ArrowUpRight size={17} /></a>}
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={17} /> Source</a>}
        </div>
      </div>
    </article>
  );
}
