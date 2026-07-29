import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

describe("Greeting component", () => {
  it("should render the name passed as prop", () => {
    // Arrange + Act
    render(<Greeting name="hasti" />);

    // Assert
    expect(screen.getByText("Hello hasti !")).toBeInTheDocument();
  });

  it("should render the welcome message", () => {
    render(<Greeting name="hasti" />);

    expect(screen.getByText("Welcome to my application")).toBeInTheDocument();
  });
});
