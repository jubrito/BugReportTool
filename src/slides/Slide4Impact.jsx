import { Plus } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import BACard from "../components/BACard";
import IconList, { IconListItem } from "../components/IconList";
import Reveal from "../presentation/Reveal";

const STATS_BEFORE = [
  {
    value: "Slow",
    label: "triage when context had to be chased down",
    color: "text-pink border-t-pink",
  },
  {
    value: "Unclear",
    label: "severity and scope before investigation",
    color: "text-pink border-t-pink",
  },
];

const STATS_AFTER = [
  {
    value: "Fewer",
    label: "follow-ups needed when fields are filled",
    color: "text-green border-t-green",
  },
  {
    value: "Faster",
    label: "path from report to investigation start",
    color: "text-teal border-t-teal",
  },
];

const BEFORE_ITEMS = [
  "On-call had to pause and chase missing information → slow triage",
  "No way to gauge severity at a glance → inefficient prioritization",
  "Slack thread became a long Q&A chain before investigation started",
  "Context-switching cost: engineers interrupted investigation to ask questions, slowing down the work on the bug and other tickets",
];

const AFTER_ITEMS = [
  "Severity and scope visible before on-call even opens the thread",
  "Workaround status known upfront → visibility to how to get unblocked",
  "Stakeholders identified — quickly know who should be involved",
  "Reproduction steps available — on-call can immediately try to reproduce the bug and start investigating",
];

function WarningIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="text-pink"
    >
      <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 5v4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="text-teal"
    >
      <circle
        cx="9"
        cy="9"
        r="7.5"
        fill="var(--color-teal-softer)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5.5 9l2.5 2.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatCard({ value, label, color }) {
  return (
    <div
      className={`flex flex-1 flex-col justify-center rounded-2xl border-t bg-surface-dark px-5 py-4 ${color}`}
    >
      <p className="mb-2 text-[2.4rem] font-extrabold leading-none">{value}</p>
      <p className="whitespace-pre-line text-[0.9rem] leading-[1.45] text-text-muted">
        {label}
      </p>
    </div>
  );
}

function StatsRow({ items }) {
  return (
    <div className="flex items-stretch gap-3">
      {items.map((s, i) => (
        <div key={s.value} className="flex flex-1 items-stretch gap-3">
          <StatCard {...s} />
          {i < items.length - 1 && (
            <span
              aria-hidden="true"
              className="flex items-center justify-center text-text-muted"
            >
              <Plus className="h-10 w-10" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Slide4Impact() {
  return (
    <SlideShell ariaLabel="Impact on triage">
      <Eyebrow>On-Call Experience</Eyebrow>
      <SlideHeading accent="teal">
        From reactive back-and-forth
        <br />
        to a more <em>efficient triage</em>
      </SlideHeading>

      <Reveal step={1} className="w-full">
        <div className="mb-9 grid w-full items-stretch gap-5 grid-cols-[1fr_auto_1fr]">
          <StatsRow items={STATS_BEFORE} />
          <span
            aria-hidden="true"
            className="flex items-center justify-center text-[2.5rem] font-bold text-text-muted"
          >
            →
          </span>
          <StatsRow items={STATS_AFTER} />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Reveal step={2} className="h-full">
        <BACard tone="beforeTinted" label="Before" labelId="s4-before">
          <IconList>
            {BEFORE_ITEMS.map((item) => (
              <IconListItem key={item} icon={<WarningIcon />}>
                {item}
              </IconListItem>
            ))}
          </IconList>
        </BACard>
        </Reveal>
        <Reveal step={3} className="h-full">
        <BACard tone="afterTinted" label="After" labelId="s4-after">
          <IconList>
            {AFTER_ITEMS.map((item) => (
              <IconListItem key={item} icon={<CheckIcon />}>
                {item}
              </IconListItem>
            ))}
          </IconList>
        </BACard>
        </Reveal>
      </div>
    </SlideShell>
  );
}
