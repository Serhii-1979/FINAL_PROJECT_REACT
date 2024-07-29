import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button2 from "../../layout/Button2";
import axios from "axios";
import styles from "./ProductDetailsPage.module.css";
import { calculateDiscountPercentage } from "../../util/calculateDiscount";
import QuantitySelector from "../../layout/QuantitySelector";
import { addProduct } from "../../redux/cartSlice";
import { API_URL } from "../../api";

function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    const fetchCategoryTitle = async (categoryId) => {
      try {
        const categoryResponse = await axios.get(
          `${API_URL}/categories/${categoryId}`
        );
        const categoryData = categoryResponse.data;
        console.log("Category data fetched:", categoryData);

        // Убедитесь, что путь к title верный
        setCategoryTitle(categoryData.category.title);
      } catch (error) {
        console.error("Error fetching the category title!", error);
      }
    };

    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${productId}`);
        console.log("Product data fetched:", response.data);
        
        const productData = Array.isArray(response.data) ? response.data[0] : response.data;
        
        if (!productData || !productData.title) {
          throw new Error("Product data is invalid or missing title");
        }

        setProduct(productData);
            
        const discount = calculateDiscountPercentage(
          productData.price,
          productData.discont_price
        );
        setDiscountPercentage(discount);
        
        if (productData.categoryId) {
          fetchCategoryTitle(productData.categoryId);
        }
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
      <div className={styles.categories_navigation} data-aos="fade-up">
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

      <div className={styles.DetailsPage_cont}  data-aos="fade-up">
        <div className={styles.DetailsPage_cont_img}>
          <img
            src={`${API_URL}${product.image}`}
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
