import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/UserContext/UserState"

const UserInfo = () => {
  const {user, getUser} = useContext(UserContext)
  
  if(!user){
    return(<h1>Cargando...</h1>)
  }

  return (
    <section className="UserInfo">
        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
        <h3>{user.adress}</h3>
    </section>
  )
}

export default UserInfo