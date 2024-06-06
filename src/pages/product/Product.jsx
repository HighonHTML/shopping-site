// stylesheets
import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// contexts
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartDetailsContext";
// components
import Spinner from "../../componenets/spinner/Spinner";
import Button from "../../componenets/button/Button";
import QuantityButton from "../../componenets/button/QuantityButton";

function Product() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCurrentProduct, currentProduct, isLoading } = useProducts();
  const { getCurrentProductQuantity, addToCart } = useCart();
  const [quantity, setQuantity] = useState(getCurrentProductQuantity(id));

  useEffect(() => {
    getCurrentProduct(id);
  }, [id, getCurrentProduct]);

  function handleClick() {
    if (quantity > 0) {
      const product = {
        ...currentProduct,
        quantity,
      };
      addToCart(product, product.id);
    }
  }
  return (
    <div className={styles.productPage}>
      <div className={styles.buttonContainer}>
        <button onClick={() => navigate(`/shop`)}>&larr; back </button>
        <button onClick={() => navigate(`/cart`)}>cart</button>
      </div>
      <div className={styles.productCardContainer}>
        <div className={styles.productCard}>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <div className={styles.image}>
                <img src={currentProduct.image} className="max-h-full" />
              </div>
              <div className={styles.details}>
                <h2>{currentProduct.title}</h2>
                <p>$ {currentProduct.price}</p>
                <hr />
                <p>{currentProduct.description}</p>
                <br />
                <Button onClick={handleClick}>Add to cart</Button>
                <QuantityButton
                  quantity={quantity}
                  setQuantity={setQuantity}
                  color="bg-white"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
