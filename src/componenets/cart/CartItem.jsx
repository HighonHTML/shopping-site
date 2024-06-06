import styles from "./CartItem.module.css";
import { useCart } from "../../context/CartDetailsContext";
import QuantityButton from "../button/QuantityButton";
import { useNavigate } from "react-router-dom";
function CartItem({ id }) {
  const { addToCart, products } = useCart();
  const product = products[id];
  const quantity = product.quantity;
  const navigate = useNavigate();
  function handleUpdate(q) {
    const newProduct = { ...product, quantity: q };
    addToCart(newProduct, product.id);
  }
  return (
    <li className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <div className={styles.image}>
          <img
            src={product.image}
            alt=""
            className=""
            onClick={() => navigate(`/shop/${id}`)}
          />
        </div>
        <h2 className={styles.title}>{product.title}</h2>

        <div className={styles.buttonGroup}>
          <QuantityButton
            quantity={quantity}
            setQuantity={handleUpdate}
            color="bg-neutral-200"
          />
          {/* <FontAwesomeIcon icon="fas fa-trash" /> */}
          <div className={styles.remove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              onClick={() => handleUpdate(0)}
            >
              <path
                fill="currentColor"
                d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.7 23.7 0 0 0 -21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0 -16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
              />
            </svg>
          </div>
        </div>
        <div className={styles.price}>
          <h2>{`$ ${quantity * product.price}`}</h2>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
