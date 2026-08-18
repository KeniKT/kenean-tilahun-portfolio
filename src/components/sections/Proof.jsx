import { proof } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

export default function Proof() {
  return (
    <section className="proof shell" aria-label="Career impact">
      {proof.map((item, index) => (
        <Reveal key={item.label} delay={index * 60}>
          <article className={index === 1 ? 'proof-card proof-featured' : 'proof-card'}>
            <strong>{item.value}</strong><div><h2>{item.label}</h2><p>{item.detail}</p></div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
