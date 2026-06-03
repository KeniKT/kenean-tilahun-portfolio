import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/portfolio';
import ProjectCard from '../projects/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Work() {
  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <Reveal><SectionHeading id="work-title" index="01" eyebrow="Selected work" title="Evidence, not decoration." description="A closer look at the constraints, ownership, and engineering behind products I’ve shipped." /></Reveal>
      <div className="projects-list">{projects.slice(0, 3).map((project, index) => <Reveal key={project.id} delay={index * 70}><ProjectCard project={project} index={index} /></Reveal>)}</div>
      <Reveal><div className="more-work"><div><span>Also shipped</span><h3>SIRA — a real-time mobile freelancing platform</h3></div><p>{projects[3].description}</p><a href={projects[3].sourceUrl} target="_blank" rel="noreferrer" aria-label="View SIRA source code"><ArrowRight /></a></div></Reveal>
    </section>
  );
}
