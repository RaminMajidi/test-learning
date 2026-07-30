import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("LoginForm component", () => {
  it("should let user type into email and password fields", async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    const emailInput = screen.getByLabelText("email");
    const passwordInput = screen.getByLabelText("password");

    await user.type(emailInput, "ramin@gmail.com");
    await user.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("ramin@gmail.com");
    expect(passwordInput).toHaveValue("123456");
  });

  it("should show an error when submitting empty form", async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={() => {}} />);

    const submitButton = screen.getByRole("button", { name: "Login" });
    await user.click(submitButton);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "email & password required",
    );
  });

  it("should call onSubmit with correct values when form is valid", async () => {
    const user = userEvent.setup();
    const handelSubmit = vi.fn();

    render(<LoginForm onSubmit={handelSubmit} />);

    await user.type(screen.getByLabelText("email"), "ramin@gmail.com");
    await user.type(screen.getByLabelText("password"), "123456");
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(handelSubmit).toHaveBeenCalledTimes(1);
    expect(handelSubmit).toHaveBeenCalledWith("ramin@gmail.com", "123456");
  });
});
