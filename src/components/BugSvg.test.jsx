import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BugSvg from "./BugSvg";

describe("BugSvg", () => {
  it("exposes an accessible label", () => {
    render(<BugSvg />);
    expect(screen.getByRole("img", { name: "Bug icon" })).toBeInTheDocument();
  });

  it("respects the size prop for width and height", () => {
    const { container } = render(<BugSvg size={64} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "64");
    expect(svg).toHaveAttribute("height", "64");
  });

  it("appends custom className", () => {
    const { container } = render(<BugSvg className="text-teal" />);
    expect(container.querySelector("svg").getAttribute("class")).toMatch(/text-teal/);
  });
});
