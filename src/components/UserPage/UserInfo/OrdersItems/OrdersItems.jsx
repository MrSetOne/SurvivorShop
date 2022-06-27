import { useContext, useState } from "react"
import { OrdersContext } from "../../../../context/OrdersContext/OrderState"
import { UserContext } from "../../../../context/UserContext/UserState";
import './OrdersItems.scss';
import { Modal, Button } from 'antd';



const OrdersItems = (element) => {
  const {makeAPaid} = useContext(OrdersContext)
  const { getUser} = useContext(UserContext)

  const [modalVisible, setModalVisible] = useState(false);
  

    let totalPrice = 0
    let totalProducts = 0

    element.element.Products.forEach(item => totalPrice += item.price * item.ProductOrders.amount)

    element.element.Products.forEach(item =>totalProducts += item.ProductOrders.amount)

    const billInfo = element.element.Products.map(item => {
      console.log(item);
      return(
        <li className="Modal__item">
          <p>{item.name} x {item.ProductOrders.amount}</p>
          <p>{(item.ProductOrders.amount * item.price).toFixed(2) } ₸</p>
        </li>
      )
    })

    const handleCancel = ()=>{
      setModalVisible(false)
    }

    const preMakeAPaid = async(id) => {
      await makeAPaid(id);
      await getUser();
    }


    return (
      <>
        <div className="OrdersItem" key={element.element.id} style={element.element.paid?{backgroundColor:"green"}:{backgroundColor:"red"}}>
            <h2 className="OrdersItem__data">{element.element.createdAt.substring(0,10)}</h2>
            <h2 className="OrdersItem__Count">{totalProducts} products</h2>
            <div className="OrdersItem__pay">
              <h3 className="OrdersItem__payPrice">{totalPrice.toFixed(2)} ₸</h3>
              {element.element.paid?
              <h5 className="OrdersItem__paidInfo">Paid</h5>:
              <h5 onClick={()=>setModalVisible(true)} className="OrdersItem__paidInfo OrdersItem__paidInfo--unPaid">Unpaid</h5>}
            </div>
        </div>
        <Modal
        className="Modal"
        visible={modalVisible}
        title="Would you like to finalize your order?"
        onOk={()=>preMakeAPaid(element.element.id)}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="danger" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="pay" type="primary" style={{width:"40%"}} onClick={()=>{preMakeAPaid(element.element.id);handleCancel()}}>
            Pay
          </Button>,
        ]}
      >
        <ol className="Modal__items">
        {billInfo}
        </ol>
        <div className="Modal__total" >
          <h2>Total</h2>
          <h2>{totalPrice.toFixed(2)} ₸</h2>
        </div>

      </Modal>
      </>
  )
}

export default OrdersItems