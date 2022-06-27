import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../../context/OrdersContext/OrderState";
import { DeleteOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import './Cart.scss'
import CartItem from "./CartItem/CartItem";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);
  const { getUser} = useContext(UserContext)

  const navigate = useNavigate()

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
    await clearCart();
    await getUser();
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
        <button onClick={() => clearCart()}>Clear cart</button>
      </div>
    </div>
  );
};

export default Cart;
