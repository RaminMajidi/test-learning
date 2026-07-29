import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProfileCard } from "./ProfileCard";

describe("ProfileCard component", () => {
  it("should render the name as a heading", () => {
    render(<ProfileCard name="ramin" bio="front-end developer" />);
    const heading = screen.getByRole("heading", { name: "ramin" });
    expect(heading).toBeInTheDocument();
  });

  it("should render a follow button", () => {
    render(<ProfileCard name="ramin" bio="front-end developer" />);
    const button = screen.getByRole("button", { name: "follow" });
    expect(button).toBeInTheDocument();
  });

  it("should render profile image with correct alt text", () => {
    render(<ProfileCard name="ramin" bio="front-end developer" />);
    const image = screen.getByRole("img", { name: "profile image ramin" });
    expect(image).toBeInTheDocument();
  });

  it("should render a list of posts", () => {
    render(<ProfileCard name="ramin" bio="front-end developer" />);
    const list = screen.getByRole("list");
    const items = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(2);
  });
});
