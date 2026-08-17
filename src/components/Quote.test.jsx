import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Quote from "./Quote";

describe("Quote", () => {
  it("wraps content in figure > blockquote + figcaption", () => {
    const { container } = render(
      <Quote by="Alice">Great work!</Quote>,
    );
    expect(container.querySelector("figure")).toBeInTheDocument();
    expect(container.querySelector("blockquote")).toHaveTextContent("Great work!");
    expect(container.querySelector("figcaption")).toHaveTextContent("Alice");
  });

  it("applies custom accent color to the border and caption", () => {
    const { container } = render(
      <Quote by="A" accentColor="#123456">
        text
      </Quote>,
    );
    expect(container.querySelector("figure")).toHaveStyle({
      borderLeftColor: "#123456",
    });
    expect(container.querySelector("figcaption")).toHaveStyle({
      color: "#123456",
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <Quote by="A" className="w-1/2">
        text
      </Quote>,
    );
    expect(container.querySelector("figure").className).toMatch(/w-1\/2/);
  });
});
