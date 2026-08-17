import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BACard from "./BACard";

describe("BACard", () => {
  it("renders label as an h3 tied to labelId", () => {
    render(
      <BACard tone="before" label="Before" labelId="hdr-1">
        body
      </BACard>,
    );
    const heading = screen.getByRole("heading", { level: 3, name: "Before" });
    expect(heading).toHaveAttribute("id", "hdr-1");
  });

  it("links article to heading via aria-labelledby", () => {
    render(
      <BACard tone="before" label="Before" labelId="hdr-2">
        body
      </BACard>,
    );
    const article = screen.getByRole("article", { name: "Before" });
    expect(article).toHaveAttribute("aria-labelledby", "hdr-2");
  });

  it("uses pink accent for 'before' tone", () => {
    render(
      <BACard tone="before" label="Before" labelId="a">
        x
      </BACard>,
    );
    expect(screen.getByRole("heading", { level: 3 }).className).toMatch(/text-pink/);
  });

  it("uses teal accent for 'after' tone", () => {
    render(
      <BACard tone="after" label="After" labelId="a">
        x
      </BACard>,
    );
    expect(screen.getByRole("heading", { level: 3 }).className).toMatch(/text-teal/);
  });

  it("uses tinted background variants without a colored border", () => {
    const { container: c1 } = render(
      <BACard tone="beforeTinted" label="B" labelId="bt">
        x
      </BACard>,
    );
    const before = c1.querySelector("article");
    expect(before.className).toMatch(/bg-pink-softer/);
    expect(before.className).toMatch(/border-transparent/);

    const { container: c2 } = render(
      <BACard tone="afterTinted" label="A" labelId="at">
        x
      </BACard>,
    );
    const after = c2.querySelector("article");
    expect(after.className).toMatch(/bg-teal-softer/);
    expect(after.className).toMatch(/border-transparent/);
  });

  it("omits heading when no label is provided", () => {
    const { container } = render(<BACard tone="before">only body</BACard>);
    expect(container.querySelector("h3")).toBeNull();
    expect(screen.getByText("only body")).toBeInTheDocument();
  });
});
