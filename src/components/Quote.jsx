export default function Quote({ by, children, className = "", accentColor }) {
  const accent = accentColor ?? "var(--color-text)";
  return (
    <figure
      style={{ borderLeftColor: accent }}
      className={`mb-4 rounded-xl border-l-[5px] bg-black/30 p-6 ${className}`}
    >
      <blockquote className="mb-2.5 text-[1.05rem] italic leading-[1.65] text-text-muted">
        {children}
      </blockquote>
      <figcaption
        style={{ color: accent }}
        className="text-[0.8rem] font-bold tracking-[0.04em]"
      >
        — {by}
      </figcaption>
    </figure>
  );
}
