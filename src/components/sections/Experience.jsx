import { ArrowUpRight } from 'lucide-react';
import { experience } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section className="section experience-section shell" id="experience" aria-labelledby="experience-title">
      <Reveal><SectionHeading id="experience-title" index="03" eyebrow="Experience" title="Real systems. Visible impact." description="Engineering contributions across fintech, delivery operations, AI quality, and production web platforms." /></Reveal>
      <div className="experience-list">{experience.map((item, index) => <Reveal key={`${item.company}-${item.role}`} delay={index * 60}><article className="experience-card"><div className="experience-marker"><span>0{index + 1}</span><i /></div><div className="experience-title"><p>{item.period}</p><h3>{item.role}</h3><span>{item.company}</span></div><div className="experience-detail"><div><span>{item.type}</span><strong>{item.impact}</strong></div><p>{item.text}</p><ul className="tag-list">{item.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></div><ArrowUpRight className="experience-arrow" aria-hidden="true" /></article></Reveal>)}</div>
    </section>
  );
}
