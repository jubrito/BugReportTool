export default function SlideShell({
  children,
  center = false,
  className = "",
  ariaLabel,
}) {
  const alignment = center
    ? "items-center justify-center text-center"
    : "items-start justify-center text-left";

  return (
    <section
      aria-label={ariaLabel}
      className={`relative flex min-h-screen flex-col overflow-hidden border-b-2 border-black/35 px-4 py-8 md:px-16 before:absolute before:inset-x-0 before:top-0 before:h-[5px] before:bg-[linear-gradient(90deg,var(--color-pink)_0%,var(--color-teal)_50%,transparent_100%)] ${alignment} ${className}`}
    >
      {children}
    </section>
  );
}
