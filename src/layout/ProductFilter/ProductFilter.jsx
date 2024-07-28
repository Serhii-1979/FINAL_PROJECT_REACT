import React from 'react';
import styles from './ProductFilter.module.css';

function ProductFilter({ filters, onFilterChange, hideDiscountFilter }) {
  const handlePriceChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  const handleDiscountChange = (e) => {
    onFilterChange({ ...filters, discounted: e.target.checked });
  };

  const handleSortChange = (e) => {
    onFilterChange({ ...filters, sort: e.target.value });
  };

  return (
    <div className={styles.allProducts_title}>
      <div className={styles.allProducts_titlePrice}>
        <label className={styles.allProducts_titleP}>Price</label>
        <input
          type="text"
          name="priceFrom"
          className={styles.allProducts_titleP1}
          value={filters.priceFrom || ''}
          placeholder="from"
          onChange={handlePriceChange}
        />
        <input
          type="text"
          name="priceTo"
          className={styles.allProducts_titleP1}
          value={filters.priceTo || ''}
          placeholder="to"
          onChange={handlePriceChange}
        />
      </div>

      {!hideDiscountFilter && (
        <div className={styles.allProducts_titlePrice}>
          <label className={styles.allProducts_titleP}>
            Discounted items</label>
            <input
              type="checkbox"
              className={styles.allProducts_title_input}
              checked={filters.discounted || false}
              onChange={handleDiscountChange}
            />
        </div>
      )}

      <div className={styles.allProducts_titlePrice}>
        <label className={styles.allProducts_titleP}>Sorted</label>
        <select value={filters.sort || 'default'} onChange={handleSortChange} className={styles.allProducts_titleSelect}>
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="price-high-low">price: high-low</option>
          <option value="price-low-high">price: low-high</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilter;
