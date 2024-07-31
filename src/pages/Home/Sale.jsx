// Sale.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { API_URL } from "../../api";
import ProductCard from "../../components/ListCategories/ProductCard"
import styles from "./sale.module.css";

function Sale() {
  const { t } = useTranslation();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/all`);
        const discountedProducts = response.data.filter(
          (product) => product.discont_price !== null
        );
        setSales(discountedProducts);
      } catch (error) {
        console.error("Error fetching the sales!", error);
      }
    };
    fetchSales();
  }, []);

  const displayedSales = sales.slice(0, 4);

  return (
    <div className={styles.sale_container} data-aos="fade-up">
      <div className={styles.sale_cont}>
        <h1>{t('sale')}</h1>
        <Link to="/allSales" className={styles.mainCategories_contLink}>
          <button className={styles.sale_contLine}>
            <div className={styles.mainCategories_line}></div>
            <p>{t('allSalesHome')}</p>
          </button>
        </Link>
      </div>

      <div className={styles.sale_flex}>
        {displayedSales.map((sale) => (
          <ProductCard key={sale.id} product={sale} />
        ))}
      </div>
    </div>
  );
}

export default Sale;
