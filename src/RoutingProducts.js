import { BrowserRouter, Routes, Route } from "react-router-dom";
import Stocks from "./Products/Stocks/Stocks";
import Header from "./Products/Home/Header";
import { useState, useEffect } from "react";
import ProductContext from "./Products/ProductContext/ProductContext";
import SearchProducts from "./Products/Search/SearchProducts";
import ProductPage from "./Products/Image/ProductPage";
// import CartInformation from "./Products/Cart/CartInformation";
import CartUi from "./Products/Cart/CartUi";
import ProfilePage from "./Products/Profile/ProfilePage";

function RoutingProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let data = await fetch("https://dummyjson.com/products");
    let finalData = await data.json();

    setProducts(finalData.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="cart" element={<CartUi />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default RoutingProducts;
