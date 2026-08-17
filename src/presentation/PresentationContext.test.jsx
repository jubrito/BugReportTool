import { describe, it, expect } from "vitest";
import { act } from "react";
import { render, renderHook } from "@testing-library/react";
import {
  PresentationProvider,
  usePresentation,
} from "./PresentationContext";

function wrapper({ totalSlides = 3, stepCounts = [1, 2, 0] } = {}) {
  return function Wrapper({ children }) {
    return (
      <PresentationProvider totalSlides={totalSlides} stepCounts={stepCounts}>
        {children}
      </PresentationProvider>
    );
  };
}

describe("PresentationContext", () => {
  it("throws when usePresentation is used outside the provider", () => {
    expect(() => renderHook(() => usePresentation())).toThrow();
  });

  it("starts in normal mode at slide 0 / step 0", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper(),
    });
    expect(result.current.isPresenting).toBe(false);
    expect(result.current.slideIndex).toBe(0);
    expect(result.current.stepIndex).toBe(0);
  });

  it("enter() switches to presenting and resets position", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper(),
    });
    act(() => result.current.goToSlide(2));
    act(() => result.current.enter());
    expect(result.current.isPresenting).toBe(true);
    expect(result.current.slideIndex).toBe(0);
    expect(result.current.stepIndex).toBe(0);
  });

  it("next() advances step until the slide's max, then advances slide + resets step", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper({ totalSlides: 2, stepCounts: [2, 1] }),
    });
    act(() => result.current.enter());
    act(() => result.current.next());
    expect(result.current.stepIndex).toBe(1);
    act(() => result.current.next());
    expect(result.current.stepIndex).toBe(2);
    // step is maxed → next advances slide
    act(() => result.current.next());
    expect(result.current.slideIndex).toBe(1);
    expect(result.current.stepIndex).toBe(0);
  });

  it("next() at the last slide + max step is a no-op", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper({ totalSlides: 2, stepCounts: [1, 1] }),
    });
    act(() => result.current.enter());
    act(() => result.current.next()); // slide 0 → step 1
    act(() => result.current.next()); // slide 0 → slide 1, step 0
    act(() => result.current.next()); // slide 1 → step 1
    act(() => result.current.next()); // no-op
    expect(result.current.slideIndex).toBe(1);
    expect(result.current.stepIndex).toBe(1);
  });

  it("prev() steps back within a slide, then wraps to previous slide's max step", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper({ totalSlides: 2, stepCounts: [2, 1] }),
    });
    act(() => result.current.enter());
    act(() => result.current.next()); // step 1
    act(() => result.current.next()); // step 2
    act(() => result.current.next()); // slide 1 step 0
    expect(result.current.slideIndex).toBe(1);
    expect(result.current.stepIndex).toBe(0);
    act(() => result.current.prev()); // back to slide 0 max step
    expect(result.current.slideIndex).toBe(0);
    expect(result.current.stepIndex).toBe(2);
  });

  it("prev() at slide 0 step 0 is a no-op", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper(),
    });
    act(() => result.current.enter());
    act(() => result.current.prev());
    expect(result.current.slideIndex).toBe(0);
    expect(result.current.stepIndex).toBe(0);
  });

  it("goToSlide() jumps directly and clamps out-of-range values", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper({ totalSlides: 3, stepCounts: [1, 1, 1] }),
    });
    act(() => result.current.goToSlide(2));
    expect(result.current.slideIndex).toBe(2);
    act(() => result.current.goToSlide(99));
    expect(result.current.slideIndex).toBe(2);
    act(() => result.current.goToSlide(-1));
    expect(result.current.slideIndex).toBe(2);
  });

  it("exit() returns to normal mode", () => {
    const { result } = renderHook(() => usePresentation(), {
      wrapper: wrapper(),
    });
    act(() => result.current.enter());
    act(() => result.current.exit());
    expect(result.current.isPresenting).toBe(false);
  });

  it("provides the provider without throwing", () => {
    expect(() =>
      render(
        <PresentationProvider totalSlides={1} stepCounts={[0]}>
          <div>ok</div>
        </PresentationProvider>,
      ),
    ).not.toThrow();
  });
});
