const ACCENT_BORDER = {
  teal: "border-b-teal",
  green: "border-b-green",
  amber: "border-b-amber",
  purple: "border-b-purple",
  pink: "border-b-pink",
};

export default function ImpactCard({
  accent = "teal",
  icon,
  heading,
  headingId,
  children,
  className = "",
}) {
  const accentBorder = ACCENT_BORDER[accent] ?? ACCENT_BORDER.teal;
  return (
    <article
      aria-labelledby={headingId}
      className={`rounded-2xl border-[1.5px] border-border bg-surface p-5 border-b-[3px] ${accentBorder} ${className} min-h-full h-full`}
    >
      <div className="flex items-start gap-2">
        {icon && (
          <span
            aria-hidden="true"
            className="mb-3 inline-flex [&_svg]:h-6 [&_svg]:w-7"
          >
            {icon}
          </span>
        )}
        <h3 id={headingId} className="text-[1.05rem] font-bold text-white">
          {heading}
        </h3>
      </div>
      <p className="text-[0.9rem] leading-[1.65] text-text-muted">{children}</p>
    </article>
  );
}
