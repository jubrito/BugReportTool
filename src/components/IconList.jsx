export function IconListItem({ icon, children }) {
  return (
    <li className="flex items-start gap-3 border-b border-border py-2 text-[0.95rem] leading-[1.55] last:border-b-0">
      <span aria-hidden="true" className="mt-[3px] flex h-[18px] w-[18px] shrink-0">
        {icon}
      </span>
      <div>{children}</div>
    </li>
  );
}

export function SubText({ children }) {
  return (
    <span className="mt-[3px] block text-[0.9rem] leading-[1.45] text-text-muted">
      {children}
    </span>
  );
}

export default function IconList({ children, className = "" }) {
  return <ul className={`m-0 list-none p-0 ${className}`}>{children}</ul>;
}
