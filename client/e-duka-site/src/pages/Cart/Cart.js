import React, { useEffect, useState } from "react";
function Cart() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProduct(response);
      });
  }, []);
  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.image_url}></img>
      <p>{product.description}</p>
      <h2>{product.price}</h2>
    </>
  );
}
export default Cart;
