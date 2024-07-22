import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "../src/pages/Home/MainPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AllProductsPage from "./pages/Products/All/AllProductsPage";
import ProductsByCategoryPage from "../src/pages/Products/ByCategory/ProductsByCategoryPage";
import AllSales from "./pages/Products/Discounted/AllSales";
import ProductDetailsPage from "./pages/ProductDetails/ProductDetailsPage";
import styles from "./index.module.css";

export default function App() {
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
