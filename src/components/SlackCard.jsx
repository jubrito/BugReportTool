import { ArrowDown } from "lucide-react";

export function SlackCardShell({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border-[1.5px] border-[#3c3f44] bg-[#192023] p-6 font-[Lato,'Segoe_UI',sans-serif] text-[0.88rem] leading-[1.75] ${className}`}
    >
      {children}
    </div>
  );
}

export function SlackBotHeader({
  name = "Team Slack bot",
  time,
  src = "leto.png",
}) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <img
        src={`${import.meta.env.BASE_URL}${src}`}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="h-7 w-7 shrink-0 rounded-md"
        loading="lazy"
        decoding="async"
      />
      <span className="text-[0.9rem] font-bold text-white">{name}</span>
      {time && (
        <time
          dateTime={time}
          className="text-[0.72rem] font-normal text-[#9b9da0]"
        >
          {time}
        </time>
      )}
    </div>
  );
}

export function SlackThreadDivider({ replyCount = 1 }) {
  const label = replyCount === 1 ? "1 reply" : `${replyCount} replies`;
  return (
    <p className="flex items-center justify-center gap-1 text-center text-[0.72rem] font-bold uppercase tracking-[0.07em] text-[#9b9da0]">
      <ArrowDown aria-hidden="true" className="h-3 w-3" />
      {label}
    </p>
  );
}
