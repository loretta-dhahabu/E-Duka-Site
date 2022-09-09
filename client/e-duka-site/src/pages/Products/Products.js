import React from "react";
import "../Products/Products.css";
import Product from "../Product/Product.js";
import { Link } from "react-router-dom";

function Products({product}) {

  return (
    <div className="card-container">
      
          <div className="container" key={product.id}>
            <div className="card">
              <img src={product.image_url} alt={product.title}></img>
              <h2>{product.title}</h2>
              <div>
            <h3>$ { product.price }</h3>
                <Link
                  to={`/products/${product.id}`}
                  onClick={() => <Product key={product.id} />}
                >
                  <button>Shop</button>
                </Link>
              </div>
            </div>
          </div>
    </div>
  );
}
export default Products;
