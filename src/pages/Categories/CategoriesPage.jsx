// CategoriesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Breadcrumbs from '../../layout/Breadcrumbs/Breadcrumbs';
import CategoryCard from '../../components/ListCategories/CategoryCard';
import styles from './categoriesPage.module.css';
import { API_URL } from '../../api';

function CategoriesPage() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/categories/all`);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
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
          <h2>{t('categories')}</h2>
          <div className={styles.categories_flexBox}>
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
