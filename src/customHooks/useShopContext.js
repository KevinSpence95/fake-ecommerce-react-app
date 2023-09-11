import { useContext, useCallback } from "react";
import { StoreData } from "../context/contextProvider";

export default function useShopContext() {
  const { state, dispatch } = useContext(StoreData);

  const products = state.products;

  const cart = state.cart;

  //useCallback ensures that the functions returned by this hook are memoized,
  //which can help improve performance by avoiding unnecessary re-renders

  const addToCart = useCallback((id) => {
    dispatch({ type: "ADD_TO_CART", payload: { id } });
  },[dispatch]);

  const removeFromCart = useCallback((id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  },[dispatch]);

  const updateQty = useCallback((id, qty) => {
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  },[dispatch]);

  const totalItems = cart.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    const correspondingProd = products.find((prod) => {
      return curr.id === prod.id;
    });
    return acc + correspondingProd.price * curr.qty;
  }, 0);

  console.log("Cart");
  console.log(cart);

  return {
    products,
    cart,
    addToCart,
    removeFromCart,
    updateQty,
    totalItems,
    totalPrice,
  };
}
