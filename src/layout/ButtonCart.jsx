
import styles from "./Button2.module.css"

function ButtonCart({ onClick }) {
  return (
    <div className={styles.button_cont}>
      <button className={styles.button_Add} onClick={onClick}>
        Continue Shopping
      </button>
    </div>
  );
}

export default ButtonCart;
