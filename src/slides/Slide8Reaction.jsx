import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import Quote from "../components/Quote";
import Reveal from "../presentation/Reveal";

const GREEN = "var(--color-green)";

const NAMED_QUOTES = [
  {
    by: "Engineering Manager",
    text: "This is awesome!!! This is one of those features where you become shocked that we didn't think of it sooner. I love the blocking/impacting buttons!!! Very clear!!",
    className: "basis-[63%]",
  },
  {
    by: "Technical Lead",
    text: "This is awesome! Love all the dialogue as well.",
    className: "basis-[37%]",
  },
];

const ANON_QUOTES = [
  {
    text: "Congrats on the Bug Report Tool improvements rollout! 🎉",
    className: "basis-[31.5%]",
  },
  {
    text: "Shoutout to everyone involved in iterating on the bug report form",
    className: "basis-[31.5%]",
  },
  {
    text: "Congrats for brainstorming better approach for bug report mirroring in dragon",
    className: "basis-[38%]",
  },
];

export default function Slide8Reaction() {
  return (
    <SlideShell ariaLabel="Team reaction">
      <Eyebrow>Recognition</Eyebrow>
      <SlideHeading accent="green">
        The team's <em>reaction</em>
      </SlideHeading>

      <Reveal step={1}>
        <div className="flex flex-col gap-4 md:flex-row">
          {NAMED_QUOTES.map((q) => (
            <Quote
              key={q.by}
              by={q.by}
              className={q.className}
              accentColor={GREEN}
            >
              "{q.text}"
            </Quote>
          ))}
        </div>
      </Reveal>

      <Reveal step={2}>
        <div className="flex flex-col gap-4 md:flex-row">
          {ANON_QUOTES.map((q) => (
            <Quote
              key={q.text}
              by="Anonymous (during retrospective)"
              className={q.className}
            >
              "{q.text}"
            </Quote>
          ))}
        </div>
      </Reveal>
    </SlideShell>
  );
}
