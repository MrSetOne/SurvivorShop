import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const initialState = {
    allProducts:[]
};

export const GlobalContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getAllProducts = async ()=>{
    const res = await axios.get(`${API_URL}/products`);
    dispatch({
      type:"GET_ALL_PRODUCTS",
      payload: res.data,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        allProducts: state.allProducts,
        getAllProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};