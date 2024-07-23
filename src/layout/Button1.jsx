import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../features/cart/cartSlice';
import styles from './Button1.module.css';

function Button1({ product }) {
  const dispatch = useDispatch();
  const addedProducts = useSelector((state) => state.cart.addedProducts);
  const isAdded = product ? addedProducts.includes(product.id) : false;

  const handleClick = () => {
    if (!isAdded && product) {
      dispatch(addProduct(product));
    }
  };

  // if (!product) {
  //   return null; // Если product не передан, не рендерить кнопку
  // }

  return (
    <div className={styles.button_cont}>
      <button
        className={`${styles.button_Add} ${isAdded ? styles.active : ''}`}
        onClick={handleClick}
        disabled={isAdded}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default Button1;
