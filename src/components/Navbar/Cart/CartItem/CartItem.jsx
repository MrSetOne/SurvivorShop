import { DeleteOutlined, CaretDownOutlined, CaretUpOutlined} from "@ant-design/icons"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../context/ProductsContext/ProductState";
import './CartItem.scss'

const CartItem = (element) => {
  const {  removeItem, updateAmount } = useContext(ProductContext);

  const incrementAmount = () => {
    updateAmount(element.i,(element.cartItem.amount + 1));
  }

  const decrementAmount = () => {
    if(element.cartItem.amount > 1 ){
      updateAmount(element.i,(element.cartItem.amount - 1));
    }
  }

  return (
    <div className="CartItem" key={element.i}>
        <div className="cart__item--info">
            <h2>{element.cartItem.name}</h2>
            <p>{element.cartItem.price.toFixed(2)} ₸</p>
            <div className="amount__selector">
              <CaretDownOutlined onClick={()=>decrementAmount()}/>
              <p>{element.cartItem.amount}</p>
              <CaretUpOutlined onClick={()=>incrementAmount()}/>
            </div>
        </div>
        <DeleteOutlined className="cart__item--trash" onClick={() => removeItem(element.i)} />
    </div>
  )
}

export default CartItem