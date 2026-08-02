import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LoginForm2 } from "./LoginForm2";

describe("LoginForm2 component", () => {
  it.each([
    { email: "", password: "123456", expectedError: "ایمیل الزامی است" },
    { email: "r@m.com", password: "", expectedError: "رمز عبور الزامی است" },
  ])(
    'should show "$expectedError" when email is "$email"',
    async ({ email, password, expectedError }) => {
      const user = userEvent.setup();
      render(<LoginForm2 onSubmit={vi.fn()} />);

      if (email) {
        await user.type(screen.getByLabelText("ایمیل"), email);
      }
      if (password) {
        await user.type(screen.getByLabelText("رمز عبور"), password);
      }

      await user.click(screen.getByRole("button", { name: "ورود" }));

      expect(screen.getByRole("alert")).toHaveTextContent(expectedError);
    },
  );

  it("should call onSubmit when both fields are filled", async () => {
    const user = userEvent.setup();
    const handelSubmit = vi.fn();

    render(<LoginForm2 onSubmit={handelSubmit} />);

    await user.type(screen.getByLabelText("ایمیل"), "r@m.com");
    await user.type(screen.getByLabelText("رمز عبور"), "123456");
    await user.click(screen.getByRole("button", { name: "ورود" }));

    expect(handelSubmit).toHaveBeenCalledWith("r@m.com", "123456");
  });
});
