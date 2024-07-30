import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./ProductsByCategoryPage.module.css";
import Button1 from "../../../layout/Button1";
import ProductFilter from "../../../layout/ProductFilter/ProductFilter";
import axios from "axios";
import BreadcrumbsByCategory from "../../../layout/Breadcrumbs/BreadcrumbsByCategory";
import { API_URL } from "../../../api";

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
          `${API_URL}/categories/${categoryId}`
        );
        const categoryData = categoryResponse.data;

        if (categoryData.category) {
          setCategoryTitle(categoryData.category.title);
          console.log('Setting Category Title:', categoryData.category.title);
        } else {
          console.error("Category data is missing 'category' field");
        }

        if (Array.isArray(categoryData.data)) {
          setProducts(categoryData.data);
          console.log('Setting Products:', categoryData.data);
        } else {
          console.error("Category data is missing 'data' field or it's not an array");
        }
      } catch (error) {
        console.error("Error fetching the products or category!", error);
      }
    };
    fetchProductsByCategory();
  }, [categoryId]);

  const filteredProducts = products.filter((product) => {
    const { priceFrom, priceTo, discounted } = filters;
    const price = product.discont_price !== null ? product.discont_price : product.price;
    let isMatch = true;

    if (priceFrom && price < parseFloat(priceFrom)) {
      isMatch = false;
    }
    if (priceTo && price > parseFloat(priceTo)) {
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
        <BreadcrumbsByCategory categoryTitle={categoryTitle} />
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
                      src={`${API_URL}${product.image}`}
                      alt={product.title} // Удалена лишняя фигурная скобка
                    />

                    <div className={styles.button_cont}>
                      <Button1 productId={product.id} />
                    </div>
                  </div>

                  <div className={styles.allProducts_text}>
                    <p className={styles.allProducts_text1}>{product.title}</p>
                    <p className={styles.allProducts_textP}>
                      ${product.discont_price ? product.discont_price : product.price}{" "}
                      {product.discont_price && (
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

export default ProductsByCategoryPage;
