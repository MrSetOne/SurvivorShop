import { useContext } from "react"
import { OrdersContext } from "../../../../context/OrdersContext/OrderState"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext/UserState";
import './OrdersItems.scss'


const OrdersItems = (element) => {
  const {makeAPaid} = useContext(OrdersContext)
  const { getUser} = useContext(UserContext)

    console.log(element.element)

    

    let totalPrice = 0
    let totalProducts = 0

    element.element.Products.forEach(item => totalPrice += item.price * item.ProductOrders.amount)

    element.element.Products.forEach(item =>totalProducts += item.ProductOrders.amount)

    const preMakeAPaid = async(id) => {
      await makeAPaid(id);
      await getUser();
    }


    return (
    <div className="OrdersItem" key={element.element.id} style={element.element.paid?{backgroundColor:"green"}:{backgroundColor:"red"}}>
        <h2 className="OrdersItem__data">{element.element.createdAt.substring(0,10)}</h2>
        <h2 className="OrdersItem__Count">{totalProducts} products</h2>
        <div className="OrdersItem__pay">
          <h3 className="OrdersItem__payPrice">{totalPrice.toFixed(2)} ₸</h3>
          {element.element.paid?
          <h5 className="OrdersItem__paidInfo">Paid</h5>:
          <h5 onClick={()=>preMakeAPaid(element.element.id)} className="OrdersItem__paidInfo OrdersItem__paidInfo--unPaid">Unpaid</h5>}
        </div>
        
    </div>
  )
}

export default OrdersItems