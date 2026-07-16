import { additionalProjects, projects } from '../../data/portfolio';
import ProjectCard from '../projects/ProjectCard';
import Reveal from '../ui/Reveal';

export default function Work() {
  const allProjects = [...projects, ...additionalProjects];
  const layouts = ['wide', 'left', 'right', 'left', 'wide'];
  return (
    <section className="section work-section shell" id="work" aria-labelledby="work-title">
      <Reveal><header className="editorial-heading work-heading"><p>01 / Selected work</p><h2 id="work-title">Things I’ve built</h2><span>Web / Mobile / Full stack</span></header></Reveal>
      <div className="projects-list">{allProjects.map((project, index) => <Reveal key={project.id}><ProjectCard project={project} index={index} layout={layouts[index]} /></Reveal>)}</div>
    </section>
  );
}
