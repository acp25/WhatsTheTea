import React, { createContext, useContext } from "react";
import { useResturantReducer } from './reducers'

const ResturantContext = createContext();
const { Provider } = ResturantContext;

const ResturantProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useResturantReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useResturantContext = () => {
  return useContext(ResturantContext);
};

export { ResturantProvider, useResturantContext };
