import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./mainCategories.module.css";

function MainCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching the categories!", error);
      }
    };
    fetchCategories();
  }, []);

  const displayedCategories = categories.slice(0, 4);

  return (
    <div className={styles.mainCategories_container}>
      <div className={styles.mainCategories_cont}>
        <h1>Categories</h1>
        <Link to="/categories" className={styles.mainCategories_contLink}>
          <button className={styles.mainCategories_contLine}>
            <div className={styles.mainCategories_line}></div>
            <p>All categories</p>
          </button>
        </Link>
      </div>
      <div className={styles.mainCategories_flex}>
        {displayedCategories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id} className={styles.mainCategories_flexBox}>
            <img
              src={`http://localhost:3333${category.image}`}
              alt={category.title}
            />
            <p>{category.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainCategories;
