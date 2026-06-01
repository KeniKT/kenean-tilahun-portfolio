import { ArrowUpRight, Copy, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { contact, socials } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${contact.email}`; }
  };
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal className="shell contact-inner">
        <p className="section-kicker"><span>04</span>Contact</p>
        <h2 id="contact-title">Have a role, a problem, or an ambitious idea?</h2>
        <p className="contact-lede">I’m currently open to software engineering opportunities and thoughtful collaborations. Let’s make the first conversation easy.</p>
        <div className="contact-actions"><a className="button button-light" href={`mailto:${contact.email}`}>Email me <ArrowUpRight /></a><button className="button button-outline" type="button" onClick={copyEmail}><Copy size={18} />{copied ? 'Email copied' : 'Copy email'}</button></div>
        <div className="contact-meta"><p><MapPin />{contact.location}</p><p><Mail />{contact.email}</p><div>{socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={13} /></a>)}</div></div>
      </Reveal>
    </section>
  );
}
