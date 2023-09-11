//this is what our state looks like
/*
{
  products: [
    {
      id: 1,
      name: "cheese",
      price: 100,
      image: imageURL,
      inStock: true,
      rating: 5,
    },
    {
      id: 2,
      name: "apple",
      price: 10,
      image: imageURL,
      inStock: true,
      rating: 4,
    },
    {
      id: 66,
      name: "banana",
      price: 40,
      image: imageURL,
      inStock: true,
      rating: 4,
    },
  ],
  cart: [
    { id: 1, qty: 1 },
    { id: 2, qty: 3 },
  ],
}
*/

//The "ADD_TO_CART" action
//dispatch({type:'ADD_TO_CART', payload:{id: 2}})
//if an object with an id of 2 already exists in the cart, increase the qty by 1 -------> [{ id: 1, qty: 1 },{ id: 2, qty: 4 }]
//if we try to add an object with an id that doesn exist in any of the objects in the cart like 66  -------> [{ id: 1, qty: 1 },{ id: 2, qty: 4 }, {id:66, qty:1}]

//The "REMOVE_ITEM" action should remove the object with corresponding id from the cart regardless of qty
//dispatch({type:'REMOVE_ITEM', payload:{id: 2}})  ---->  [{ id: 1, qty: 1 }, {id:66, qty:1}]

//The "UPDATE_QTY" action updates the quantity without considering the previous quantity
//dispatch(type:'UPDATE_QTY', payload:{id: 1, qty: 17}}) -----> [{ id: 1, qty: 17 }, {id:66, qty:1}]
//dispatch(type:'UPDATE_QTY', payload:{id: 1, qty: 0}}) should remove the item from the cart entirely as if it were a "REMOVE_ITEM" action ------> [{id:66, qty:1}]

export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart
      const inCart = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.id;
      });
      //if the item is in the cart already, increase the qty by 1
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map((cartItem) => {
            return cartItem.id === action.payload.id
              ? { ...cartItem, qty: cartItem.qty + 1 }
              : cartItem;
          }),
        };
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, { id: action.payload.id, qty: 1 }],
        };
      }

    case "REMOVE_ITEM":
      //filter out the cart item with corresponding id to our action.payload.id
      return {
        ...state,
        cart: state.cart.filter((cartItem) => {
          return cartItem.id !== action.payload.id;
        }),
      };

    case "UPDATE_QTY":
      // If the new quantity is 0, remove the item from the cart
      if (action.payload.qty === 0) {
        return {
          ...state,
          cart: state.cart.filter((cartItem) => {
            return cartItem.id !== action.payload.id;
          }),
        };
      } else {
        // Otherwise, update the quantity of the item
        return {
          ...state,
          cart: state.cart.map((cartItem) => {
            return cartItem.id === action.payload.id
              ? { ...cartItem, qty: action.payload.qty }
              : cartItem;
          }),
        };
      }
    default:
      return { ...state };
  }
}
