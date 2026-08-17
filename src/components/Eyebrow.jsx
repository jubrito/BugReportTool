export default function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`mb-2.5 text-base font-black uppercase tracking-[0.14em] ${className}`}
    >
      {children}
    </p>
  );
}
