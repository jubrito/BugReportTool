export default function Pill({
  icon,
  dotColor,
  borderColor,
  textColor,
  children,
}) {
  const style = {
    borderColor: borderColor || dotColor,
    color: textColor || dotColor,
  };
  return (
    <span
      style={style}
      className="inline-flex items-center gap-2 rounded-full border-[1.5px] bg-black/30 px-4 py-2 text-[0.85rem] font-semibold"
    >
      {icon ? (
        <span aria-hidden="true" className="inline-flex">
          {icon}
        </span>
      ) : dotColor ? (
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ background: dotColor }}
        />
      ) : null}
      {children}
    </span>
  );
}
