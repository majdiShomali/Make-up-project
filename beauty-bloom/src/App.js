import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/NavAndFooter/Footer";
import Contact from "./pages/landing/ContactUs/Contact";
import About from "./pages/landing/aboutPage/About";
import Landing from "./pages/landing/landingPage/Landing";

import Product from "./pages/Product/product";
import ProductFeature from "./pages/Product/feature";

// import NavListMenu from "./pages/NavAndFooter/Nav"

import Login from "./pages/loginpages/Login";
import Signup from "./pages/loginpages/Signup";
import Navbar from "./pages/NavAndFooter/Navbar";
import Cart from "./pages/Product/Cart";
import CartFeature from "./pages/Product/featureCart";
import UserProvider from "./pages/Product/ProductContext";
import Store from "./pages/Store/Store";


function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<Product />} path="Product" />

          <Route element={<Login />} path="Login" />
          <Route element={<Signup />} path="Signup" />

          <Route element={<ProductFeature />} path="ProductFeature" />
          <Route element={<Cart />} path="Cart" />
          <Route element={<CartFeature />} path="CartFeature" />

          <Route path="/" />
          <Route element={<Landing />} path="Landing" />
          <Route element={<Contact />} path="Contact" />
          <Route element={<About />} path="About" />
          <Route element={<Store />} path="store" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
