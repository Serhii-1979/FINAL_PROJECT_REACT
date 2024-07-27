import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button2 from "../../layout/Button2";
import axios from "axios";
import styles from "./ProductDetailsPage.module.css";
import { calculateDiscountPercentage } from "../../util/calculateDiscount";
import QuantitySelector from "../../layout/QuantitySelector";
import { addProduct } from "../../redux/cartSlice";

function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/products/${productId}`
        );
        const productData = response.data[0];

        if (!productData || !productData.title) {
          throw new Error("Product data is invalid");
        }

        setProduct(productData);

        const discount = calculateDiscountPercentage(
          productData.price,
          productData.discont_price
        );
        setDiscountPercentage(discount);
      } catch (error) {
        console.error("Error fetching the product details!", error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product && product.id) {
      dispatch(addProduct({ ...product, quantity }));
    } else {
      console.error("Product data is missing or incorrect:", product);
    }
  };

  if (!product.title) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.DetailsPage_container}>
      <div className={styles.categories_navigation}>
        <div className={styles.categories_nav}>
          <p>Main page</p>
        </div>
        <div className={styles.categories_line}></div>
        <div className={styles.categories_nav}>
          <p>Categories</p>
        </div>
        <div className={styles.categories_line}></div>
        <div className={styles.categories_nav}>
          <p className={styles.categories_navP}>{product.title}</p>
        </div>
      </div>

      <div className={styles.DetailsPage_cont}>
        <div className={styles.DetailsPage_cont_img}>
          <img
            src={`http://localhost:3333${product.image}`}
            alt={product.title}
          />
        </div>

        <div className={styles.DetailsPage_content}>
          <h3 className={styles.allProducts_text1}>{product.title}</h3>
          <div className={styles.DetailsPage_price}>
            <p className={styles.allProducts_textP}>
              ${product.price}{" "}
              {product.discont_price && <span>${product.discont_price}</span>}
            </p>
            <div>
              {discountPercentage !== null && (
                <div className={styles.discountTag}>-{discountPercentage}%</div>
              )}
            </div>
          </div>

          <div className={styles.DetailsPage_Frame}>
            <div className={styles.DetailsPage_Frame_counter}>
              <QuantitySelector
                quantity={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            </div>
            <div className={styles.DetailsPage_Frame_btn}>
              <Button2 onClick={handleAddToCart} />{" "}
              {/* Добавление обработчика */}
            </div>
          </div>
          <div className={styles.DetailsPage_text}>
            <p className={styles.DetailsPage_text_title}>Description</p>

            <div className={styles.DetailsPage_text_container}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
