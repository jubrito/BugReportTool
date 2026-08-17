import { CheckCircle2, XCircle } from "lucide-react";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../presentation/Reveal";

const WITHOUT_ITEMS = [
  "AI doesn't have enough information to start to prioritize bug",
  "AI needs to ask follow-up questions to get more context",
  "Tokens are spent unnecessarily → wasting money and impacting the environment negatively",
];

const WITH_ITEMS = [
  "AI has the info needed to determine the severity and scope",
  "Efficient triage: with context AI can find the root cause faster",
  "Fewer follow-up questions and resources wasted",
];

function IntakeList({ items, Icon, iconColor }) {
  return (
    <ul className="m-0 list-none p-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 py-2 text-[0.9rem] leading-[1.55] text-text"
        >
          <Icon
            aria-hidden="true"
            className={`mt-[2px] h-5 w-5 shrink-0 ${iconColor}`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function IntakePanel({ tone, title, input, italicInput, items, Icon, iconColor }) {
  const borderClass =
    tone === "without" ? "border-pink-soft" : "border-teal-soft";
  const titleClass = tone === "without" ? "text-pink" : "text-teal";
  return (
    <article
      aria-labelledby={`intake-${tone}`}
      className={`rounded-xl border-[1.5px] bg-black p-5 ${borderClass}`}
    >
      <h3
        id={`intake-${tone}`}
        className={`mb-3 text-[0.9rem] font-bold uppercase tracking-[0.1em] ${titleClass}`}
      >
        {title}
      </h3>
      <p className="mb-3.5 font-mono text-[0.84rem] leading-[1.6] text-[#d1d2d3]">
        Input:{" "}
        {italicInput ? <span className="italic">{italicInput}</span> : `"${input}"`}
      </p>
      <IntakeList items={items} Icon={Icon} iconColor={iconColor} />
    </article>
  );
}

export default function Slide6Dragon() {
  return (
    <SlideShell ariaLabel="AI-assisted triage">
      <Eyebrow>Maximizing the team AI-Assisted Triage</Eyebrow>
      <SlideHeading accent="teal">
        Better input.
        <br />
        <em>More efficient AI triage.</em>
      </SlideHeading>

      <div className="w-full">
        <p className="mb-1 text-[1.3rem] font-bold leading-[1.7]">
          The team's new AI triage tool can only be as good as the data it
          receives.
        </p>
        <p className="mb-4 text-base leading-[1.7]">
          Agents succeed or fail depending on the quality of the context you
          give it. A single vague sentence gives it nothing to reason about, it
          can only reflect the vagueness back.
        </p>

        <Reveal step={1}>
          <p className="mb-2 text-[1.2rem] font-bold uppercase tracking-[0.12em] text-teal">
            Supporting an industry shift
          </p>

          <figure className="mb-7 border-l-[3px] border-teal pl-4">
            <blockquote className="mb-1.5 text-base italic leading-[1.55] text-text">
              <strong>"Context engineering over prompt engineering</strong> – the
              art of providing all the context for the task to be plausibly
              solvable by the LLM."
            </blockquote>
            <figcaption className="text-[0.85rem] text-text-muted">
              — Tobi Lütke, Shopify co-founder & CEO (June 2025). Endorsed by
              Andrej Karpathy, co-founder of OpenAI.
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-2">
          <Reveal step={2}>
            <IntakePanel
              tone="without"
              title="Without structured intake"
              input="Can't duplicate the class"
              items={WITHOUT_ITEMS}
              Icon={XCircle}
              iconColor="text-pink"
            />
          </Reveal>
          <Reveal step={3}>
            <IntakePanel
              tone="with"
              title="With structured intake"
              italicInput="<scope X, it's blocking Y, recurring, stakeholder Z etc>"
              items={WITH_ITEMS}
              Icon={CheckCircle2}
              iconColor="text-teal"
            />
          </Reveal>
        </div>
      </div>
    </SlideShell>
  );
}
