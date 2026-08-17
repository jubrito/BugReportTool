import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SlideShell from "./SlideShell";

describe("SlideShell", () => {
  it("renders a section with slide role description and provided label", () => {
    render(<SlideShell ariaLabel="Intro">content</SlideShell>);
    const section = screen.getByRole("region", { name: "Intro" });
    expect(section.tagName).toBe("SECTION");
    expect(section).toHaveAttribute("aria-roledescription", "slide");
  });

  it("renders children", () => {
    render(<SlideShell ariaLabel="Intro"><p>hello</p></SlideShell>);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("centers content when center prop is true", () => {
    render(<SlideShell ariaLabel="Intro" center>x</SlideShell>);
    const section = screen.getByRole("region", { name: "Intro" });
    expect(section.className).toMatch(/items-center/);
    expect(section.className).toMatch(/text-center/);
  });

  it("aligns start when center prop is false", () => {
    render(<SlideShell ariaLabel="Intro">x</SlideShell>);
    const section = screen.getByRole("region", { name: "Intro" });
    expect(section.className).toMatch(/items-start/);
    expect(section.className).toMatch(/text-left/);
  });

  it("appends custom className", () => {
    render(<SlideShell ariaLabel="Intro" className="custom-x">x</SlideShell>);
    expect(screen.getByRole("region", { name: "Intro" }).className).toMatch(/custom-x/);
  });
});
