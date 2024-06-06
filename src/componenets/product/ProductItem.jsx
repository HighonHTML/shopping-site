import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
function ProductItem({ product }) {
  return (
    <Link to={`${product.id}`} className={styles.productCard}>
      <div className={styles.image}>
        <img src={product.image} alt="" />
      </div>
      <hr />
      <div className={styles.productDetails}>
        <p className="text-center">{product.title}</p>
      </div>
        <div className={styles.productPrice}>
          <p className="text-center">$ {product.price}</p>
        </div>
    </Link>
  );
}

export default ProductItem;
