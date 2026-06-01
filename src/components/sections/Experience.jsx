import { experience } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section className="section shell" id="experience" aria-labelledby="experience-title">
      <Reveal><SectionHeading id="experience-title" index="03" eyebrow="Experience" title="Built in teams. Taught in rooms. Shipped in production." /></Reveal>
      <div className="timeline">{experience.map((item, index) => <Reveal key={item.role} delay={index * 70}><article><time>{item.period}</time><div><h3>{item.role}</h3><p className="company">{item.company}</p></div><p>{item.text}</p></article></Reveal>)}</div>
    </section>
  );
}
