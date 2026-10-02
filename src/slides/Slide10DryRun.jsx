import BugReportFormMock from "../components/BugReportFormMock";
import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";
import Reveal from "../presentation/Reveal";

export default function Slide10DryRun() {
  return (
    <SlideShell center ariaLabel="Dry-run test mode">
      <div className="grid w-full items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="text-left">
          <Eyebrow>Dry-Run Mode</Eyebrow>
          <SlideHeading accent="green">
            Test Dragon safely,
            <br />
            <em>without side effects</em>
          </SlideHeading>
          <p className="text-[1.1rem] leading-[1.65] text-text-muted">
            Engineers can now trigger the full Dragon pipeline end-to-end
            without creating real Jira tickets.
          </p>
          <ul className="mt-4 list-none space-y-2.5 p-0">
            {[
              "Form auto-fills with safe test values",
              "Report skips the main bug channel — Dragon only",
              "No accidental test tickets in the on-call backlog",
              "Iterate confidently on a critical production workflow",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[1rem] leading-[1.55]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Reveal step={1}>
          <BugReportFormMock showTestMode isDryRun />
        </Reveal>
      </div>
    </SlideShell>
  );
}
