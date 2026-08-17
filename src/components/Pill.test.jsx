import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Pill from "./Pill";

describe("Pill", () => {
  it("renders children", () => {
    render(<Pill dotColor="#f00">Label</Pill>);
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders a decorative dot when dotColor is provided and no icon", () => {
    const { container } = render(<Pill dotColor="#abcdef">L</Pill>);
    const dot = container.querySelector("span[aria-hidden='true']");
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveStyle({ background: "#abcdef" });
  });

  it("renders provided icon instead of a dot", () => {
    const { container } = render(
      <Pill icon={<svg data-testid="ico" />} dotColor="#f00">
        L
      </Pill>,
    );
    expect(container.querySelector("[data-testid='ico']")).toBeInTheDocument();
    expect(container.querySelectorAll("span[aria-hidden='true']")).toHaveLength(1);
  });

  it("omits dot when neither icon nor dotColor is provided", () => {
    const { container } = render(<Pill borderColor="#111" textColor="#222">L</Pill>);
    expect(container.querySelector("span[aria-hidden='true']")).toBeNull();
  });

  it("uses borderColor and textColor overrides", () => {
    render(
      <Pill dotColor="#f00" borderColor="#0f0" textColor="#00f">
        L
      </Pill>,
    );
    const pill = screen.getByText("L");
    expect(pill).toHaveStyle({ borderColor: "#0f0", color: "#00f" });
  });
});
