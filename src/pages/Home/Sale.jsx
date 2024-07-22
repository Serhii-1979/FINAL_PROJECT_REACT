import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./sale.module.css";

function Sale() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get("http://localhost:3333/products/all");
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
    <div className={styles.sale_container}>
      <div className={styles.sale_cont}>
        <h1>Sale</h1>
        <Link to="/allSales" className={styles.mainCategories_contLink}>
          <button className={styles.sale_contLine}>
            <div className={styles.mainCategories_line}></div>
            <p>All sales</p>
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
                  src={`http://localhost:3333${sale.image}`}
                  alt={sale.title}
                />
                <div className={styles.discountTag}>-{discountPercentage}%</div>
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
