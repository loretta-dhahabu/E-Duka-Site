import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const url = "http://localhost:9292/products";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);
  useEffect(() => {
    setSearchProducts(products);
  }, [products]);
  return (
    <>
      <div className="main-container">
        <h2>Welcome to E-Duka-Site</h2>
        <Link to={`products`} onClick={() => <products />}>
          <button>Shop</button>
        </Link>
      </div>
      <div className="input">
        <input
          id="search-input"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            let query = products.filter((product) =>
              product.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            console.log("search", query);
            setSearchProducts(query);
          }}
        />
      </div>
      <div className="card-container">
        {searchProducts.map((product) => {
          return <Products product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
export default Home;
