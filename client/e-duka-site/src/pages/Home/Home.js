import React, { useEffect, useState } from "react";
import Products from "../Products/Products.js"

function Home() {
  return (
    <div className="home-page">
          <h1>Home</h1>
          <div>
              <input type="text" id="search-input" placeholder="search..."/>
          </div>
    </div>
  );
}
export default Home;
