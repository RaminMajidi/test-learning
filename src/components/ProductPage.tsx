import { Link, useNavigate, useParams } from "react-router-dom";

export function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>productId:{productId}</h1>
      <Link role="link" to={"/cart"}>
        Go to shopping cart
      </Link>
      <button onClick={() => navigate("/checkout")}>Continue shopping</button>
    </div>
  );
}
