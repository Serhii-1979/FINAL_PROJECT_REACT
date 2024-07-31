import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {API_URL} from "../../api"

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
        {displayedSales.map((sale) => {
          const discountPercentage = Math.round(
            ((sale.price - sale.discont_price) / sale.price) * 100
          );

          return (
            <Link to="/allSales" key={sale.id} className={styles.sale_flexBox}>
              <div className={styles.sale_flexBoxImg}>
                <img
                  src={`${API_URL}${sale.image}`}
                  alt={sale.title}
                />
                <div className={styles.discountTag}>
                  {t('discount', { percentage: discountPercentage })}
                </div>
              </div>
              <div className={styles.sale_text}>
                <p className={styles.sale_text1}>{sale.title}</p>
                <p className={styles.sale_textP}>
                  ${sale.discont_price} <span>${sale.price}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sale;
