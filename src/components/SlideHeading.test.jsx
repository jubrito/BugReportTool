import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SlideHeading from "./SlideHeading";

describe("SlideHeading", () => {
  it("renders as h2 by default", () => {
    render(<SlideHeading>Title</SlideHeading>);
    expect(screen.getByRole("heading", { level: 2, name: "Title" })).toBeInTheDocument();
  });

  it("renders as h1 when as='h1'", () => {
    render(<SlideHeading as="h1">Big</SlideHeading>);
    expect(screen.getByRole("heading", { level: 1, name: "Big" })).toBeInTheDocument();
  });

  it("applies the id when provided", () => {
    render(<SlideHeading id="head-1">Title</SlideHeading>);
    expect(screen.getByRole("heading", { name: "Title" })).toHaveAttribute("id", "head-1");
  });

  it("applies accent-based em color class", () => {
    render(
      <SlideHeading accent="green">
        text <em>accent</em>
      </SlideHeading>,
    );
    const heading = screen.getByRole("heading");
    expect(heading.className).toMatch(/text-green/);
  });

  it("falls back to pink accent when unknown accent is passed", () => {
    render(<SlideHeading accent="bogus">x</SlideHeading>);
    expect(screen.getByRole("heading").className).toMatch(/text-pink/);
  });
});
