import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imgX from "../../assets/svg/x.svg";
import OrderForm from "../../layout/Form/OrderForm";
import ButtonCart from "../../layout/ButtonCart";
import QuantitySelector from "../../layout/QuantitySelector";
import { removeProduct } from "../../redux/cartSlice";
import styles from "./CartPage.module.css";

function CartPage() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      return acc;
    }, {})
  );

  const handleIncrease = (productId) => {
    setQuantities({
      ...quantities,
      [productId]: quantities[productId] + 1,
    });
  };

  const handleDecrease = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities({
        ...quantities,
        [productId]: quantities[productId] - 1,
      });
    }
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const totalItems = products.length;
  const totalSum = products.reduce((sum, product) => {
    const productPrice = product.discont_price || product.price;
    return sum + productPrice * quantities[product.id];
  }, 0);

  return (
    <div className={styles.categories}>
      <div className={styles.mainCategories_cont}>
        <h1>Shopping cart</h1>
        <Link to="/allProducts" className={styles.mainCategories_contLink}>
          <button className={styles.mainCategories_contLine}>
            <div className={styles.mainCategories_line}></div>
            <p>All categories</p>
          </button>
        </Link>
      </div>

      {totalItems === 0 ? (
        <div className={styles.CannotData}>
          <p>Looks like you have no items in your basket currently.</p>
          <Link to="/allProducts">
            <div className={styles.CannotData_btn}>
              <ButtonCart />
            </div>
          </Link>
        </div>
      ) : (
        <div className={styles.CartPage_container}>
          <div className={styles.CartPage_left}>
            {products.map((product) => (
              <div className={styles.CartProduct} key={product.id}>
                <div className={styles.CartProduct_img}>
                  <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                  />
                </div>
                <div className={styles.CartProduct_content}>
                  <div className={styles.CartProduct_title}>
                    <h4>{product.title}</h4>
                    <div
                      className={styles.CartProduct_close}
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      <img src={imgX} alt="Remove" />
                    </div>
                  </div>

                  <div className={styles.CartProduct_counter}>
                    <div className={styles.CartProduct_counter_quant}>
                      <QuantitySelector
                        quantity={quantities[product.id]}
                        onIncrease={() => handleIncrease(product.id)}
                        onDecrease={() => handleDecrease(product.id)}
                      />
                    </div>
                    <div className={styles.CartProduct_counter_price}>
                      <p className={styles.allProducts_textP}>
                        $
                        {product.discont_price
                          ? product.discont_price * quantities[product.id]
                          : product.price * quantities[product.id]}{" "}
                        {product.discont_price && (
                          <span>${product.price * quantities[product.id]}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.CartPage_rigth}>
            <div className={styles.CartPage_Oder}>
              <h3>Order details</h3>
              <div className={styles.CartPage_Oder_price}>
                <p>
                  <span>{totalItems} </span>items
                </p>
                <div className={styles.CartPage_Oder_Total}>
                  <p>Total</p>
                  <p className={styles.CartPage_Oder_TotalPrice}>
                    ${" "}
                    <span className={styles.CartPage_Oder_Sum}>
                      {totalSum.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <OrderForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
