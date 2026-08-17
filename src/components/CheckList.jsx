import { CheckCircle2 } from "lucide-react";

export function CheckItem({ children, iconClass = "text-teal" }) {
  return (
    <li className="flex items-start gap-3.5 border-b border-border py-3 text-[0.95rem] leading-[1.55] last:border-b-0">
      <CheckCircle2
        aria-hidden="true"
        className={`mt-[2px] h-[22px] w-[22px] shrink-0 ${iconClass}`}
      />
      <div>{children}</div>
    </li>
  );
}

export default function CheckList({ children, className = "" }) {
  return <ul className={`m-0 list-none p-0 ${className}`}>{children}</ul>;
}
