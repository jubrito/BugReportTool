import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Pill from "../components/Pill";
import Reveal from "../presentation/Reveal";

const PILLS = [
  { label: "On-call triage", dot: "var(--color-green)" },
  { label: "Error handling", dot: "var(--color-pink)" },
  { label: "AI-powered triage", dot: "var(--color-lilac)" },
  { label: "Accessibility", dot: "var(--color-amber)" },
];

export default function Slide10Closing() {
  return (
    <SlideShell center ariaLabel="Closing">
      <SlideHeading accent="teal">
        Richer input. Less friction.
        <br />
        Faster fixes. Better results.
        <br />
        <em>More efficient triage</em>
        <br />
        <span className="italic text-teal-soft">by humans and AIs</span>
      </SlideHeading>

      <Reveal step={1}>
        <ul className="mb-8 flex flex-wrap justify-center gap-2.5 list-none p-0 m-0">
          {PILLS.map((p) => (
            <li key={p.label}>
              <Pill dotColor={p.dot}>{p.label}</Pill>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal step={2}>
        <p className="text-[0.85rem] text-text-muted">
          Juliana Witzke · Fabio Pinto · Paulo Calixto
        </p>
      </Reveal>
    </SlideShell>
  );
}
