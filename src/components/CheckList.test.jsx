import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckList, { CheckItem } from "./CheckList";

describe("CheckList", () => {
  it("renders items as an unordered list", () => {
    render(
      <CheckList>
        <CheckItem>alpha</CheckItem>
        <CheckItem>beta</CheckItem>
      </CheckList>,
    );
    const list = screen.getByRole("list");
    expect(list.tagName).toBe("UL");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("renders each item's children", () => {
    render(
      <CheckList>
        <CheckItem>alpha</CheckItem>
      </CheckList>,
    );
    expect(screen.getByText("alpha")).toBeInTheDocument();
  });

  it("hides decorative check icon from assistive tech", () => {
    const { container } = render(
      <CheckList>
        <CheckItem>alpha</CheckItem>
      </CheckList>,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("applies custom icon color class", () => {
    const { container } = render(
      <CheckList>
        <CheckItem iconClass="text-green">alpha</CheckItem>
      </CheckList>,
    );
    expect(container.querySelector("svg").getAttribute("class")).toMatch(/text-green/);
  });
});
