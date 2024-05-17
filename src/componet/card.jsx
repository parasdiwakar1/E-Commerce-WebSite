import React, { createContext, useState } from 'react'
import { faker } from "@faker-js/faker";
export const Contest = createContext()

function Card({children}) {
  const datax = [];
  for (let i = 0; i < 50; i++) {
    datax.push({
      id: faker.database.mongodbObjectId(),
      product: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.commerce.productDescription(),
      Image: faker.image.url()
    });
  }
  const[data,setData]=useState({datax,cart:[]
})

  const card_length=data.cart.length
  return (
    <Contest.Provider value={{data,setData,card_length}}>
      {children}
    </Contest.Provider>
  )
}

export default Card
