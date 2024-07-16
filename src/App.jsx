import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import MainPage from "./components/home/mainPage/MainPage";
import Categories from "./components/home/categories/Categories";
import AllProducts from "./components/home/allProducts/AllProducts";
import AllSales from "./components/home/allSales/AllSales";
import DryWetFood from "./components/home/categories/DryWetFood";
import DryFood from "./components/home/categories/DryFood";
import Footer from "./components/footer/Footer";
import logo from "./assets/svg/logo.svg";
import icon from "./assets/svg/icon.svg";
import "./index.css";

function SuperNavLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {children}
    </NavLink>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header_logo">
            <img src={logo} alt="img" />
          </div>
          <nav className="header_nav">
            <SuperNavLink to="/">Main Page</SuperNavLink>
            <SuperNavLink to="/categories">Categories</SuperNavLink>
            <SuperNavLink to="/allProducts">All Products</SuperNavLink>
            <SuperNavLink to="/allSales">All Sales</SuperNavLink>
          </nav>
          <div className="header_logo">
            <div className="cart_icon">
              <img src={icon} alt="img" />
              <div className="cart_count">{cartCount}</div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/allSales" element={<AllSales />} />
          <Route
            path="/goods/:goodId"
            element={<DryWetFood addToCart={addToCart} />}
          />
          <Route path="/dry-food" element={<DryFood />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
