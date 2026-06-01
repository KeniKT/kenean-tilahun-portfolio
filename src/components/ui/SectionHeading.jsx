export default function SectionHeading({ id, index, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
