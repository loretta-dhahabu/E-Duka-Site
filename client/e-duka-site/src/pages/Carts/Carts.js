import React, { useEffect, useState } from "react";
import "./Carts.css"

function Carts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/carts")
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setProducts(response);
      });
  }, []);
  return (
      < div className="cart-container" >
          { products.map( ( product ) =>
          {
            return (
              <>
                <div className="card-cart" key={product.id}>
                  <img src={product.image_url} alt={product.title}></img>
                  <h2>{product.title}</h2>
                  <h2>{product.price}</h2>
                </div>
              </>
            );
             
          })}
      
    </div>
  );
}
export default Carts;
