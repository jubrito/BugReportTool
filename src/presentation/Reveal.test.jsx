import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { renderHook } from "@testing-library/react";
import Reveal from "./Reveal";
import SlideBoundary from "./SlideBoundary";
import {
  PresentationProvider,
  usePresentation,
} from "./PresentationContext";

function Deck({ children, stepCounts = [3] }) {
  return (
    <PresentationProvider totalSlides={1} stepCounts={stepCounts}>
      <SlideBoundary index={0}>{children}</SlideBoundary>
    </PresentationProvider>
  );
}

describe("Reveal", () => {
  it("renders children visibly in normal (non-presenting) mode", () => {
    render(
      <Deck>
        <Reveal step={2}>
          <p>hidden-in-presentation-only</p>
        </Reveal>
      </Deck>,
    );
    const el = screen.getByText("hidden-in-presentation-only");
    expect(el).toBeInTheDocument();
    // opacity utility present via wrapper — check the parent has visible class
    expect(el.parentElement.className).toMatch(/opacity-100/);
    expect(el.parentElement).not.toHaveAttribute("aria-hidden");
  });

  it("hides content in presentation mode when stepIndex < required step", () => {
    let controls;
    function Probe() {
      controls = usePresentation();
      return null;
    }
    render(
      <PresentationProvider totalSlides={1} stepCounts={[3]}>
        <Probe />
        <SlideBoundary index={0}>
          <Reveal step={2}>
            <p>revealed-at-step-2</p>
          </Reveal>
        </SlideBoundary>
      </PresentationProvider>,
    );

    act(() => controls.enter());
    const wrapper = screen.getByText("revealed-at-step-2").parentElement;
    expect(wrapper.className).toMatch(/opacity-0/);
    expect(wrapper).toHaveAttribute("aria-hidden", "true");
  });

  it("reveals content once stepIndex reaches the step threshold", () => {
    let controls;
    function Probe() {
      controls = usePresentation();
      return null;
    }
    render(
      <PresentationProvider totalSlides={1} stepCounts={[3]}>
        <Probe />
        <SlideBoundary index={0}>
          <Reveal step={1}>
            <p>step-1</p>
          </Reveal>
        </SlideBoundary>
      </PresentationProvider>,
    );

    act(() => controls.enter());
    act(() => controls.next());
    const wrapper = screen.getByText("step-1").parentElement;
    expect(wrapper.className).toMatch(/opacity-100/);
    expect(wrapper).not.toHaveAttribute("aria-hidden");
  });

  it("hides content that belongs to non-current slides", () => {
    let controls;
    function Probe() {
      controls = usePresentation();
      return null;
    }
    render(
      <PresentationProvider totalSlides={2} stepCounts={[0, 0]}>
        <Probe />
        <SlideBoundary index={0}>
          <p>slide 0</p>
        </SlideBoundary>
        <SlideBoundary index={1}>
          <Reveal step={0}>
            <p>slide 1 content</p>
          </Reveal>
        </SlideBoundary>
      </PresentationProvider>,
    );
    act(() => controls.enter());
    const wrapper = screen.getByText("slide 1 content").parentElement;
    expect(wrapper.className).toMatch(/opacity-0/);
  });

  it("supports the `as` prop for custom wrapper element", () => {
    render(
      <Deck>
        <Reveal step={0} as="span">
          <em>inline</em>
        </Reveal>
      </Deck>,
    );
    expect(screen.getByText("inline").parentElement.tagName).toBe("SPAN");
  });
});
