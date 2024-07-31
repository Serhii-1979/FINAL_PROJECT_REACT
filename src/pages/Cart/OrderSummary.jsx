
import React from 'react';
import { useTranslation } from 'react-i18next';
import OrderForm from '../../layout/Form/OrderForm';
import styles from './OrderSummary.module.css';

function OrderSummary({ totalItems, totalSum }) {
  const { t } = useTranslation();

  return (
    <div className={styles.CartPage_rigth}>
      <div className={styles.CartPage_Oder}>
        <h3>{t('orderDetails')}</h3>
        <div className={styles.CartPage_Oder_price}>
          <p>
            <span className={styles.CartPage_Oder_span}>{totalItems} </span>
            {t('items')}
          </p>
          <div className={styles.CartPage_Oder_Total}>
            <p>{t('total')}</p>
            <p className={styles.CartPage_Oder_TotalPrice}>
              ${" "}
              <span className={styles.CartPage_Oder_Sum}>
                {totalSum.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <OrderForm />
      </div>
    </div>
  );
}

export default OrderSummary;
