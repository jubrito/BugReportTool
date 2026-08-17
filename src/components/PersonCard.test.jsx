import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PersonCard, { PersonBullets } from "./PersonCard";

describe("PersonCard", () => {
  it("renders name and role", () => {
    render(<PersonCard name="Jane Doe" role="Engineer" accent="teal">bio</PersonCard>);
    expect(screen.getByRole("heading", { name: "Jane Doe" })).toBeInTheDocument();
    expect(screen.getByText("Engineer")).toBeInTheDocument();
    expect(screen.getByText("bio")).toBeInTheDocument();
  });

  it("colors role by accent", () => {
    render(<PersonCard name="X" role="R" accent="pink">c</PersonCard>);
    expect(screen.getByText("R").className).toMatch(/text-pink/);
  });

  it("falls back to teal when unknown accent is passed", () => {
    render(<PersonCard name="X" role="R" accent="bogus">c</PersonCard>);
    expect(screen.getByText("R").className).toMatch(/text-teal/);
  });
});

describe("PersonBullets", () => {
  it("renders each item as a list item", () => {
    render(<PersonBullets items={["one", "two", "three"]} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByText("two")).toBeInTheDocument();
  });

  it("bolds the first item when boldFirst is true", () => {
    render(<PersonBullets items={["first", "second"]} boldFirst />);
    const first = screen.getByText("first");
    const second = screen.getByText("second");
    expect(first.className).toMatch(/font-bold/);
    expect(second.className).toMatch(/font-normal/);
  });

  it("does not bold the first item when boldFirst is false", () => {
    render(<PersonBullets items={["first"]} boldFirst={false} />);
    expect(screen.getByText("first").className).toMatch(/font-normal/);
  });

  it("applies marker color from accent", () => {
    const { container } = render(
      <PersonBullets items={["a"]} accent="green" />,
    );
    expect(container.querySelector("ul").className).toMatch(/marker:text-green/);
  });
});
