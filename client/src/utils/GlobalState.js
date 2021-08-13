import React, { createContext, useContext } from "react";
import { useOrderReducer } from './reducers'

const OrderContext = createContext();
const { Provider } = OrderContext;

const ResturantProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useOrderReducer({
    order: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useOrderContext = () => {
  return useContext(OrderContext);
};

export { ResturantProvider, useOrderContext };
