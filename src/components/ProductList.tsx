import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/redux/cartSlice";
import { Toast } from "./Toast";


type Product = {
    id: number;
    name: string;
}


const products: Product[] = [
    { id: 1, name: "Product1" },
    { id: 2, name: "Product2" },
]


export function ProductList() {
    const dispatch = useDispatch();

    const [toastMessage, setToastMessage] = React.useState<string | null>(null);

    const handelAddToCart = (product: Product) => {
        dispatch(addItem(product.name));
        setToastMessage(`${product.name} added to cart!`);
    }

    return (
        <div>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <button onClick={() => handelAddToCart(p)}>
                            Add to cart
                        </button>
                    </li>
                ))}
            </ul>

            {toastMessage && <Toast message={toastMessage} />}
        </div>
    )

}