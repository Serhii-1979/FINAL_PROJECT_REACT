import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button1 from "../../../layout/Button1";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import styles from "./allProductsPage.module.css";
import Breadcrumbs from "../../../layout/Breadcrumbs/Breadcrumbs";
import axios from "axios";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sort: "default",
  });

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

  const filteredProducts = products.filter((product) => {
    const { priceFrom, priceTo, discounted } = filters;

    let isMatch = true;

    if (priceFrom && product.price < priceFrom) {
      isMatch = false;
    }
    if (priceTo && product.price > priceTo) {
      isMatch = false;
    }
    if (discounted && !product.discont_price) {
      isMatch = false;
    }

    return isMatch;
  });

  filteredProducts.sort((a, b) => {
    if (filters.sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (filters.sort === "price-high-low") {
      return b.price - a.price;
    }
    if (filters.sort === "price-low-high") {
      return a.price - b.price;
    }
    return 0;
  });

  const displayedProducts = filteredProducts.slice(0, 12);

  return (
    <div className={styles.categories}  data-aos="fade-up">
      <div className={styles.categories_navigation}>
        <Breadcrumbs />
      </div>

      <div className={styles.allProducts_container}>
        <h2>All products</h2>

        <ProductFilter filters={filters} onFilterChange={setFilters} />

        <div className={styles.allProducts_Flex}>
          {displayedProducts.map((product) => {
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
                    <Button1 product={product} />
                  </div>
                </div>

                <div className={styles.allProducts_text}>
                  <p className={styles.allProducts_text1}>{product.title}</p>
                  <p className={styles.allProducts_textP}>
                    $
                    {product.discont_price
                      ? product.discont_price
                      : product.price}{" "}
                    {product.discont_price && <span>${product.price}</span>}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
