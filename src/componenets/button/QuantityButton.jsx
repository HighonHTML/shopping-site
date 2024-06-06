import styles from "./QuantityButton.module.css";
function QuantityButton({ quantity, setQuantity, color }) {
  if(isNaN(quantity)){
    quantity = 0
  }
  return (
    <div className={styles.quantity}>
      <button
        className={`${styles.decrement} ${color}`}
        onClick={() => quantity > 0 && setQuantity(Number(quantity - 1))}
      >
        -
      </button>
      <input
      className={`${color} mx-px`}
        type="text"
        value={quantity}
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setQuantity(Number(value));
        }}
      />
      <button
        className={`${styles.increment} ${color}`}
        onClick={() => setQuantity(Number(quantity + 1))}
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
