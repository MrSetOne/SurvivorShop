import { createContext } from "react";

import axios from "axios";

const API_URL = "http://localhost:8080";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {

  const createOrder = async (order) => {
  
    const token = JSON.parse(localStorage.getItem("token"));
  
    try {
      await axios.post(
        API_URL + "/orders",
        { productIds: order },

        {
          headers: {
            authorization: token,
          },
        }
      );
      localStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
    }
  };

  const makeAPaid = async(id) =>{
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios.put(`${API_URL}/orders/id/${id}`,
        { paid: true },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <OrdersContext.Provider
      value={{
        createOrder,
        makeAPaid
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
