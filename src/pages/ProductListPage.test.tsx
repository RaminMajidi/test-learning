import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../store/redux/cartSlice";
import { Provider } from "react-redux";
import { ProductListPage } from "./ProductListPage";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";


function renderProductListPage() {
    const store = configureStore({
        reducer: {
            cart: cartReducer
        }
    });
    return render(
        <Provider store={store}>
            <ProductListPage />
        </Provider>
    )
}

describe("ProductListPage integration", () => {
    it("shold start with an empty cart", () => {
        renderProductListPage();

        expect(screen.getByText('Products in cart:0')).toBeInTheDocument();
    });

    it("should update cart indicator and show toast after ading a product", async () => {
        const user = userEvent.setup();
        renderProductListPage();

        const addToCartButtons = screen.getAllByRole('button', { name: 'Add to cart' });
        await user.click(addToCartButtons[0]);

        expect(screen.getByText('Products in cart:1')).toBeInTheDocument();
        expect(await screen.findByRole("status")).toHaveTextContent("Product1 added to cart!");
    });

    it("shold alllow adding multiple different products", async () => {
        const user = userEvent.setup();
        renderProductListPage();

        const addToCartButtons = screen.getAllByRole('button', { name: 'Add to cart' });
        await user.click(addToCartButtons[0]);
        await user.click(addToCartButtons[1]);

        expect(screen.getByText('Products in cart:2')).toBeInTheDocument();
        expect(await screen.findByRole("status")).toHaveTextContent("Product2 added to cart!");

    })


})