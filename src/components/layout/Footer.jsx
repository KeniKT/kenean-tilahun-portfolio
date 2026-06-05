import { ArrowUp } from 'lucide-react';
import { socials } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer shell">
      <p>Designed and engineered by Kenean Tilahun.</p>
      <div>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</div>
      <a className="back-top" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
      <p className="copyright">© {new Date().getFullYear()} · Addis Ababa, Ethiopia</p>
    </footer>
  );
}
