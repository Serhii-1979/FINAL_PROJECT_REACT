import React from 'react';
import { Link } from "react-router-dom";
import "./categories.css";
import img51 from "../../../assets/images/img51.png";

function Categories() {
  const categories = [
    { id: 1, name: 'Dry & Wet Food' },
    { id: 2, name: 'Litter Boxes & Litter Trays' },
    { id: 3, name: 'Baskets & Beds' },
    { id: 4, name: 'Toys' },
    { id: 5, name: 'Trees & Scratching' },
    { id: 6, name: 'Runs & Fencing ' },
    { id: 7, name: 'Snacks & Supplements ' },
    { id: 8, name: 'Care & Grooming' },
    // Добавьте другие категории здесь
  ];

  return (
    <div className="categories">
      <div className="categories_navigation">
        <div className="categories_nav">
          <p>Main page</p>
        </div>
        <div className="categories_line"></div>
        <div className="categories_nav">
          <p className="categories_nav-p">Categories</p>
        </div>
      </div>
      <div className="categories_container">
        <div className="categories_flex">
          <h2>Categories</h2>
          <div className="categories_flexBox">
            {categories.map(category => (
              <Link
                to={`/goods/${category.id}`}
                className="categories_flex-box"
                key={category.id}
              >
                <img src={img51} alt="img" />
                <p>{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
