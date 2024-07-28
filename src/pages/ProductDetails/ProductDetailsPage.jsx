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
  const [categoryName, setCategoryName] = useState("Category");
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/products/${productId}`);
        
        // Проверяем структуру данных в response.data
        console.log("Product data fetched:", response.data);
        
        // Если данные приходят как массив, используем первый элемент
        const productData = Array.isArray(response.data) ? response.data[0] : response.data;
        
        if (!productData || !productData.title) {
          throw new Error("Product data is invalid or missing title");
        }
  
        setProduct(productData);
        setCategoryName(productData.category?.name || "Category"); // Установка имени категории из данных продукта
        
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

  useEffect(() => {
    if (product.category?.id) {
      const fetchCategoryName = async () => {
        try {
          const categoryResponse = await axios.get(`http://localhost:3333/categories/${product.category.id}`);
          setCategoryName(categoryResponse.data.title);
        } catch (error) {
          console.error("Error fetching category name!", error);
        }
      };
      fetchCategoryName();
    }
  }, [product.category]);

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
        <div className={styles.categories_navCategor}>
          <p>{categoryTitle}</p>
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
              <Button2 onClick={handleAddToCart} />
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
