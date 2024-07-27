import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Button1.module.css';

function Button1({ product }) {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    if (product) {
      setIsClicked(true);
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
        {isClicked ? 'Added' : 'Add to card'}
      </button>
    </div>
  );
}

export default Button1;
