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
import RegisterUsers from "./pages/RegisterUsers/Register.js"

function App() {
  // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>

        </Routes>
      </div>
      <Footer/>
   </Router>
  );
}

export default App;