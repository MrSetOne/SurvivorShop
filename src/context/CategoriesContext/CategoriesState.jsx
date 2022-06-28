import React, { createContext, useReducer } from "react";
import axios from "axios";
import CategoriesReducer from "./CategoriesReducer";

const API_URL = "http://localhost:8080";

const initialState = {
  allCategories: []
};

export const CategoriesContext = createContext(initialState);

export const CategoriesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(CategoriesReducer, initialState);

  const getAllCategories = async () => {
    const res = await axios.get(`${API_URL}/categories`);
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
