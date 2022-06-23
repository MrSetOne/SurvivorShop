import { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));
const username = JSON.parse(localStorage.getItem("username"));

const initialState = {
  token: token ? token : null,
  user: null,
  username: username ? username : null ,
};

const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("username", JSON.stringify(res.data.user.username));
    }
  };

  const signUp = async (user) => {
    const res = await axios.post(API_URL + "/users/", user);
    dispatch({
      type: "REGISTER",
      payload: res.data,
    });
  };
  const logout = async () => {

    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(
      API_URL + "/users/logout",
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
  };

  const getUser = async () =>{
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL+'/users/id', 
    {
      headers: {
        authorization: token,
      }
    })
    dispatch({
      type: "GET_USER",
      payload: res.data
    })
  }

  const updateUser = async (values) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.put(
      API_URL + "/users/",
      values,
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({
      type: "UPDATE_USER",
      payload: res.data,
    })
  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        username: state.username,
        login,
        signUp,
        logout,
        updateUser,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
