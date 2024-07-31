import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Button2.module.css";

function Button2({ onClick }) {
  const { t } = useTranslation();

  return (
    <div className={styles.button_cont}>
      <button className={styles.button_Add} onClick={onClick}>
        {t('addToCart')}
      </button>
    </div>
  );
}

export default Button2;
