import React, { useState, useEffect } from "react";
import "../Products/Products.css";
import Product from "../Product/Product.js";
import { Link } from "react-router-dom";

function Products({product}) {
  // const [products, setProducts] = useState([]);
  // const [searchProducts, setSearchProducts] = useState([]);
  // const url = "http://localhost:9292/products";
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // useEffect(() => {
  //   setSearchProducts(products);
  // }, [products]);
  return (
    <div className="card-container">
      {/* {products.map((product) => { */}
        {/* return ( */}
          <div className="container" key={product.id}>
            <div className="card">
              <img src={product.image_url} alt={product.title}></img>
              <h2>{product.title}</h2>
              <div>
                <h3>{product.price} KES</h3>
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => <Product key={product.id} />}
                >
                  <button>Shop</button>
                </Link>
              </div>
            </div>
          </div>
        {/* ); */}
      {/* })} */}
    </div>
  );
}
export default Products;
