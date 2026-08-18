import { createElement } from 'react';
import { BrainCircuit, Layers, Landmark, Smartphone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const domains = [
  { icon: Landmark, title: 'Fintech systems', text: 'Payments, POS, wallets, gateways, vouchers, and services operating at meaningful transaction scale.' },
  { icon: BrainCircuit, title: 'AI quality', text: 'Code and API evaluation plus computer-vision data work across detection, segmentation, and classification.' },
  { icon: Layers, title: 'Full-stack products', text: 'Typed interfaces, API contracts, authentication, data models, role boundaries, and deployment.' },
  { icon: Smartphone, title: 'Mobile delivery', text: 'Cross-platform Flutter products with deliberate state management and real-time Firebase workflows.' },
];

export default function About() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <Reveal><SectionHeading id="about-title" index="01" eyebrow="About" title="Product judgment backed by production experience." /></Reveal>
      <div className="about-grid">
        <Reveal className="about-copy"><p>I’m a software engineer who enjoys the point where product clarity meets systems thinking. I’ve contributed to high-volume payments, delivery operations, AI training workflows, production websites, and mobile applications.</p><p>I work best when I can understand the operating problem, shape a maintainable boundary, and stay accountable through deployment. My direction is straightforward: build scalable, user-focused software with teams that care about engineering quality.</p></Reveal>
        <div className="domain-grid">{domains.map(({ icon, title, text }, index) => <Reveal key={title} delay={index * 60}><article className="domain-card">{createElement(icon)}<h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </div>
    </section>
  );
}
