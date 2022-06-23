import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../../context/OrdersContext/OrderState";
import { DeleteOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import './Cart.scss'
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

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
    console.log(element);
    let toSum = element.price * element.amount
    total += toSum
    console.log(total);
  });
  
  const createNewOrder = () => {
    createOrder(cart);
    clearCart();
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
        <button onClick={() => clearCart()}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
