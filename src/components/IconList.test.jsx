import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import IconList, { IconListItem, SubText } from "./IconList";

describe("IconList", () => {
  it("renders items inside a ul", () => {
    render(
      <IconList>
        <IconListItem icon={<svg data-testid="ic" />}>alpha</IconListItem>
        <IconListItem icon={<svg />}>beta</IconListItem>
      </IconList>,
    );
    expect(screen.getByRole("list").tagName).toBe("UL");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("hides the icon wrapper from assistive tech", () => {
    const { container } = render(
      <IconList>
        <IconListItem icon={<svg />}>alpha</IconListItem>
      </IconList>,
    );
    const iconWrap = container.querySelector("li > span");
    expect(iconWrap).toHaveAttribute("aria-hidden", "true");
  });

  it("SubText renders as muted body text", () => {
    render(<SubText>note</SubText>);
    const el = screen.getByText("note");
    expect(el.className).toMatch(/text-text-muted/);
  });
});
