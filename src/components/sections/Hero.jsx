import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';
import { profile } from '../../data/portfolio';
import MagneticLink from '../ui/MagneticLink';

export default function Hero() {
  const heroRef = useRef(null);
  const trackPointer = (event) => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
    heroRef.current.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title" ref={heroRef} onPointerMove={trackPointer}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-status"><span /> {profile.availability}</div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">{profile.name} <span>/</span> {profile.role}</p>
          <h1 id="hero-title">I build software that performs when <em>real scale arrives.</em></h1>
        </div>
        <div className="hero-aside">
          <p>Full-stack engineer with four years across fintech, AI, enterprise web, and mobile products—working from interface and APIs through data and production delivery.</p>
          <div className="hero-actions">
            <MagneticLink className="button button-primary" href="#projects">View my work <ArrowDown size={17} /></MagneticLink>
            <a className="button button-quiet" href={`mailto:${profile.email}?subject=Resume request`}>Request resume <FileText size={17} /></a>
          </div>
          <a className="connect-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="hero-orbit" aria-hidden="true"><span>Fintech</span><span>Full stack</span><span>AI</span><span>Mobile</span></div>
      <div className="hero-footer">
        <p><span>Production scale</span>2B+ Birr · 150K+ monthly orders</p>
        <p><span>Core stack</span>React · Next.js · Node · Django · Flutter</p>
        <div className="hero-socials"><a href="https://github.com/KeniKT" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github /></a><a href="https://www.linkedin.com/in/kenean/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></div>
      </div>
    </section>
  );
}
