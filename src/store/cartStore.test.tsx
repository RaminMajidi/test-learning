import { beforeEach, expect, it } from "vitest";
import { userCartStore } from "./cartStore";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import AddToCartButton from "../components/AddToCartButton";

beforeEach(() => {
  userCartStore.setState({ items: [] });
});

it("should add item to cart when button is clicked", async () => {
  const user = userEvent.setup();
  render(<AddToCartButton productName="laptop" />);

  await user.click(screen.getByRole("button", { name: "Add to cart" }));

  expect(userCartStore.getState().items).toContain("laptop");
});
