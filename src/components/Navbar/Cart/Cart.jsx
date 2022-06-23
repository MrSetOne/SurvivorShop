import { useContext } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../../context/OrdersContext/OrderState";
import { DeleteOutlined} from "@ant-design/icons"
import './Cart.scss'

const Cart = () => {
  const { cart, clearCart, removeItem } = useContext(ProductContext);
  const { createOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const createNewOrder = () => {
    console.log(cart);
    createOrder(cart);
    clearCart();
  };

  const cartItem = cart.map((cartItem, i) => {
    return (
      <div className="cart__item" key={i}>
        <div className="cart__item--info">
          <h2>{cartItem.name}</h2>
          <p>{cartItem.price.toFixed(2)} ₸</p>
        </div>
        <DeleteOutlined className="cart__item--trash" onClick={() => removeItem(i)} />
      </div>
    );
  });

  return (
    <div className="cart__container">
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
