import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartDetailsContext";
import CartItem from "../../componenets/cart/CartItem";

function Cart() {
  const navigate = useNavigate();
  const { products } = useCart();
  const productID = Object.keys(products);
  return (
    <div className={`${styles.cartContainer} bg-neutral-200`}>
      <div className={styles.buttonContainer}>
        <button onClick={() => navigate(`/shop`)}>&larr; Shop </button>
      </div>
      <ul>
        {productID.length > 0 ? (
          productID.map((id) => <CartItem id={id} key={id} />)
        ) : (
          <li>Add products</li>
        )}
      </ul>
    </div>
  );
}

export default Cart;
