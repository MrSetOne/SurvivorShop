import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/UserContext/UserState"
import OrdersItems from "./OrdersItems/OrdersItems"

const UserInfo = () => {
  const {user, getUser} = useContext(UserContext)
  
  if(!user){
    return(<h1>Cargando...</h1>)
  }
  
  const orders = user.Orders.map((element, i)=>{
      return <OrdersItems element={element} i={i}/>
    })

  return (
    <section className="UserInfo">
        <h3>Your name: {user.username}</h3>
        <h3>Your email: {user.email}</h3>
        <h3>Your address: {user.adress}</h3>
        {orders}
    </section>
  )
}

export default UserInfo