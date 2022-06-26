import React, { createContext, useReducer } from "react";
import axios from "axios";
import CategoriesReducer from "./CategoriesReducer";


const initialState = {
  allCategories: []
};

export const CategoriesContext = createContext(initialState);

const API_URL = "http://localhost:8080";

export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  const getAllCategories = async () => {
    const res = await axios.get(`${API_URL}/categories`);
    console.log(res.data);
    dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: res.data,
    });
  };



  return (
    <CategoriesContext.Provider
      value={{
        allCategories: state.allCategories,
        getAllCategories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
