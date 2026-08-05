import { useSelector } from "react-redux";
import type { RootState } from "../store/redux/store";


export function CartIndicator() {
    const items = useSelector((state: RootState) => state.cart.items);

    return (<p>Products in cart:{items.length}</p>)
}