import { Monitor, CheckSquare, Accessibility, GitBranch } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import ImpactCard from "../components/ImpactCard";
import Reveal from "../presentation/Reveal";

const CARDS = [
  {
    id: "thread",
    accent: "teal",
    icon: <Monitor className="text-teal" />,
    heading: "Thread replies — not noise",
    body: "The original slack stays clean",
    description:
      "– Structured details post as a thread reply: detail is one click away. Only answered questions are included.",
  },
  {
    id: "loading",
    accent: "pink",
    icon: <CheckSquare className="text-pink" />,
    heading: "Loading state — No accidental double-submits",
    body: "Dialog locks while submitting",
    description:
      "— loading indicator on the button and modal can't be dismissed mid-flight. No duplicate Slack messages.",
  },
  {
    id: "a11y",
    accent: "green",
    icon: <Accessibility className="text-green" />,
    heading: "Accessible by design",
    body: "Form accessible for everyone",
    description:
      "– full support to keyboard-navigation while providing all meaningful information to screen readers.",
  },
  {
    id: "forward",
    accent: "amber",
    icon: <GitBranch className="text-amber" />,
    heading: "Forward reports to AI bot channel to enable automated triage",
    body: "Supports AI-powered triage",
    description:
      "– mirror new issues sent to the team's bug report channel to the AI Slack chatbot channel.",
  },
];

export default function Slide7Improvements() {
  return (
    <SlideShell ariaLabel="Additional improvements">
      <Eyebrow>Additional Improvements</Eyebrow>
      <SlideHeading accent="teal">
        Other small details that
        <br />
        make a <em>big difference</em>
      </SlideHeading>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal key={c.id} step={i + 1}>
            <ImpactCard
              accent={c.accent}
              icon={c.icon}
              heading={c.heading}
              headingId={`s7-${c.id}`}
            >
              <span className="font-bold">{c.body}</span>
              <span className="ml-1">{c.description}</span>
            </ImpactCard>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
