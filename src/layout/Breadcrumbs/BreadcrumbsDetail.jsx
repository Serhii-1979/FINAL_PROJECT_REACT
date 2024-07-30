import React from "react";
import { Link } from "react-router-dom";
import styles from "./breadcrumbs.module.css";

function BreadcrumbsDetail({ categoryTitle, productTitle }) {
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
        <Link to="/" className={styles.breadcrumbLink}>
          {categoryTitle}
        </Link>
      </div>
      <div className={styles.categories_line}></div>
      <div className={styles.categories_nav}>
        <p title={productTitle} className={`${styles.categories_navP} ${styles.activeBreadcrumb}`}>
          {productTitle}
        </p>
      </div>
    </div>
  );
}

export default BreadcrumbsDetail;
