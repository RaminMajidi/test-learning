import { userCartStore } from "../store/cartStore";

const AddToCartButton = ({ productName }: { productName: string }) => {
  const { addItem } = userCartStore();

  return <button onClick={() => addItem(productName)}>Add to cart</button>;
};

export default AddToCartButton;
