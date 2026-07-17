import { experience } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

export default function Experience() {
  return (
    <section className="section experience-section shell" id="experience" aria-labelledby="experience-title">
      <Reveal><header className="editorial-heading"><p>02 / Experience</p><h2 id="experience-title">Selected experience</h2></header></Reveal>
      <div className="experience-list">{experience.map((item, index) => <Reveal key={`${item.company}-${item.role}`} delay={index * 45}><article className="experience-row"><time>{item.period}</time><div className="experience-name"><h3>{item.company}</h3><p>{item.role}</p></div><div className="experience-copy"><p>{item.text}</p><p className="experience-impact">{item.impact}</p><p className="technology-line">{item.technologies.join(' / ')}</p></div></article></Reveal>)}</div>
    </section>
  );
}
