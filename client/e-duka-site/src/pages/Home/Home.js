import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

function Home() {
  return (
    <div className="main-container">
      <h2>Welcome to E-Duka-Site</h2>
      <Link to={`products`} onClick={() => <Products />}>
        <button>Shop</button>
      </Link>
    </div>
  );
}
export default Home;
