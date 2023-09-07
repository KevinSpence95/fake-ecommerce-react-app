import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./reducer";

export const StoreData = createContext();
faker.seed(388);

export default function ContextProvider({ children }) {
  const products = [...Array(60)].map(() => {
    return {
      id: crypto.randomUUID(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image:
        Math.random() > 0.5
          ? "https://loremflickr.com/320/180"
          : "https://placekitten.com/320/180",
      inStock: Math.random() > 0.93 ? false : true,
      ratings: Math.floor(Math.random() * 5) + 1,
    };
  });

  //   console.log(products);

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
