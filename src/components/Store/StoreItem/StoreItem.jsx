import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const StoreItem = ({ item }) => {
  const { addCart, cart , updateAmount} = useContext(ProductContext);

  const tryToEntry = (item) =>{
    if(cart.some(cartItem => cartItem.id === item.id)){
      const index = cart.findIndex(object => {
        return object.id === item.id
      })
      const newAmount = cart[index].amount + 1
      console.log("El antiguo valor es: ",cart[index].amount);
      console.log("El nuevo valor es: ", newAmount);
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

      <button onClick={() => tryToEntry(item)}>Add Cart</button>
    </article>
  );
};

export default StoreItem;
