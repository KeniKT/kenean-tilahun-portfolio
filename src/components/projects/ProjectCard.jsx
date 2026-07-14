import { ArrowUpRight, Github } from 'lucide-react';

function KinderBeamVisual() {
  return <div className="project-type-visual" aria-hidden="true"><span>KB</span><p>Administration<br />Authentication<br />Role-based access</p></div>;
}

export default function ProjectCard({ project, index, layout = 'wide' }) {
  return (
    <article className={`project-card project-${layout}`}>
      <header className="project-header"><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.eyebrow || project.period}</p></div><ArrowUpRight aria-hidden="true" /></header>
      <div className="project-visual">
        {project.visual === 'dashboard' ? <KinderBeamVisual /> : <img src={project.image} width={project.imageWidth} height={project.imageHeight} alt={`Interface preview of ${project.title}`} loading="eager" decoding="async" />}
      </div>
      <div className="project-body">
        <p>{project.description || project.text}</p>
        <p className="technology-line">{project.technologies.join(' / ')}</p>
        <div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View project <ArrowUpRight /></a>}{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer"><Github /> Source</a>}{!project.liveUrl && !project.sourceUrl && <span>Private project</span>}</div>
      </div>
    </article>
  );
}
