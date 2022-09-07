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
import Reviews from "./pages/Reviews/ReviewList.js";
import Users from "./pages/Users/Users.js";
import Suppliers from "./pages/Suppliers/Suppliers.js";

function App() {
  // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/suppliers" element={<Suppliers />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;