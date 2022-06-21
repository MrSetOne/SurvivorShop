import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  allProducts: [],
  cart: cart ? cart : [],
};

export const ProductContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getAllProducts = async () => {
    const res = await axios.get(`${API_URL}/products`);
    dispatch({
      type: "GET_ALL_PRODUCTS",
      payload: res.data,
    });
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <ProductContext.Provider
      value={{
        allProducts: state.allProducts,
        cart: state.cart,
        getAllProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
