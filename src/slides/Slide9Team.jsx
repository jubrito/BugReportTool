import Pill from "../components/Pill";
import SlideShell from "../components/SlideShell";
import SlideHeading from "../components/SlideHeading";
import Eyebrow from "../components/Eyebrow";
import PersonCard, { PersonBullets } from "../components/PersonCard";
import Reveal from "../presentation/Reveal";

const TEAM = [
  {
    name: "Juliana Witzke",
    role: "Software Engineer",
    accent: "purple",
    contributions: [
      "Proposed and built the new frontend structured questionnaire",
      "Added slack thread replies backend support",
      "Improved form accessibility",
      "Routed reports to the bot channel for AI-assisted triage",
    ],
  },
  {
    name: "Fabio Pinto",
    role: "Software Engineer",
    accent: "pink",
    contributions: [
      "Helped to make user experience smoother while maximizing issue context retrieval",
      "Introduced the form buttons layout",
      "Reviewedb code to speed up feature delivery",
    ],
  },
  {
    name: "Paulo Calixto",
    role: "Software Engineer",
    accent: "amber",
    contributions: [
      "Deep code review that helped to improve code quality and speed up feature delivery",
      "Identified and structured error tracking and security improvements",
    ],
  },
];

const MUTED = "var(--color-text-muted)";
const TEXT = "var(--color-text)";

const SUMMARY_PILLS = [
  "+2955 lines added",
  "−334 removed",
  "Backend + Frontend",
];

export default function Slide9Team() {
  return (
    <SlideShell ariaLabel="Team credits">
      <Eyebrow>Collaboration</Eyebrow>
      <SlideHeading accent="green">
        Built <em>together</em>
      </SlideHeading>

      <div className="flex flex-col gap-3.5 md:flex-row">
        {TEAM.map((person, i) => (
          <Reveal key={person.name} step={i + 1} className="flex-1">
            <PersonCard
              name={person.name}
              role={person.role}
              accent={person.accent}
            >
              <PersonBullets
                items={person.contributions}
                accent={person.accent}
              />
            </PersonCard>
          </Reveal>
        ))}
      </div>

      <Reveal step={4}>
        <ul className="mt-8 flex flex-wrap gap-2.5 list-none p-0 m-0">
          {SUMMARY_PILLS.map((label) => (
            <li key={label}>
              <Pill dotColor={TEXT} borderColor={TEXT} textColor={TEXT}>
                {label}
              </Pill>
            </li>
          ))}
        </ul>
      </Reveal>
    </SlideShell>
  );
}
