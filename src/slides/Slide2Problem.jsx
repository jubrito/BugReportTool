import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import BACard from "../components/BACard";
import IconList, { IconListItem, SubText } from "../components/IconList";
import Reveal from "../presentation/Reveal";

const FLOW_STEPS = [
  { label: "User reports a problem using our tool", alert: false },
  { label: "Bug report submitted is incomplete", alert: true },
  { label: "On-call needs more\ncontext to triage", alert: true },
  { label: "Multiple follow-up\nquestions required", alert: true },
  { label: "Triage finally\nbegins", alert: false },
];

const MISSING_INFO = [
  {
    main: "Who is affected?",
    sub: "Without scope, on-call can't prioritize the issue properly.",
  },
  {
    main: "Is it blocking anything time-sensitive?",
    sub: 'A live class incident is P0. "Just me" can wait. Unknown = treat everything as urgent.',
  },
  {
    main: "Is there a workaround?",
    sub: "Knowing this upfront can unblock users in seconds (before root cause is found).",
  },
  {
    main: "First time or recurring?",
    sub: "Recurrence points to a regression vs. an edge case → different investigation path.",
  },
  {
    main: "What are the steps to reproduce?",
    sub: "Without a causal chain, the team AI triage tool can only reflect the vagueness back.",
  },
];

const INCOMPLETE_ITEMS = [
  "No scope",
  "No severity",
  "No workaround",
  "No recurrence information",
  "No reproduction steps",
];

function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Slide2Problem() {
  return (
    <SlideShell ariaLabel="The problem">
      <Eyebrow>The Problem</Eyebrow>
      <SlideHeading>
        Bug reports could trigger
        <br />
        multiple rounds of <em>back-and-forth</em>
      </SlideHeading>

      <Reveal step={1} as="div" className="w-full">
        <ol
          aria-label="Report to triage flow"
          className="my-7 flex w-full flex-wrap items-center gap-2.5 list-none p-0"
        >
          {FLOW_STEPS.map((step, i) => (
            <li key={step.label} className="flex flex-1 min-w-[120px] items-center gap-2.5">
              <div
                className={`w-full whitespace-pre-line rounded-xl border-[1.5px] px-4 py-3.5 text-center text-[0.9rem] font-semibold ${
                  step.alert
                    ? "border-pink-soft bg-pink-softer text-[#f7a0ae]"
                    : "border-border bg-surface text-text"
                }`}
              >
                {step.label}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span aria-hidden="true" className="shrink-0 text-[1.3rem] text-text-muted">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-1 grid gap-5 grid-cols-1 md:grid-cols-[1fr_1.3fr]">
        <Reveal step={2}>
        <BACard tone="before" label='Incomplete "user reports" are common' labelId="ba-before-heading">
          <div className="rounded-xl bg-pink-soft p-6 py-8 font-mono text-[0.88rem] leading-[1.8] text-white">
            <span className="font-bold">User report:</span>
            <br />
            The timings are incorrect
          </div>
          <ul className="ml-6 mt-4 list-disc">
            {INCOMPLETE_ITEMS.map((item) => (
              <li key={item} className="pl-2">
                {item}
              </li>
            ))}
            <li className="pl-2 font-bold">
              Not enough context for a fast and efficient triage
            </li>
          </ul>
        </BACard>
        </Reveal>

        <Reveal step={3}>
        <BACard tone="before" label="Important context is often not shared" labelId="ba-missing-heading">
          <IconList>
            {MISSING_INFO.map((item) => (
              <IconListItem
                key={item.main}
                icon={<span className="text-pink"><MinusIcon /></span>}
              >
                <p className="text-[1.1rem] font-bold">{item.main}</p>
                <SubText>{item.sub}</SubText>
              </IconListItem>
            ))}
          </IconList>
        </BACard>
        </Reveal>
      </div>
    </SlideShell>
  );
}
