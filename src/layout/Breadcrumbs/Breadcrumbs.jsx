import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

function Breadcrumbs() {
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Main page";
    if (path.startsWith("/categories")) return "Categories";
    if (path.startsWith("/allProducts")) return "All Products";
    if (path.startsWith("/allSales")) return "All Sales";
    if (path.startsWith("/product")) return "Product Details";
    if (path.startsWith("/cart")) return "Shopping Cart";
    return "Page";
  };

  const currentPage = getCurrentPage();

  return (
    <div className={styles.categories_cont_nav}>
      <div className={styles.categories_nav}>
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
      </div>
      <div className={styles.categories_line}></div>
      <div className={styles.categories_nav}>
        <p className={`${styles.categories_navP} ${styles.activeBreadcrumb}`}>
          {currentPage}
        </p>
      </div>
    </div>
  );
}

export default Breadcrumbs;
