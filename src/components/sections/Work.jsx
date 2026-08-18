import { ArrowUpRight } from 'lucide-react';
import { additionalProjects, projects } from '../../data/portfolio';
import ProjectCard from '../projects/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Work() {
  return (
    <section className="section shell" id="projects" aria-labelledby="projects-title">
      <Reveal><SectionHeading id="projects-title" index="04" eyebrow="Featured projects" title="Architecture you can inspect." description="Personal products presented through constraints, system choices, and delivery—not screenshots alone." /></Reveal>
      <div className="projects-list">{projects.map((project, index) => <Reveal key={project.id} delay={index * 60}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      <Reveal><div className="additional-heading"><p className="section-kicker"><span>05</span>Additional production work</p><h2>From stakeholder brief to live system.</h2></div></Reveal>
      <div className="additional-grid">{additionalProjects.map((project, index) => <Reveal key={project.id} delay={index * 70}><article className="additional-card"><div className="additional-image"><img src={project.image} width={project.imageWidth} height={project.imageHeight} loading="eager" decoding="async" alt={`${project.title} website preview`} /></div><div><p className="eyebrow">{project.period}</p><h3>{project.title}</h3><p>{project.text}</p><ul className="tag-list" aria-label={`${project.title} technologies`}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul><a href={project.liveUrl} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={16} /></a></div></article></Reveal>)}</div>
    </section>
  );
}
