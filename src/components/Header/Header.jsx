import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";

import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/icon.svg";
import styles from "./header.module.css";

function SuperNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  // const [cartCount, setCartCount] = useState(0);

  // const addToCart = () => {
  //   setCartCount(cartCount + 1);
  // };

  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
      </div>
      <nav className={styles.header_nav}>
        <SuperNavLink to="/">Main Page</SuperNavLink>
        <SuperNavLink to="/categories">Categories</SuperNavLink>
        <SuperNavLink to="/allProducts">All Products</SuperNavLink>
        <SuperNavLink to="/allSales">All Sales</SuperNavLink>
      </nav>
      <div className={styles.header_logo}>
        <div className={styles.cart_icon}>
          <img src={icon} alt="img" />
          <div className={styles.cart_count}>2</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
