import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../../data/portfolio';

export default function Hero() {
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero-main">
        <p className="hero-label">Portfolio / 2026</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
      </div>
      <div className="hero-intro-block">
        <p>Full-stack engineer working across web, mobile, backend systems, fintech, and AI data quality.</p>
        <div className="hero-meta"><span>{profile.location}</span><span className="availability"><i />{profile.availability}</span></div>
        <a className="text-link" href="#work">Selected work <ArrowDown /></a>
      </div>
      <a className="hero-contact" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a>
    </section>
  );
}
