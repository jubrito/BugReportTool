import { createContext, useCallback, useContext, useMemo, useState } from "react";

const PresentationContext = createContext(null);

export function usePresentation() {
  const ctx = useContext(PresentationContext);
  if (!ctx) {
    throw new Error("usePresentation must be used inside a PresentationProvider");
  }
  return ctx;
}

export function PresentationProvider({ totalSlides, stepCounts, children }) {
  const [mode, setMode] = useState("normal");
  const [slideIndex, setSlideIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const stepCountForSlide = useCallback(
    (i) => stepCounts[i] ?? 0,
    [stepCounts],
  );

  const enter = useCallback(() => {
    setMode("presenting");
    setSlideIndex(0);
    setStepIndex(0);
  }, []);

  const exit = useCallback(() => {
    setMode("normal");
    if (typeof document !== "undefined" && document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const next = useCallback(() => {
    const maxStep = stepCountForSlide(slideIndex);
    if (stepIndex < maxStep) {
      setStepIndex(stepIndex + 1);
    } else if (slideIndex < totalSlides - 1) {
      setSlideIndex(slideIndex + 1);
      setStepIndex(0);
    }
  }, [slideIndex, stepIndex, stepCountForSlide, totalSlides]);

  const prev = useCallback(() => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    } else if (slideIndex > 0) {
      const prevSlide = slideIndex - 1;
      setSlideIndex(prevSlide);
      setStepIndex(stepCountForSlide(prevSlide));
    }
  }, [slideIndex, stepIndex, stepCountForSlide]);

  const goToSlide = useCallback(
    (i) => {
      if (i >= 0 && i < totalSlides) {
        setSlideIndex(i);
        setStepIndex(0);
      }
    },
    [totalSlides],
  );

  const value = useMemo(
    () => ({
      mode,
      isPresenting: mode === "presenting",
      slideIndex,
      stepIndex,
      totalSlides,
      stepCountForSlide,
      enter,
      exit,
      next,
      prev,
      goToSlide,
    }),
    [
      mode,
      slideIndex,
      stepIndex,
      totalSlides,
      stepCountForSlide,
      enter,
      exit,
      next,
      prev,
      goToSlide,
    ],
  );

  return (
    <PresentationContext.Provider value={value}>
      {children}
    </PresentationContext.Provider>
  );
}
