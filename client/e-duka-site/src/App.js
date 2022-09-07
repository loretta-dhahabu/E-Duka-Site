import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Item from "./components/Item";
import Login from "./components/Login";

function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="root">
      <Navbar setToken={setToken} />
      <Router>
        <Routes>
          <Route exact path="/" element={token ? <Home /> : <Login token={token} setToken={setToken} />} />
          <Route path="/item/id:" element={<Item />} />
          <Route>404 Error Page</Route>
        </Routes>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;