import { TrendingUp, Clock, Loader, FileText } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import ImpactCard from "../components/ImpactCard";
import Reveal from "../presentation/Reveal";

const CARDS = [
  {
    id: "mttr",
    accent: "green",
    icon: <TrendingUp className="text-green" />,
    heading: "Shorter Mean Time to Repair (SMTR)",
    body: "Faster triage → faster fix → shorter window",
    description:
      "where broken state drives user retry traffic and wasted compute.",
  },
  {
    id: "context",
    accent: "teal",
    icon: <Clock className="text-teal" />,
    heading: "Less context-switching",
    body: "Engineers stay in investigation mode faster",
    description:
      "instead of stopping to chase context. Human attention is an energy cost too.",
  },
  {
    id: "messages",
    accent: "amber",
    icon: <Loader className="text-amber" />,
    heading: "Fewer messages",
    body: "Most friction elimination.",
    description:
      "Each saved follow-up round is a push notification and an interrupt on both sides.",
  },
  {
    id: "storage",
    accent: "purple",
    icon: <FileText className="text-lilac-light" />,
    heading: "Leaner thread storage",
    body: "One structured reply instead of long threads",
    description:
      "that are hard to keep track of, displays the most useful information upfront.",
  },
];

export default function Slide5Green() {
  return (
    <SlideShell ariaLabel="Operational impact">
      <Eyebrow>Operational impact</Eyebrow>
      <SlideHeading accent="green">
        The <em>fastest path to resolution</em> <br />
        is having the right context from the start
      </SlideHeading>

      <div className="grid gap-[18px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((c, i) => (
          <Reveal key={c.id} step={i + 1} className="h-full">
            <ImpactCard
              accent={c.accent}
              icon={c.icon}
              heading={c.heading}
              headingId={`s5-${c.id}`}
            >
              <span className="font-bold text-text">{c.body}</span>{" "}
              {c.description}
            </ImpactCard>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
