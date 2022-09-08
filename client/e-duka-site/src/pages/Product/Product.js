import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Product.css";

function Product() {
  const { id } = useParams();
  const [ product, setProduct ] = useState( [] );
  const [cart, addCart] = useState([])

  // post product
  const handleClick = (product) => {
    cart.push();
    console.log(product);
    const title = product.title;
    const price = product.price;
    const description = product.description;
    const image_url = product.image_url;

    axios
      .post("http://localhost:9292/products", {
        title,
        description,
        price,
        image_url,
      })
      .then(() => {
        alert("product posted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="card-info">
      <img src={product.image} alt={product.title}></img>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>
          <em>{product.price} KES</em>
        </p>
        <p>Rating: {product.rating && product.rating.rate && product.rating.count}</p>
        <button onClick={() => handleClick(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Product;
