import { useEffect } from "react";
import {
  Play,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePresentation } from "./PresentationContext";

function requestFullscreen() {
  if (typeof document === "undefined") return;
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
}

function toggleFullscreen() {
  if (typeof document === "undefined") return;
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
}

export default function PresentationControls() {
  const {
    isPresenting,
    enter,
    exit,
    next,
    prev,
    slideIndex,
    stepIndex,
    totalSlides,
    stepCountForSlide,
  } = usePresentation();

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (isPresenting) {
      root.style.overflow = "hidden";
      root.dataset.presenting = "true";
    } else {
      root.style.overflow = "";
      delete root.dataset.presenting;
    }
    return () => {
      root.style.overflow = "";
      delete root.dataset.presenting;
    };
  }, [isPresenting]);

  const stepsForCurrent = stepCountForSlide(slideIndex) + 1;
  const announcement = isPresenting
    ? `Slide ${slideIndex + 1} of ${totalSlides}, step ${stepIndex + 1} of ${stepsForCurrent}`
    : "";

  const handleEnter = () => {
    enter();
    requestFullscreen();
  };

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        data-testid="presentation-live"
      >
        {announcement}
      </div>

      {!isPresenting && (
        <button
          type="button"
          onClick={handleEnter}
          aria-label="Enter presentation mode (P)"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border-[1.5px] border-teal bg-teal-softer px-4 py-2 text-sm font-semibold text-teal shadow-lg hover:bg-teal/20 focus-visible:ring-2 focus-visible:ring-teal"
        >
          <Play aria-hidden="true" className="h-4 w-4" />
          Present
        </button>
      )}

      {isPresenting && (
        <nav
          aria-label="Presentation controls"
          className="fixed bottom-4 right-4 z-50 flex items-center gap-1 rounded-full border-[1.5px] border-border bg-bg-card px-2 py-1 text-sm text-text-muted shadow-lg"
        >
          <span aria-hidden="true" className="px-2 tabular-nums">
            {slideIndex + 1} / {totalSlides}
          </span>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal"
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal"
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen (F)"
            className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal"
          >
            <Maximize2 aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={exit}
            aria-label="Exit presentation mode (Esc)"
            className="rounded-full p-1.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-teal"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </nav>
      )}
    </>
  );
}
