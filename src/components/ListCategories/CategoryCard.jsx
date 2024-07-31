import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../api";
import styles from "./CategoryCard.module.css";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category.id}`}
      className={styles.categories_flex_box}
      key={category.id}
    >
      <img src={`${API_URL}${category.image}`} alt={category.title} />
      <p>{category.title}</p>
    </Link>
  );
}

export default CategoryCard;
