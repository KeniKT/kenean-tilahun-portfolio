import { ArrowUpRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { profile, socials } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

const initialForm = { name: '', email: '', company: '', message: '', website: '' };

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email address.';
  if (form.message.trim().length < 20) errors.message = 'Please add at least 20 characters so I have enough context.';
  if (form.message.length > 3000) errors.message = 'Please keep your message under 3,000 characters.';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const update = ({ target }) => { setForm((current) => ({ ...current, [target.name]: target.value })); if (errors[target.name]) setErrors((current) => ({ ...current, [target.name]: '' })); };
  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus('error'); setFeedback('Please review the highlighted fields.'); return; }
    setStatus('submitting'); setFeedback('Sending your message…');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The message could not be delivered.');
      setStatus('success'); setFeedback('Message sent. Thank you—I’ll reply as soon as possible.'); setForm(initialForm);
    } catch (error) {
      setStatus('error'); setFeedback(`${error.message} You can email me directly instead.`);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <Reveal className="contact-intro"><p className="contact-index">04 / Contact</p><h2 id="contact-title">Get in touch</h2><p>Have a software engineering role or project in mind? I’d be glad to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a><div className="contact-socials">{socials.slice(0, 2).map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={14} /></a>)}</div></Reveal>
        <Reveal delay={100} className="contact-form-wrap">
          <form className="contact-form" onSubmit={submit} noValidate aria-describedby="form-status">
            <div className="form-heading"><p>Send a message</p></div>
            <div className="form-row"><div className="field"><label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label><input id="contact-name" name="name" value={form.name} onChange={update} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} disabled={status === 'submitting'} />{errors.name && <p className="field-error" id="name-error">{errors.name}</p>}</div><div className="field"><label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label><input id="contact-email" name="email" type="email" value={form.email} onChange={update} autoComplete="email" inputMode="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} disabled={status === 'submitting'} />{errors.email && <p className="field-error" id="email-error">{errors.email}</p>}</div></div>
            <div className="field"><label htmlFor="contact-company">Company <span>(optional)</span></label><input id="contact-company" name="company" value={form.company} onChange={update} autoComplete="organization" disabled={status === 'submitting'} /></div>
            <div className="field"><label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label><textarea id="contact-message" name="message" rows="6" value={form.message} onChange={update} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : 'message-help'} disabled={status === 'submitting'} /><div className="field-meta"><p id={errors.message ? 'message-error' : 'message-help'} className={errors.message ? 'field-error' : ''}>{errors.message || 'A role summary or a few lines of context is perfect.'}</p><span>{form.message.length}/3000</span></div></div>
            <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" value={form.website} onChange={update} tabIndex="-1" autoComplete="off" /></div>
            <button className="button form-submit" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? <><Loader2 className="spinner" /> Sending…</> : status === 'success' ? <><CheckCircle2 /> Sent successfully</> : <>Send message <ArrowUpRight /></>}</button>
            <p id="form-status" className={`form-status ${status}`} role="status" aria-live="polite">{feedback}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
