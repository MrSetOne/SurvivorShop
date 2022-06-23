import { DeleteOutlined} from "@ant-design/icons"
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../context/ProductsContext/ProductState";
import './CartItem.scss'

const CartItem = (element) => {
  const { cart, clearCart, removeItem, updateAmount } = useContext(ProductContext);
  

  const initialValue = element.cartItem.amount
  const [amount, changeAmount] = useState(initialValue);


  useEffect(()=>{
    updateAmount(element.i,amount);
  },[amount])

  const toChangeAmount = () =>{
    if(amount > 1 ){
      changeAmount(amount -1)
    }
  }
  
  return (
    <div className="CartItem" key={element.i}>
        <div className="cart__item--info">
            <h2>{element.cartItem.name}</h2>
            <p>{element.cartItem.price.toFixed(2)} ₸</p>
            <div>
              <p onClick={()=>toChangeAmount()} >-</p>
              <p>{amount}</p>
              <p onClick={()=>changeAmount(amount +1)} >+</p>
            </div>
        </div>
        <DeleteOutlined className="cart__item--trash" onClick={() => removeItem(element.i)} />
    </div>
  )
}

// return (cartItem);}

export default CartItem