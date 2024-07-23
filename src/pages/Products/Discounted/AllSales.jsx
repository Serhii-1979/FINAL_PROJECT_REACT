import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button1 from "../../../layout/Button1";
import styles from "./AllSales.module.css";
import axios from "axios";

function AllSales() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products!", error);
      }
    };
    fetchAllProducts();
  }, []);


  const discountedProducts = products.filter(product => product.discont_price !== null);


  const displayedProducts = discountedProducts.slice(0, 8);

  return (
    <div className={styles.categories}>
      <div className={styles.categories_navigation}>
        <div className={styles.categories_nav}>
          <p>Main page</p>
        </div>
        <div className={styles.categories_line}></div>
        <div className={styles.categories_nav}>
          <p className={styles.categories_navP}>Discounted items</p>
        </div>
      </div>

      <div className={styles.allProducts_container}>
        <div className={styles.allProducts_flex}>
          <h2>Discounted items</h2>
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
              <p className={styles.allProducts_titleP}>Sorted</p>
              <select name="name" className={styles.allProducts_titleSelect}>
                <option value="value1">by default </option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            </div>
          </div>

          <div className={styles.allProducts_Flex}>
            {displayedProducts.map((product) => {
              const discountPercentage = Math.round(((product.price - product.discont_price) / product.price) * 100);

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
                    <p className={styles.allProducts_text1}>
                      {product.title}
                    </p>
                    <p className={styles.allProducts_textP}>
                      ${product.discont_price}{" "}
                      {product.price && (
                        <span>${product.price}</span>
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

export default AllSales;
