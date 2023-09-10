import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./reducer";

export const StoreData = createContext();

//https://fakerjs.dev/api/

faker.seed(588);

//TODO check types of fakers and makes sure im handling them correclty in the reducer

export default function ContextProvider({ children }) {
  const products = [...Array(100)].map(() => {
    return {
      id: faker.number.int(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
      inStock: faker.datatype.boolean({ probability: 0.93 }),
      rating: faker.number.int({ min: 1, max: 5 }),
    };
  });

  console.log(products)

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart: [],
  });

  return (
    <StoreData.Provider value={{ state, dispatch }}>
      {children}
    </StoreData.Provider>
  );
}
