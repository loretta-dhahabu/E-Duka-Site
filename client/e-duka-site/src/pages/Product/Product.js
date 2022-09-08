import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then( ( data ) =>
      {
        console.log( data );
        setProduct( data );
      } );
  }, [id]);

  return (
    <div className="card-info" key={product.id}>
      <img src={product.image} alt={product.title}></img>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price} USD</p>
        <p>
          Rating: {product.rating && product.rating.rate && product.rating.count}
        </p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
export default Product;
