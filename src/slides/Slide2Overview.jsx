import BugReportFormMock from "../components/BugReportFormMock";
import Eyebrow from "../components/Eyebrow";
import SlideHeading from "../components/SlideHeading";
import SlideShell from "../components/SlideShell";

export default function Slide2Overview() {
  return (
    <SlideShell center ariaLabel="Solution overview">
      <div className="grid w-full items-center gap-8 md:grid-cols-[auto_auto_1fr]">
        <div className="text-left">
          <Eyebrow>UX IMPROVEMENT</Eyebrow>
          <SlideHeading as="h1" accent="teal">
            Bug Reporting
            <em className="block">form enrichment</em>
          </SlideHeading>
          <p className="mb-3 mb-10 text-[1rem] leading-[1.65]">
            How the bug reporting tool looks before and after it was refactored.
          </p>

          <BugReportFormMock original />
        </div>
        <span>→</span>
        <BugReportFormMock />
      </div>
    </SlideShell>
  );
}
