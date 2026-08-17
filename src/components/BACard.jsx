const TONE_CLASSES = {
  before: {
    bg: "bg-surface-dark",
    border: "border-pink",
    label: "text-pink",
  },
  after: {
    bg: "bg-surface-dark",
    border: "border-teal",
    label: "text-teal",
  },
  beforeTinted: {
    bg: "bg-pink-softer",
    border: "border-transparent",
    label: "text-pink",
  },
  afterTinted: {
    bg: "bg-teal-softer",
    border: "border-transparent",
    label: "text-teal",
  },
  neutral: {
    bg: "bg-surface-dark",
    border: "border-border",
    label: "text-text",
  },
};

export default function BACard({
  tone = "before",
  label,
  children,
  className = "",
  labelId,
}) {
  const t = TONE_CLASSES[tone] ?? TONE_CLASSES.neutral;
  return (
    <article
      aria-labelledby={labelId}
      className={`h-full rounded-2xl border-[1.5px] p-7 ${t.bg} ${t.border} ${className}`}
    >
      {label && (
        <h3
          id={labelId}
          className={`mb-4 text-[1.4rem] font-bold ${t.label}`}
        >
          {label}
        </h3>
      )}
      {children}
    </article>
  );
}
