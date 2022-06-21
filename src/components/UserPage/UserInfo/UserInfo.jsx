import { useContext } from "react"
import { UserContext } from "../../../context/UserContext/UserState"

const UserInfo = () => {

    const {user} = useContext(UserContext)

  return (
    <section className="UserInfo">
        <h2>{user.username}</h2>
        <h3>{user.email}</h3>
        <h3>{user.adress}</h3>
    </section>
  )
}

export default UserInfo