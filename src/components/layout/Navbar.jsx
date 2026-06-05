import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation } from '../../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kenean Tilahun, back to top"><span>KT</span><span className="brand-copy">Kenean Tilahun<small>Software engineer</small></span></a>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href="mailto:keni232127@gmail.com">Let’s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    </header>
  );
}
