import { describe, it, expect } from "vitest";
import { render, act } from "@testing-library/react";
import {
  PresentationProvider,
  usePresentation,
} from "./PresentationContext";
import useKeyboardControls from "./useKeyboardControls";

function Probe({ onReady }) {
  const ctx = usePresentation();
  useKeyboardControls();
  onReady(ctx);
  return null;
}

function setup({ totalSlides = 2, stepCounts = [1, 0] } = {}) {
  let ctx;
  render(
    <PresentationProvider totalSlides={totalSlides} stepCounts={stepCounts}>
      <Probe onReady={(c) => (ctx = c)} />
    </PresentationProvider>,
  );
  return {
    getCtx: () => ctx,
    press: (key) =>
      act(() => {
        window.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
      }),
  };
}

describe("useKeyboardControls", () => {
  it("P enters presentation mode from normal mode", () => {
    const { getCtx, press } = setup();
    press("p");
    expect(getCtx().isPresenting).toBe(true);
  });

  it("ArrowRight advances step", () => {
    const { getCtx, press } = setup();
    press("p");
    press("ArrowRight");
    expect(getCtx().stepIndex).toBe(1);
  });

  it("Space also advances step", () => {
    const { getCtx, press } = setup();
    press("p");
    press(" ");
    expect(getCtx().stepIndex).toBe(1);
  });

  it("ArrowLeft retreats step", () => {
    const { getCtx, press } = setup();
    press("p");
    press("ArrowRight");
    press("ArrowLeft");
    expect(getCtx().stepIndex).toBe(0);
  });

  it("Escape exits presentation mode", () => {
    const { getCtx, press } = setup();
    press("p");
    expect(getCtx().isPresenting).toBe(true);
    press("Escape");
    expect(getCtx().isPresenting).toBe(false);
  });

  it("keys other than P are inert in normal mode", () => {
    const { getCtx, press } = setup();
    press("ArrowRight");
    press(" ");
    press("Escape");
    expect(getCtx().isPresenting).toBe(false);
    expect(getCtx().stepIndex).toBe(0);
  });

  it("ignores keys when the event target is an input", () => {
    const { getCtx } = setup();
    const input = document.createElement("input");
    document.body.appendChild(input);
    act(() => {
      input.dispatchEvent(
        new KeyboardEvent("keydown", { key: "p", bubbles: true, cancelable: true }),
      );
    });
    expect(getCtx().isPresenting).toBe(false);
    input.remove();
  });
});
