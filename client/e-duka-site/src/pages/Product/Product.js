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

    axios.post("https://e-duka-site.herokuapp.com/carts", {
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
    fetch(`https://e-duka-site.herokuapp.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="card-info">
      <img src={product.image_url} alt={product.title}></img>
      <div>
        <h2>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>
          <em>$ {product.price}</em>
        </p>
        <p>Rating: {product.rating && product.rating.rate && product.rating.count}</p>
        <button onClick={() => handleClick(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
export default Product;
