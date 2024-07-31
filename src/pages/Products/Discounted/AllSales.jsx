import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button1 from "../../../layout/Button1";
import styles from "./AllSales.module.css";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import Breadcrumbs from "../../../layout/Breadcrumbs/Breadcrumbs";
import axios from "axios";

import { API_URL } from "../../../api"

function AllSales() {
  const { t } = useTranslation();
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
        const response = await axios.get(`${API_URL}/products/all`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products!", error);
      }
    };
    fetchAllProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (!product.discont_price) return false;

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
        return (b.discont_price || b.price) - (a.discont_price || a.price);
      }
      if (filters.sort === "price-low-high") {
        return (a.discont_price || a.price) - (b.discont_price || b.price);
      }
      return 0;
    });

  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <div className={styles.categories} data-aos="fade-up">
      <div className={styles.categories_navigation}>
        <Breadcrumbs />
      </div>

      <div className={styles.allProducts_container}>
        <div className={styles.allProducts_flex}>
          <h2>{t("discountedItems")}</h2>
          <ProductFilter
            filters={filters}
            onFilterChange={setFilters}
            hideDiscountFilter={true}
          />

          <div className={styles.allProducts_Flex}>
            {displayedProducts.map((product) => {
              const discountPercentage = Math.round(
                ((product.price - product.discont_price) / product.price) * 100
              );

              return (
                <Link
                  to={`/product/${product.id}`}
                  className={styles.allProducts_flexBox}
                  key={product.id}
                >
                  <div className={styles.allProductsImg}>
                    {product.discont_price && (
                      <div className={styles.discountTag}>
                        {t('discount', { percentage: discountPercentage })}
                      </div>
                    )}
                    <img
                      src={`${API_URL}${product.image}`}
                      alt={product.title}
                    />
                    <div className={styles.button_cont}>
                      <Button1 product={product} />
                    </div>
                  </div>

                  <div className={styles.allProducts_text}>
                    <p className={styles.allProducts_text1}>{product.title}</p>
                    <p className={styles.allProducts_textP}>
                      ${product.discont_price}{" "}
                      {product.price && <span>${product.price}</span>}
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
