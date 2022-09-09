import React from "react";
import "./App.css";
//imports components
import NavBar from "./components/NavBar/NavBar.js"
import Footer from "./components/Footer/Footer.js";
//absolute imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//imports pages
import Home from "./pages/Home/Home.js";
import Product from "./pages/Product/Product.js";
import Products from "./pages/Products/Products.js";
import Carts from "./pages/Carts/Carts";
import SignUp from "./pages/SignUp/Signup";

function App() {
  // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="root">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="/carts/" element={<Carts />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;