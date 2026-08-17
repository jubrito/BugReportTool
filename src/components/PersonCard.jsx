const ROLE_COLOR = {
  teal: "text-teal",
  pink: "text-pink",
  purple: "text-lilac-light",
  amber: "text-amber",
  green: "text-green",
};

const MARKER_COLOR = {
  teal: "marker:text-teal",
  pink: "marker:text-pink",
  purple: "marker:text-lilac-light",
  amber: "marker:text-amber",
  green: "marker:text-green",
};

export default function PersonCard({ name, role, accent = "teal", children }) {
  const roleColor = ROLE_COLOR[accent] ?? ROLE_COLOR.teal;
  return (
    <article className="w-full rounded-2xl border-[1.5px] border-border bg-surface p-5">
      <h3 className="mb-1 text-[1.05rem] font-bold text-white">{name}</h3>
      <p
        className={`mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.08em] ${roleColor}`}
      >
        {role}
      </p>
      <div className="text-[0.88rem] leading-[1.65] text-text-muted">
        {children}
      </div>
    </article>
  );
}

export function PersonBullets({ items, accent = "teal", boldFirst = true }) {
  const markerColor = MARKER_COLOR[accent] ?? MARKER_COLOR.teal;
  return (
    <ul className={`m-0 list-disc pl-6 ${markerColor}`}>
      {items.map((item, i) => (
        <li
          key={item}
          className={`pl-1 ${boldFirst && i === 0 ? "font-bold" : "font-normal"}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
