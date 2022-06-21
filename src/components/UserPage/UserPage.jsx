import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext/UserState"
import UpdateUser from "./UpdateUser/UpdateUser"
import UserInfo from "./UserInfo/UserInfo"

const UserPage = () => {

  const {user , getUser} = useContext(UserContext)

  const initialValue = {
    needUpdate:false,
    isUpdating:false
  }
  
  const [needUpdate, changeNeedUpdate] = useState(initialValue.needUpdate);
  const [isUpdating, changeIsUpdating] = useState(initialValue.isUpdating)
  
  useEffect(()=>{
    getUser()
  },[])

  return (
    <main className="UserPage">
        <h1>Soy la vista de usuario</h1>
        {needUpdate?<UpdateUser/>:<UserInfo/>}
        <button onClick={()=>{
          changeNeedUpdate(!needUpdate)
          changeIsUpdating(!isUpdating)
          }}>{isUpdating?"Go back":"Update Yourself"}</button>
    </main>
  )
}

export default UserPage