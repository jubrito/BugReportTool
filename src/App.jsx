import Slide1Title from "./slides/Slide1Title";
import Slide2Problem from "./slides/Slide2Problem";
import Slide3Solution from "./slides/Slide3Solution";
import Slide4Impact from "./slides/Slide4Impact";
import Slide5Green from "./slides/Slide5Green";
import Slide6Dragon from "./slides/Slide6Dragon";
import Slide7Improvements from "./slides/Slide7Improvements";
import Slide8Reaction from "./slides/Slide8Reaction";
import Slide9Team from "./slides/Slide9Team";
import Slide10Closing from "./slides/Slide10Closing";
import {
  PresentationProvider,
  usePresentation,
} from "./presentation/PresentationContext";
import SlideBoundary from "./presentation/SlideBoundary";
import PresentationControls from "./presentation/PresentationControls";
import useKeyboardControls from "./presentation/useKeyboardControls";

const SLIDES = [
  { Component: Slide1Title, maxStep: 1 },
  { Component: Slide2Problem, maxStep: 3 },
  { Component: Slide3Solution, maxStep: 3 },
  { Component: Slide4Impact, maxStep: 3 },
  { Component: Slide5Green, maxStep: 4 },
  { Component: Slide6Dragon, maxStep: 3 },
  { Component: Slide7Improvements, maxStep: 4 },
  { Component: Slide8Reaction, maxStep: 2 },
  { Component: Slide9Team, maxStep: 4 },
  { Component: Slide10Closing, maxStep: 2 },
];

const STEP_COUNTS = SLIDES.map((s) => s.maxStep);

function AppShell() {
  useKeyboardControls();
  const { isPresenting } = usePresentation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main
        id="main"
        tabIndex={-1}
        aria-label="Bug Report Intake 2.5 presentation"
      >
        {SLIDES.map(({ Component }, i) => (
          <SlideBoundary key={i} index={i}>
            <Component />
          </SlideBoundary>
        ))}
      </main>
      <PresentationControls />
      {!isPresenting && (
        <p className="fixed bottom-4 left-4 z-40 hidden text-xs text-text-muted md:block">
          Press <kbd className="rounded border border-border px-1.5 py-0.5">P</kbd> to present
        </p>
      )}
    </>
  );
}

export default function App() {
  return (
    <PresentationProvider
      totalSlides={SLIDES.length}
      stepCounts={STEP_COUNTS}
    >
      <AppShell />
    </PresentationProvider>
  );
}
