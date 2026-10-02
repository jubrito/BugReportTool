import { ShieldCheck, TestTube2 } from "lucide-react";
import ImpactCard from "../components/ImpactCard";
import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";

const CARDS = [
  {
    id: "multiline",
    accent: "pink",
    icon: <ShieldCheck className="text-pink" />,
    heading: "No more silent failures on multi-line fields",
    body: "Every valid report now reliably creates a Jira ticket",
    description:
      "– line breaks in form fields used to silently crash Dragon's ticket creation. On-call had no idea the report was lost. Fixed.",
  },
  {
    id: "dryrun",
    accent: "green",
    icon: <TestTube2 className="text-green" />,
    heading: "Dry-run test mode for Dragon",
    body: "Test the full pipeline without real side effects",
    description:
      "– engineers can now trigger Dragon end-to-end without creating real Jira tickets. No accidental test clutter in the on-call backlog.",
  },
];

export default function Slide10DragonImprovements() {
  return (
    <SlideShell ariaLabel="Smaller pipeline improvements">
      <Eyebrow>Under the Hood</Eyebrow>
      <SlideHeading accent="pink">
        Small fixes.
        <br />
        <em>Bigger reliability.</em>
      </SlideHeading>

      <p className="mb-5 text-base leading-[1.7]">
        Two improvements that prevent silent production failures and let
        engineers iterate on Dragon with confidence.
      </p>

      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {CARDS.map((c, i) => (
          <Reveal key={c.id} step={i + 1} className="h-full">
            <ImpactCard
              accent={c.accent}
              icon={c.icon}
              heading={c.heading}
              headingId={`s10u-${c.id}`}
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
