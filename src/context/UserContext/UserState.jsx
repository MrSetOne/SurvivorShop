import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";



const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    console.log(res.data);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const signUp = async(user) =>{
    console.log(user);
    const res = await axios.post(API_URL + "/users/", user);
      dispatch({
        type: "REGISTER",
        payload: res.data,
      });
  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        signUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
