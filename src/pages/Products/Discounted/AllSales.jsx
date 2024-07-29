import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button1 from "../../../layout/Button1";
import styles from "./AllSales.module.css";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import axios from "axios";

function AllSales() {
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

  // Фильтрация и сортировка товаров
  const filteredProducts = products
    .filter((product) => {
      if (!product.discont_price) return false; // Фильтруем только товары со скидкой
      const priceFrom = parseFloat(filters.priceFrom);
      const priceTo = parseFloat(filters.priceTo);

      let matchesPrice = true;
      if (!isNaN(priceFrom)) {
        matchesPrice = product.discont_price >= priceFrom;
      }
      if (matchesPrice && !isNaN(priceTo)) {
        matchesPrice = product.discont_price <= priceTo;
      }

      return matchesPrice;
    })
    .sort((a, b) => {
      if (filters.sort === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (filters.sort === "price-high-low") {
        return b.discont_price - a.discont_price;
      }
      if (filters.sort === "price-low-high") {
        return a.discont_price - b.discont_price;
      }
      return 0;
    });

    const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <div className={styles.categories}  data-aos="fade-up">
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
          <ProductFilter filters={filters} onFilterChange={setFilters} hideDiscountFilter={true} />

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
                      <Button1 product={product} />
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
