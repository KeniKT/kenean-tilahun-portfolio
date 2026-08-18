import { ArrowUp, ArrowUpRight, FileText } from 'lucide-react';
import { navigation, profile, socials } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer-brand"><span>KT</span><div><strong>{profile.name}</strong><small>{profile.role}</small></div></div>
      <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <div className="footer-actions"><a href={`mailto:${profile.email}?subject=Resume request`}><FileText /> Resume</a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight /></a></div>
      <div className="footer-socials">{socials.slice(0, 2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}</div>
      <a className="back-top" href="#top" aria-label="Back to top"><ArrowUp size={18} /></a>
      <p className="copyright">© {new Date().getFullYear()} {profile.name}. Designed and engineered in {profile.location}.</p>
    </footer>
  );
}
