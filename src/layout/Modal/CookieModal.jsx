import React from 'react';

import styles from "./CookieModal.module.css"

const CookietModal = ({ isOpen, onAccept, onDecline }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h2>Мы используем Cookies</h2>
        <p>Мы используем файлы cookie для улучшения вашего опыта на нашем сайте. Пожалуйста, согласитесь или откажитесь от использования файлов cookie.</p>
        <button onClick={onAccept}>Согласен</button>
        <button onClick={onDecline}>Отказаться</button>
      </div>
    </div>
  );
};

export default CookietModal;
