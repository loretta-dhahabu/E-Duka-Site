import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then( ( data ) =>
      {
        console.log( data );
        setProduct( data );
      } );
  }, []);

  return (
      <div className="card-info" >
        <img src={product.image} alt={product.title}></img> */}
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
  );
}
export default Product;
