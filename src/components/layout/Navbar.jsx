import { useEffect, useState } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const close = () => setOpen(false); window.addEventListener('hashchange', close); return () => window.removeEventListener('hashchange', close); }, []);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kenean Tilahun, back to top"><span>KT</span><span className="brand-copy">Kenean Tilahun<small>Software engineer</small></span></a>
      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="resume-link" href={`mailto:${profile.email}?subject=Resume request`} title="A verified resume PDF is not currently hosted"><FileText size={14} /> Resume</a>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
