import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../ThemeContext";
import logo from "../../assets/svg/logo.svg";
import icon from "../../assets/svg/icon.svg";
import iconNigth from "../../assets/svg/icon-nigth.svg";
import sunIcon from "../../assets/svg/sun.svg";
import moonIcon from "../../assets/svg/moon.svg";
import burgerIcon from "../../assets/svg/list.svg";
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
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const cartCount = useSelector((state) => state.cart.count);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const Sale = theme === 'dark' ? iconNigth : icon;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    console.log("Current language:", i18n.language);
    console.log("Translations loaded:", i18n.store.data);
  }, [i18n.language, i18n.store.data]);

  return (
    <header className={styles.header}>
      <div className={styles.header_logo1}>
        <Link to="/">
          <img src={logo} alt="img" />
        </Link>
      </div>
      <nav className={`${styles.header_nav} ${menuOpen ? styles.nav_open : ""}`}>
        <SuperNavLink to="/" t={t}>
          {t("mainPage")}
        </SuperNavLink>
        <SuperNavLink to="/categories" t={t}>
          {t("categories")}
        </SuperNavLink>
        <SuperNavLink to="/allProducts" t={t}>
          {t("allProducts")}
        </SuperNavLink>
        <SuperNavLink to="/allSales" t={t}>
          {t("allSales")}
        </SuperNavLink>
      </nav>
      <div className={styles.burger_menu} onClick={toggleMenu}>
        <img src={burgerIcon} alt="Menu" />
      </div>
      <div className={styles.header_right}>
        <select
          className={styles.header_select}
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en">En</option>
          <option value="ru">Ru</option>
          <option value="ua">Ua</option>
          <option value="de">De</option>
          <option value="pl">Pl</option>
        </select>

        <div className={styles.toggleTheme}>
          <button className={styles.toggle_theme_button} onClick={toggleTheme}>
            <img
              src={theme === "light" ? sunIcon : moonIcon}
              alt="Toggle Theme" className={styles.theme_icon}
            />
          </button>
        </div>

        <Link to="/cart">
          <div className={styles.header_logo}>
            <div className={styles.cart_icon}>
              <img src={Sale} alt="img" />
              {cartCount > 0 && (
                <div className={styles.cart_count}>{cartCount}</div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
