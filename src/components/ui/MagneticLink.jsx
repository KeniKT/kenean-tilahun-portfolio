import { useRef } from 'react';

export default function MagneticLink({ children, className = '', ...props }) {
  const ref = useRef(null);
  const move = (event) => {
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.12}px, ${(event.clientY - rect.top - rect.height / 2) * 0.12}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ''; };

  return <a ref={ref} className={`magnetic ${className}`} onPointerMove={move} onPointerLeave={reset} {...props}>{children}</a>;
}
