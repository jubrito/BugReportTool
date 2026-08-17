import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ImpactCard from "./ImpactCard";

describe("ImpactCard", () => {
  it("renders heading and body content", () => {
    render(
      <ImpactCard accent="teal" heading="Speed" headingId="h1">
        Body text
      </ImpactCard>,
    );
    expect(screen.getByRole("heading", { level: 3, name: "Speed" })).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
  });

  it("wires aria-labelledby to headingId", () => {
    render(
      <ImpactCard accent="teal" heading="Speed" headingId="h2">
        body
      </ImpactCard>,
    );
    expect(screen.getByRole("article", { name: "Speed" })).toHaveAttribute(
      "aria-labelledby",
      "h2",
    );
  });

  it("hides decorative icon container from assistive tech", () => {
    const { container } = render(
      <ImpactCard
        accent="teal"
        heading="Speed"
        headingId="h3"
        icon={<svg data-testid="chart" />}
      >
        body
      </ImpactCard>,
    );
    const iconWrap = container.querySelector("article > div > span");
    expect(iconWrap).toHaveAttribute("aria-hidden", "true");
  });

  it("maps accent prop to bottom border class", () => {
    const { container } = render(
      <ImpactCard accent="amber" heading="H" headingId="h4">
        body
      </ImpactCard>,
    );
    expect(container.querySelector("article").className).toMatch(/border-b-amber/);
  });

  it("falls back to teal when unknown accent is passed", () => {
    const { container } = render(
      <ImpactCard accent="bogus" heading="H" headingId="h5">
        body
      </ImpactCard>,
    );
    expect(container.querySelector("article").className).toMatch(/border-b-teal/);
  });
});
