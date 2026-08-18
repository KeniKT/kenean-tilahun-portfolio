import { skills } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
  return (
    <section className="section shell" id="skills" aria-labelledby="skills-title">
      <Reveal><SectionHeading id="skills-title" index="02" eyebrow="Technical range" title="One engineer. Multiple product surfaces." description="A practical stack shaped by production payments, delivery operations, AI data work, and full-stack product delivery." /></Reveal>
      <div className="skills-bento">{skills.map((skill, index) => <Reveal key={skill.group} delay={index * 45}><article className={`skill-card skill-${index + 1}`}><span>{skill.accent}</span><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div>
    </section>
  );
}
