import { describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PresentationControls from "./PresentationControls";
import {
  PresentationProvider,
  usePresentation,
} from "./PresentationContext";

function Harness({ totalSlides = 3, stepCounts = [1, 1, 1] }) {
  return (
    <PresentationProvider totalSlides={totalSlides} stepCounts={stepCounts}>
      <PresentationControls />
    </PresentationProvider>
  );
}

describe("PresentationControls", () => {
  it("shows an Enter button labelled for AT in normal mode", () => {
    render(<Harness />);
    const btn = screen.getByRole("button", { name: /enter presentation mode/i });
    expect(btn).toBeInTheDocument();
  });

  it("switches into presenting mode when Enter is clicked", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(
      screen.getByRole("button", { name: /enter presentation mode/i }),
    );
    expect(
      screen.getByRole("button", { name: /exit presentation mode/i }),
    ).toBeInTheDocument();
  });

  it("advances via Next and retreats via Previous", async () => {
    const user = userEvent.setup();
    render(<Harness stepCounts={[2, 0, 0]} />);
    await user.click(
      screen.getByRole("button", { name: /enter presentation mode/i }),
    );
    const live = screen.getByTestId("presentation-live");
    expect(live.textContent).toMatch(/step 1 of 3/i);
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(live.textContent).toMatch(/step 2 of 3/i);
    await user.click(screen.getByRole("button", { name: /previous/i }));
    expect(live.textContent).toMatch(/step 1 of 3/i);
  });

  it("provides an aria-live region announcing slide and step position", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(
      screen.getByRole("button", { name: /enter presentation mode/i }),
    );
    const live = screen.getByTestId("presentation-live");
    expect(live).toHaveAttribute("aria-live", "polite");
    expect(live).toHaveAttribute("aria-atomic", "true");
    expect(live.textContent).toMatch(/slide 1 of 3/i);
  });

  it("wraps controls in a nav landmark for AT users", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(
      screen.getByRole("button", { name: /enter presentation mode/i }),
    );
    expect(
      screen.getByRole("navigation", { name: /presentation controls/i }),
    ).toBeInTheDocument();
  });
});
