import { approach, education } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Approach() {
  return (
    <section className="section shell" id="approach" aria-labelledby="approach-title">
      <Reveal><SectionHeading id="approach-title" index="06" eyebrow="Engineering approach" title="Built for the handoff after launch." /></Reveal>
      <div className="approach-grid">{approach.map((item, index) => <Reveal key={item.number} delay={index * 70}><article><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div>
      <Reveal><article className="education-card"><p className="eyebrow">Education</p><div><h3>{education.program}</h3><p>{education.school} · {education.location}</p></div><time>{education.period}</time><p>{education.detail}</p></article></Reveal>
    </section>
  );
}
