import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Eyebrow from "./Eyebrow";

describe("Eyebrow", () => {
  it("renders children in a paragraph", () => {
    render(<Eyebrow>Recognition</Eyebrow>);
    const el = screen.getByText("Recognition");
    expect(el.tagName).toBe("P");
  });

  it("uppercase style is applied via class", () => {
    render(<Eyebrow>label</Eyebrow>);
    expect(screen.getByText("label").className).toMatch(/uppercase/);
  });

  it("accepts a custom className", () => {
    render(<Eyebrow className="mt-2">x</Eyebrow>);
    expect(screen.getByText("x").className).toMatch(/mt-2/);
  });
});
