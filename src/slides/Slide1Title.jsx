import { Clock, FileText, Bot, Info, User } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";

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

export default function Slide1Title() {
  return (
    <SlideShell center ariaLabel="Title">
      <div className="grid items-center justify-center gap-12 md:grid-cols-[auto_minmax(0,1fr)]">
        <img
          src="/bot.png"
          alt=""
          aria-hidden="true"
          width={200}
          height={200}
          className="block h-auto w-[200px]"
          decoding="async"
        />

        <div className="text-left">
          <Eyebrow>On-Call Experience</Eyebrow>
          <SlideHeading as="h1" accent="teal">
            Bug Report Intake
            <em className="ml-3">2.5</em>
          </SlideHeading>
          <p className="max-w-[650px] text-[1.15rem] leading-[1.65]">
            Structured bug report tool to speed-up on-call triage. Less
            back-and-forth,{" "}
            <strong>better human and AI-assisted investigations.</strong>
          </p>
          <p className="mt-3.5 text-[1.15rem] italic text-text-muted">
            Juliana Witzke · Fabio Pinto · Paulo Calixto
          </p>
        </div>

        <ul className="col-span-full flex flex-wrap gap-2.5 list-none p-0 m-0">
          {CHIPS.map(({ label, Icon, bg, border, text }) => (
            <li key={label}>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border-[1.5px] px-4 py-1.5 text-[15px] font-semibold tracking-[0.03em] ${bg} ${border} ${text}`}
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SlideShell>
  );
}
