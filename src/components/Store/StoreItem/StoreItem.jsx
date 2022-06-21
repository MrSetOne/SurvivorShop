import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductsContext/ProductState";

const StoreItem = ({ item }) => {
  const { addCart, cart } = useContext(ProductContext);
  console.log("hey", cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <article className="StoreItem" key={item.id}>
      <h3>{item.name}</h3>

      <button onClick={() => addCart(item)}>Add Cart</button>
      <img
        src={`http://localhost:8080/${item.img}`}
        alt={item.name}
        width="200px"
      />
    </article>
  );
};

export default StoreItem;
