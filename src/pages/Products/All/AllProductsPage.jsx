import React, { useState, useEffect } from "react";
import ProductCardAll from "../../../components/ListCategories/ProductCardAll";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import { useTranslation } from "react-i18next";
import styles from "./allProductsPage.module.css";
import Breadcrumbs from "../../../layout/Breadcrumbs/Breadcrumbs";
import axios from "axios";
import { API_URL } from "../../../api";

function AllProducts() {
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
        console.error("Ошибка при получении продуктов!", error);
      }
    };
    fetchAllProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const { priceFrom, priceTo, discounted } = filters;
    const price = product.discont_price !== null ? product.discont_price : product.price;

    let isMatch = true;

    if (priceFrom && price < priceFrom) {
      isMatch = false;
    }
    if (priceTo && price > priceTo) {
      isMatch = false;
    }
    if (discounted && product.discont_price == null) {
      isMatch = false;
    }

    return isMatch;
  });

  filteredProducts.sort((a, b) => {
    if (filters.sort === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (filters.sort === "price-high-low") {
      return (b.discont_price !== null ? b.discont_price : b.price) - (a.discont_price !== null ? a.discont_price : a.price);
    }
    if (filters.sort === "price-low-high") {
      return (a.discont_price !== null ? a.discont_price : a.price) - (b.discont_price !== null ? b.discont_price : b.price);
    }
    return 0;
  });

  const displayedProducts = filteredProducts.slice(0, 12);

  return (
    <div className={styles.categories} data-aos="fade-up">
      <div className={styles.categories_navigation}>
        <Breadcrumbs />
      </div>

      <div className={styles.allProducts_container}>
        <h2>{t('allProducts')}</h2>

        <ProductFilter filters={filters} onFilterChange={setFilters} />

        <div className={styles.allProducts_Flex}>
          {displayedProducts.map((product) => (
            <ProductCardAll key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
