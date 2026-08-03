import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "./ProductPage";
import { expect, it } from "vitest";
import { CheckoutPage } from "./checkoutPage";
import userEvent from "@testing-library/user-event";

function renderWithRouter(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

it("should display the correct product id from the url", () => {
  renderWithRouter("/product/42");

  expect(screen.getByText("productId:42")).toBeInTheDocument();
});

it("should have a link to the cart page", () => {
  renderWithRouter("/product/42");

  const link = screen.getByRole("link", { name: "Go to shopping cart" });
  expect(link).toHaveAttribute("href", "/cart");
});

it("should navigate to checkout when button is clicked", async () => {
  const user = userEvent.setup();
  renderWithRouter("/product/42");

  await user.click(screen.getByRole("button", { name: "Continue shopping" }));
  expect(await screen.findByText("CheckoutPage"));
});
