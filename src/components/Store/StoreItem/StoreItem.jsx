import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const StoreItem = ({ item }) => {
  const { addCart, cart } = useContext(ProductContext);

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

      <button onClick={() => addCart(item)}>Add Cart</button>
    </article>
  );
};

export default StoreItem;
