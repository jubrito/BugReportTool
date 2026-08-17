const ACCENT_CLASSES = {
  pink: "[&_em]:text-pink",
  teal: "[&_em]:text-teal",
  green: "[&_em]:text-green",
  amber: "[&_em]:text-amber",
  purple: "[&_em]:text-lilac-light",
};

export default function SlideHeading({
  children,
  as = "h2",
  accent = "pink",
  id,
  className = "",
}) {
  const Tag = as;
  const isH1 = as === "h1";
  const size = isH1
    ? "text-[clamp(2.8rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.025em] mb-[22px]"
    : "text-[clamp(2rem,3vw,2.8rem)] leading-[1.12] tracking-[-0.02em] mb-9";
  const emClass = ACCENT_CLASSES[accent] ?? ACCENT_CLASSES.pink;

  return (
    <Tag
      id={id}
      className={`font-extrabold [&_em]:not-italic ${emClass} ${size} ${className}`}
    >
      {children}
    </Tag>
  );
}
