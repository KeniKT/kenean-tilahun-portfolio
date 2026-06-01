import { capabilities, stack } from '../../data/portfolio';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <Reveal><SectionHeading id="about-title" index="02" eyebrow="How I work" title="Design sensitivity. Engineering discipline." /></Reveal>
      <div className="about-grid">
        <Reveal className="about-copy"><p>I’m a full-stack engineer who likes owning the whole journey: understanding the actual problem, shaping a clear interaction, building the system, and staying with it through deployment.</p><p>My background spans client work, product development, technical teaching, and developer communities. That mix made me comfortable moving between user needs, implementation details, and clear collaboration.</p></Reveal>
        <div className="capability-grid">{capabilities.map((item, index) => <Reveal key={item.number} delay={index * 60}><article className="capability"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div>
      </div>
      <Reveal><div className="stack-panel"><p className="eyebrow">Tools I use to ship</p><div>{stack.map((category) => <section key={category.group}><h3>{category.group}</h3><p>{category.items.join(' · ')}</p></section>)}</div></div></Reveal>
    </section>
  );
}
