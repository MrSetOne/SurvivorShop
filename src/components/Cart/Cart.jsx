import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext/ProductState";
import { OrdersContext } from "../../context/OrdersContext/OrderState";

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
      <div className="cart" key={i}>
        <span>{cartItem.name}</span>
        <span>{cartItem.price.toFixed(2)} €</span>
        <button onClick={() => removeItem(i)}>Remove Item</button>
      </div>
    );
  });

  return (
    <div>
      {cartItem}
      <button onClick={() => clearCart()}>Clear cart</button>
      <button onClick={() => createNewOrder()}>Create Order</button>
    </div>
  );
};

export default Cart;
