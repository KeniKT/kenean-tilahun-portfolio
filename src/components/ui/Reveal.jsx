import { useReveal } from '../../hooks/useReveal';

export default function Reveal({ children, className = '', delay = 0 }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }}>{children}</div>;
}
