import { ArrowUpRight, Github } from 'lucide-react';

function DashboardVisual() {
  return <div className="dashboard-visual" aria-hidden="true"><div className="dashboard-top"><span /><span /><span /></div><aside><b>KB</b><i /><i /><i /></aside><div className="dashboard-main"><div><small>Students</small><strong>248</strong></div><div><small>Attendance</small><strong>94%</strong></div><div className="chart"><i /><i /><i /><i /><i /><i /></div><div className="dashboard-list"><span /><span /><span /></div></div></div>;
}

export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {project.visual === 'dashboard' ? <DashboardVisual /> : <img src={project.image} width={project.imageWidth} height={project.imageHeight} alt={`Interface preview of ${project.title}`} loading="eager" decoding="async" />}
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="project-lede">{project.description}</p>
        <dl className="project-evidence"><div><dt>Challenge</dt><dd>{project.challenge}</dd></div><div><dt>Engineering</dt><dd>{project.outcome}</dd></div></dl>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View live <ArrowUpRight size={17} /></a>}{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer"><Github size={17} /> Source</a>}{!project.liveUrl && !project.sourceUrl && <span>Private case study · Details available in conversation</span>}</div>
      </div>
    </article>
  );
}
