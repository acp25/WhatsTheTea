import { useReducer } from 'react';
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  CLEAR_CART,
  TOGGLE_CART,
} from './actions';


export const reducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.purchasedItem],
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.purchasedItems],
      };
   
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((purchasedItem) => {
          if (action._id === purchasedItem._id) {
            purchasedItem.purchaseQuantity = action.purchaseQuantity;
          }
          return purchasedItem;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((order) => {
        return order._id !== action._id;
      });
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    default:
      return state;
  }
};

export function useOrderReducer(initialState) {
  return useReducer(reducer, initialState);
}
