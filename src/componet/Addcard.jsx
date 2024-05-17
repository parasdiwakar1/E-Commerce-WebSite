import React, { useContext, useState } from 'react';
import { Contest } from "./card";
import "../App.css";

function Addcard() {
  const {data, setData } = useContext(Contest);
  const { datax, cart } = data;

  // const clickHandler = (id) => {
  //   const selectedProduct = datax.find((item) => item.id === id);
  //   if (selectedProduct && !cart.some((item) => item.id === id)) {
  //     setData({ ...data, cart: [...cart, selectedProduct] });
  //   }
  // };
  const clickHandler = (id) => {
    const selectedProduct = datax.find((item) => item.id === id);
    if (cart.findIndex((item) => item.id === id)===-1) {
      setData({ ...data, cart: [...cart, selectedProduct] });
    }
  };
 
  
  return (
    <div className='main'>
      {datax.map((item) => (
        <div key={item.id} className='box'>
          <h1>{item.product}</h1>
          <h3>{item.description}</h3>
          <img src={item.Image} alt={item.product} />
          <h3>{item.price}</h3>
          <button className='btn' onClick={() => clickHandler(item.id)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Addcard;
