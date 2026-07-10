import { ArrowUpRight } from 'lucide-react';
import { education, skills } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <Reveal><header className="editorial-heading"><p>03 / About</p><h2 id="about-title">A little about me</h2></header></Reveal>
      <div className="about-grid">
        <Reveal className="about-copy"><p>I’m a software engineer in Addis Ababa. I’ve worked on payments, delivery operations, AI training, production websites, and mobile applications.</p><p>I enjoy turning real operating constraints into software that is understandable, maintainable, and ready to ship.</p><a className="text-link" href="#contact">Get in touch <ArrowUpRight /></a><div className="education-note"><span>Education</span><p>{education.program}, {education.school}</p><time>{education.period}</time></div></Reveal>
        <div className="skills-index" aria-label="Technical skills">{skills.map((skill, index) => <Reveal key={skill.group} delay={index * 35}><div className="skill-row"><span>0{index + 1}</span><h3>{skill.group}</h3><p>{skill.items.join(' / ')}</p></div></Reveal>)}</div>
      </div>
    </section>
  );
}
