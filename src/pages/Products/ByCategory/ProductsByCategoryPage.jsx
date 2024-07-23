import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductsByCategoryPage.module.css";
import Button1 from "../../../layout/Button1";
import axios from "axios";

function ProductsByCategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const categoryResponse = await axios.get(
          `http://localhost:3333/categories/${categoryId}`
        );
        const categoryData = categoryResponse.data;

        setCategoryTitle(categoryData.category.title);
        setProducts(categoryData.data);

        console.log("Category Response:", categoryData);
      } catch (error) {
        console.error("Error fetching the products or category!", error);
      }
    };
    fetchProductsByCategory();
  }, [categoryId]);

  return (
    <div className={styles.categories}>
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
          <p className={styles.categories_navP}>{categoryTitle}</p>
        </div>
      </div>

      <div className={styles.allProducts_container}>
        <div className={styles.allProducts_flex}>
          <h2>{categoryTitle}</h2>
          <div className={styles.allProducts_title}>
            <div className={styles.allProducts_titlePrice}>
              <p className={styles.allProducts_titleP}>Price</p>
              <input
                type="text"
                className={styles.allProducts_titleP1}
                placeholder="from"
              ></input>
              <input
                type="text"
                className={styles.allProducts_titleP1}
                placeholder="to"
              ></input>
            </div>

            <div className={styles.allProducts_titlePrice}>
              <p className={styles.allProducts_titleP}>Discounted items</p>
              <input
                type="checkbox"
                className={styles.allProducts_title_input}
              />
            </div>

            <div className={styles.allProducts_titlePrice}>
              <p className={styles.allProducts_titleP}>Sorted</p>
              <select name="name" className={styles.allProducts_titleSelect}>
                <option value="value1">by default </option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            </div>
          </div>

          <div className={styles.allProducts_Flex}>
            {products.map((product) => {
              const discountPercentage = product.discont_price
                ? Math.round(
                    ((product.price - product.discont_price) / product.price) *
                      100
                  )
                : null;

              return (
                <Link
                  to={`/product/${product.id}`}
                  className={styles.allProducts_flexBox}
                  key={product.id}
                >
                  <div className={styles.allProductsImg}>
                    {product.discont_price && (
                      <div className={styles.discountTag}>
                        -{discountPercentage}%
                      </div>
                    )}

                    <img
                      src={`http://localhost:3333${product.image}`}
                      alt={product.title}
                    />

                    <div className={styles.button_cont}>
                    <Button1 productId={product.id} />
                    </div>
                  </div>

                  <div className={styles.allProducts_text}>
                    <p className={styles.allProducts_text1}>{product.title}</p>
                    <p className={styles.allProducts_textP}>
                      ${product.price}{" "}
                      {product.discont_price && (
                        <span>${product.discont_price}</span>
                      )}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsByCategoryPage;
