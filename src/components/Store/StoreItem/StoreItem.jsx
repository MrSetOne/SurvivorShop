import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const StoreItem = ({ item }) => {
  const { addCart, cart , updateAmount} = useContext(ProductContext);

  const navigate = useNavigate()

  const tryToEntry = (item) =>{
    if(cart.some(cartItem => cartItem.id === item.id)){
      const index = cart.findIndex(object => {
        return object.id === item.id
      })
      const newAmount = cart[index].amount + 1
      updateAmount(index, newAmount)
    }
    if(!cart.some(cartItem => cartItem.id === item.id)){
      addCart(item)
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <article className="StoreItem" key={item.id}>
      <img
        src={`http://localhost:8080/${item.img}`}
        alt={item.name}
        width="200px"
      />
      <div className="StoreItem__info">
        <h3 className="StoreItem__name">{item.name}</h3>
        <h3>Price: {item.price} ₸</h3>
      </div>

      <button onClick={localStorage.token?() => tryToEntry(item):()=> navigate("/logpage")}>Add Cart</button>
    </article>
  );
};

export default StoreItem;
