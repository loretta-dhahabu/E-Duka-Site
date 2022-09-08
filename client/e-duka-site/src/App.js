import React from "react";
import "./App.css";
//imports components
import NavBar from "./components/NavBar/NavBar.js"
import Footer from "./components/Footer/Footer.js";
//absolute imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports pages
import Home from "./pages/Home/Home.js";
import Products from "./pages/Products/Products.js";
import Product from "./pages/Product/Product";

function App() {
  // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="root">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;