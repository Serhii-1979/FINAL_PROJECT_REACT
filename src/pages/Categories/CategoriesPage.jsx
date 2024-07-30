import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./categoriesPage.module.css";
import axios from "axios";
import Breadcrumbs from "../../layout/Breadcrumbs/Breadcrumbs";

import { API_URL } from "../../api"





function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories/all`);
        setCategories(response.data);
      } catch (error) {   
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.categories} data-aos="fade-up">
      <div className={styles.categories_navigation}>
        <Breadcrumbs />
      </div>
      <div className={styles.categories_container}>
        <div className={styles.categories_flex}>
          <h2>Categories</h2>
          <div className={styles.categories_flexBox}>
            {categories.map(category => (
              <Link
                to={`/categories/${category.id}`}
                className={styles.categories_flex_box}
                key={category.id}
              >
                <img src={`http://localhost:3333${category.image}`} alt="img" />
                <p>{category.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
