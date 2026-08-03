import { useDispatch } from "react-redux";
import { addItem } from "../store/redux/cartSlice";

type AddToCartButtonProps = {
  productName: string;
};

export function AddToCartButton2({ productName }: AddToCartButtonProps) {
  const dispatch = useDispatch();

  return <button onClick={()=> dispatch(addItem(productName))}>Add to cart</button>;
}
