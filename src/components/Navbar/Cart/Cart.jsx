import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../../context/OrdersContext/OrderState";
import { ShoppingCartOutlined } from "@ant-design/icons"
import { notification } from "antd";

import './Cart.scss'
import CartItem from "./CartItem/CartItem";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";


const Cart = ({setBurgerOn}) => {
  const { cart, clearCart, removeItem} = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);
  const { getUser} = useContext(UserContext)
  
  const navigate = useNavigate()

  const currentNotification = ({message, description}) => {
    notification.open({
      message,description
    });
  };

  const notifications = {
    buy:{
      message:"Congratulations, you have completed your order",
      description:"Good luck with the zombies"
    },
    delete:{
      message:"Did you change your mind?",
      description:"You have cleared your cart successfully"
    }
  }

  if (cart.length <= 0) {
    return (
      <div className="Empty__cart">
        <ShoppingCartOutlined />
        <p>No tienes ningún producto añadido</p>
      </div>
      )
  }

  let total = 0

  cart.forEach(element => {
    let toSum = element.price * element.amount
    total += toSum
  });
  
  const createNewOrder = async() => {
    await createOrder(cart);
    await currentNotification(notifications.buy)
    await clearCart();
    await getUser();
    setBurgerOn(false);
    navigate("/user")

  };
  
  const cartItems = cart.map((cartItem, i) => {
    return (
      <CartItem cartItem={cartItem} i={i}/>
      );
    });

  return (
    <div className="cart__container">
      {cartItems}
      <h2>Total: {total.toFixed(2)}</h2>
      <div className="cart__btns">
        <button onClick={() => createNewOrder()}>Create Order</button>
        <button onClick={() => {clearCart();currentNotification(notifications.delete)}}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
