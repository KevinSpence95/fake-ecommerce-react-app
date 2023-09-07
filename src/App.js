import { Routes, Route } from "react-router-dom";
import HeaderNav from "./components/headerNav/headerNav";
import CartPage from "./components/pages/cartPage/cartPage";
import ErrorPage from "./components/pages/errorPage/errorPage";
import HomePage from "./components/pages/homePage/homePage";
import ProductsPage from "./components/pages/productsPage/productsPage";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="siteContainer">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;