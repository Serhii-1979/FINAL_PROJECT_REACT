
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "../src/pages/Home/MainPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AllProductsPage from "./pages/Products/All/AllProductsPage";
import ProductsByCategoryPage from "../src/pages/Products/ByCategory/ProductsByCategoryPage";
import AllSales from "./pages/Products/Discounted/AllSales";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import CartPage from "./pages/Cart/CartPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage"
import ConnectedModal from "./layout/Modal/ConnectedModal";


import styles from "./index.module.css";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<ProductsByCategoryPage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/allSales" element={<AllSales />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ConnectedModal />
      </div>
    </Router>
  );
}
