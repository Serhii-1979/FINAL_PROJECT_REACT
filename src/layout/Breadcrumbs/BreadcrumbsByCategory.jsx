import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

function BreadcrumbsByCategory({ categoryTitle }) {
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/") return "Main page";
    if (path.startsWith("/categories")) return categoryTitle || "Categories";
    return "Page";
  };

  const currentPage = getCurrentPage();

  console.log('Received Category Title:', categoryTitle);

  return (
    <div className={styles.categories_cont_nav}>
      <div className={styles.categories_nav}>
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
      </div>
      <div className={styles.categories_line}></div>
      <div className={styles.categories_nav}>
        <Link to="/categories" className={styles.breadcrumbLink}>
          Categories
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

export default BreadcrumbsByCategory;
