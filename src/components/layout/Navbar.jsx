import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    const updateScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    updateScroll();
    window.addEventListener('hashchange', close);
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => { window.removeEventListener('hashchange', close); window.removeEventListener('scroll', updateScroll); };
  }, []);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="Kenean Tilahun, back to top">Kenean Tilahun</a>
      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="resume-link" href={`mailto:${profile.email}?subject=Resume request`} title="A verified resume PDF is not currently hosted">Resume</a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
