import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import CategoryCard from "../../components/ListCategories/CategoryCard";
import NavigationButton from "../../components/NavButton/NavigationButton";

import {API_URL} from "../../api"

import styles from "./mainCategories.module.css";



function MainCategories() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/categories/all`
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
    <div className={styles.mainCategories_container} data-aos="fade-up">
      <div className={styles.mainCategories_cont}>
        <h1>{t('categoriesHome')}</h1>
        <NavigationButton to="/categories" textKey="allCategories" />
      </div>
      <div className={styles.mainCategories_flex}>
        {displayedCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default MainCategories;
