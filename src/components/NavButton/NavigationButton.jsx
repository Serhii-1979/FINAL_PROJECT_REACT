import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../../pages/Home/mainCategories.module.css";

function NavigationButton({ to, textKey }) {
  const { t } = useTranslation();

  return (
    <Link to={to} className={styles.mainCategories_contLink}>
      <button className={styles.mainCategories_contLine}>
        <div className={styles.mainCategories_line}></div>
        <p>{t(textKey)}</p>
      </button>
    </Link>
  );
}

export default NavigationButton;
