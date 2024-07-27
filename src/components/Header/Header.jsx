import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/icon.svg";
import styles from "./header.module.css";

function SuperNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const className = isActive ? styles.activeLink : styles.inactiveLink;
        return className;
      }}
    >
      {children}
    </NavLink>
  );
}

function Header() {
  const cartCount = useSelector((state) => state.cart.count);

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
      <Link to="/cart">
        <div className={styles.header_logo}>
          <div className={styles.cart_icon}>
            <img src={icon} alt="img" />
            {cartCount > 0 && (
              <div className={styles.cart_count}>{cartCount}</div>
            )}
          </div>
        </div>
      </Link>
    </header>
  );
}

export default Header;
