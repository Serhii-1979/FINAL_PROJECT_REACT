import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button1.module.css';

function Button1({ product }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    if (product && product.id) {
      // Check if the product is already marked as clicked
      const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || {};
      if (clickedProducts[product.id]) {
        setIsClicked(true);
      }
    }
  }, [product]);

  const handleClick = () => {
    if (product && product.id) {
      setIsClicked(true);

      // Store the clicked state in localStorage
      const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || {};
      clickedProducts[product.id] = true;
      localStorage.setItem('clickedProducts', JSON.stringify(clickedProducts));

      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className={styles.button_cont}>
      <button
        className={`${styles.button_Add} ${isClicked ? styles.active : ''}`}
        onClick={handleClick}
        disabled={isClicked}
      >
        {isClicked ? 'Added' : 'Add to cart'}
      </button>
    </div>
  );
}

export default Button1;
