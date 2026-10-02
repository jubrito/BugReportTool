import BugReportFormMock from "../components/BugReportFormMock";
import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";
import { Clock, FileText, Bot, Info, User } from "lucide-react";

const CHIPS = [
  {
    label: "On-Call Triage",
    Icon: Clock,
    bg: "bg-teal-softer",
    border: "border-teal-soft",
    text: "text-teal",
  },
  {
    label: "Documentation",
    Icon: FileText,
    bg: "bg-green-softer",
    border: "border-green-soft",
    text: "text-green",
  },
  {
    label: "AI-Assisted Triage",
    Icon: Bot,
    bg: "bg-purple-softer",
    border: "border-purple-soft",
    text: "text-lilac-light",
  },
  {
    label: "Accessibility",
    Icon: Info,
    bg: "bg-amber-softer",
    border: "border-amber-soft",
    text: "text-amber",
  },
  {
    label: "User experience",
    Icon: User,
    bg: "bg-pink-softer",
    border: "border-pink-soft",
    text: "text-pink",
  },
];

export default function Slide2Overview() {
  return (
    <SlideShell center ariaLabel="Solution overview">
      <div className="grid items-center justify-center gap-8 md:grid-cols-[auto_minmax(0,1fr)]">
        <BugReportFormMock showTestMode={false} isDryRun={false} />
        <div className="text-left">
          <Eyebrow>On-Call Experience</Eyebrow>
          <SlideHeading as="h1" accent="teal">
            Bug Report Intake
            <em className="ml-3">2.5</em>
          </SlideHeading>
          <p className="max-w-[650px] text-[1.15rem] leading-[1.65]">
            From a form
          </p>
          <p className="mt-3.5 text-[1.15rem] italic text-text-muted">
            Juliana Witzke · Fabio Pinto · Paulo Calixto
          </p>

          <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
            {CHIPS.map(({ label, Icon, bg, border, text }) => (
              <li key={label}>
                <span
                  className={`inline-flex items-center mt-4 gap-1.5 rounded-full border-[1.5px] px-3 py-1 text-[12px] font-semibold tracking-[0.03em] ${bg} ${border} ${text}`}
                >
                  <Icon aria-hidden="true" className="h-3 w-3" />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal step={1} className="col-span-full"></Reveal>
      </div>

      <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_1.1fr]">
        {/* <div className="text-left">
          <Eyebrow>The Solution</Eyebrow>
          <SlideHeading accent="green">
            The right questions,
            <br />
            <em>right in the dialog</em>
          </SlideHeading>
          <p className="text-[1.1rem] leading-[1.65] text-text-muted">
            A structured questionnaire guides reporters through exactly what
            on-call needs — from severity and scope to reproduction steps —
            posted as a Slack thread reply right below the original message.
          </p>
          <p className="mt-4 text-[1.1rem] leading-[1.65]">
            <strong>Less back-and-forth.</strong> Better context for humans
            and AI-assisted triage.
          </p>
        </div> */}

        {/* <Reveal step={1}>
          <BugReportFormMock showTestMode={false} isDryRun={false} />
        </Reveal> */}
      </div>
    </SlideShell>
  );
}
