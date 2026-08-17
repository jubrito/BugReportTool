import { createContext, useContext, useEffect, useRef } from "react";
import { usePresentation } from "./PresentationContext";

const SlideIndexContext = createContext(0);

export function useSlideIndex() {
  return useContext(SlideIndexContext);
}

export default function SlideBoundary({ index, children }) {
  const { isPresenting, slideIndex } = usePresentation();
  const ref = useRef(null);
  const isCurrent = slideIndex === index;
  const isHidden = isPresenting && !isCurrent;

  useEffect(() => {
    if (isPresenting && isCurrent && ref.current) {
      ref.current.focus({ preventScroll: false });
    }
  }, [isPresenting, isCurrent]);

  return (
    <SlideIndexContext.Provider value={index}>
      <div
        ref={ref}
        tabIndex={-1}
        aria-hidden={isHidden || undefined}
        className={isHidden ? "hidden" : "outline-none"}
      >
        {children}
      </div>
    </SlideIndexContext.Provider>
  );
}
