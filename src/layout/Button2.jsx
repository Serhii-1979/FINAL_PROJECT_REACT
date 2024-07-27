import React from "react";
import styles from "./Button2.module.css";

function Button2({ onClick }) {
  return (
    <div className={styles.button_cont}>
      <button className={styles.button_Add} onClick={onClick}>
        Add to cart
      </button>
    </div>
  );
}

export default Button2;
