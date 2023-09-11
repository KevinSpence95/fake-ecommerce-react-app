import { createContext, useReducer, useEffect } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "../reducers/reducer";

export const StoreData = createContext();

//https://fakerjs.dev/api/

faker.seed(588);

export default function ContextProvider({ children }) {
  const products = [...Array(100)].map(() => {
    return {
      id: faker.number.int(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.urlPicsumPhotos(),
      inStock: faker.datatype.boolean({ probability: 0.93 }),
      rating: faker.number.int({ min: 1, max: 5 }),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error fugit recusandae nulla architecto vitae sequi! Libero, dignissimos est voluptatum nobis facere atque error fuga sint temporibus numquam sequi earum.",
    };
  });

  //   console.log(products);

  const [state, dispatch] = useReducer(cartReducer, undefined, () => {
    const localData = localStorage.getItem("cart");
    if (localData) {
      return {
        products,
        cart: JSON.parse(localData),
      };
    } else {
      return {
        products,
        cart: [],
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state]);

  return (
    <StoreData.Provider value={{ state, dispatch }}>
      {children}
    </StoreData.Provider>
  );
}
