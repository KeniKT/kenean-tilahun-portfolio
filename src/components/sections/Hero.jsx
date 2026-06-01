import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero shell" id="top" aria-labelledby="hero-title">
      <div className="hero-status"><span /> Available for software engineering opportunities</div>
      <div className="hero-grid">
        <div>
          <p className="hero-intro">Hello, I’m Kenean Tilahun.</p>
          <h1 id="hero-title">I engineer digital products that are <em>useful by design.</em></h1>
        </div>
        <div className="hero-aside">
          <p>Full-stack software engineer building responsive web and mobile products—from interface systems to deployment and production support.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowDown size={17} /></a>
            <a className="button button-quiet" href="mailto:keni232127@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <p><span>Based in</span>Addis Ababa, Ethiopia</p>
        <p><span>Core focus</span>Web · Mobile · Product</p>
        <div className="hero-socials"><a href="https://github.com/KeniKT" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/kenean/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></div>
      </div>
    </section>
  );
}
