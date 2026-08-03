import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { type CartState } from "../store/redux/cartSlice";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import { CartSummary } from "./CartSummary";
import userEvent from "@testing-library/user-event";
import { AddToCartButton2 } from "./AddToCartButton2";

function renderWithStore(
  ui: React.ReactElement,
  preloadedState?: { cart: CartState },
) {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState,
  });

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe("CartSummary component", () => {
  it("should show zero items when cart is empty", () => {
    renderWithStore(<CartSummary />);

    expect(screen.getByText("Product count:0"));
  });

  it("should show preload items count", () => {
    renderWithStore(<CartSummary />, {
      cart: { items: ["laptop", "keyboard"] },
    });

    expect(screen.getByText("Product count:2")).toBeInTheDocument();
  });
});

describe("AddToCartButton2 + CartSummary integration", () => {
  it("should update cart summary when item is added", async () => {
    const user = userEvent.setup();

    renderWithStore(
      <>
        <AddToCartButton2 productName="laptop" />
        <CartSummary />
      </>,
    );

    expect(screen.getByText("Product count:0"));

    await user.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(screen.getByText("Product count:1")).toBeInTheDocument();
  });
});
