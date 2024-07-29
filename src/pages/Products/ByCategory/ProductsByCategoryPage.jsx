import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductsByCategoryPage.module.css";
import Button1 from "../../../layout/Button1";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import axios from "axios";

function ProductsByCategoryPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    discounted: false,
    sort: "default",
  });

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const categoryResponse = await axios.get(
          `http://localhost:3333/categories/${categoryId}`
        );
        const categoryData = categoryResponse.data;

        setCategoryTitle(categoryData.category.title);
        setProducts(categoryData.data);
      } catch (error) {
        console.error("Error fetching the products or category!", error);
      }
    };
    fetchProductsByCategory();
  }, [categoryId]);

  const filteredProducts = products.filter((product) => {
    const { priceFrom, priceTo, discounted } = filters;
    let isMatch = true;

    // Фильтрация по цене
    if (priceFrom && product.price < parseFloat(priceFrom)) {
      isMatch = false;
    }
    if (priceTo && product.price > parseFloat(priceTo)) {
      isMatch = false;
    }

    // Фильтрация по скидке
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

  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <div className={styles.categories}  data-aos="fade-up">
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
