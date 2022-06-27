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
  const removeItem = (product) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product,
    });
  };

  const searchBar = async (e) => {
    const results = await axios.get(`${API_URL}/products/name/${e}`);

    dispatch({
      type: "SEARCH_BAR",
      payload: results.data,
    });
  };

  const updateAmount = (i, amount) => {
    dispatch({
      type: "UPDATE__AMOUNT",
      payload: { i, amount },
    });
  };

  const showByPrice = async (order) => {
    dispatch({
      type: "SHOW_BY_PRICE",
      direction: order,
    });
  };

  const filterProducts = async(id) =>{
    const result = await axios.get(`${API_URL}/categories/id/${id}`)
    dispatch({
      type: "FILTER_PRODUCTS",
      payload: result.data.Products,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        allProducts: state.allProducts,
        cart: state.cart,
        getAllProducts,
        addCart,
        clearCart,
        removeItem,
        searchBar,
        updateAmount,
        showByPrice,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
