import type { RootState } from "../store/redux/store";
import { useSelector } from "react-redux";

export function CartSummary() {
  const items = useSelector((state: RootState) => state.cart.items);

  return <p>Product count:{items.length}</p>;
}
