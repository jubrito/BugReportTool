import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SlackMock from "./SlackMock";

describe("SlackMock", () => {
  it("renders the bot header (twice — one per card)", () => {
    render(<SlackMock />);
    expect(screen.getAllByText("Team Slack bot")).toHaveLength(2);
  });

  it("renders both team and datadog links as anchors", () => {
    render(<SlackMock />);
    expect(screen.getByRole("link", { name: "Team Link" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Datadog RUM Link" })).toBeInTheDocument();
  });

  it("prevents default on the mock link click", () => {
    render(<SlackMock />);
    const link = screen.getByRole("link", { name: "Team Link" });
    const event = new MouseEvent("click", { bubbles: true, cancelable: true });
    link.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
  });

  it("renders the reply rows as a definition list", () => {
    const { container } = render(<SlackMock />);
    const dl = container.querySelector("dl");
    expect(dl).toBeInTheDocument();
    expect(dl.querySelectorAll("dt")).toHaveLength(5);
    expect(dl.querySelectorAll("dd")).toHaveLength(5);
  });

  it("includes the '1 reply' divider", () => {
    render(<SlackMock />);
    expect(screen.getByText(/1 reply/i)).toBeInTheDocument();
  });

  it("marks the bot avatar as decorative", () => {
    const { container } = render(<SlackMock />);
    const avatars = container.querySelectorAll("img[alt='']");
    expect(avatars.length).toBeGreaterThan(0);
    avatars.forEach((img) =>
      expect(img).toHaveAttribute("aria-hidden", "true"),
    );
  });
});
