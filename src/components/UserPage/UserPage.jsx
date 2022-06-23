import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext/UserState"
import UpdateUser from "./UpdateUser/UpdateUser"
import UserInfo from "./UserInfo/UserInfo"
import {UserOutlined} from "@ant-design/icons";
import '../UserPage/Userpage.scss'

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
      <h1>Your profile</h1>
      <div className="profile-img">
        <UserOutlined />
      </div>
      <div className="UserInfo-div">
        {needUpdate ? <UpdateUser /> : <UserInfo />}
      </div>
      <div className="button-div">
        <button
          className="button"
          onClick={() => {
            changeNeedUpdate(!needUpdate);
            changeIsUpdating(!isUpdating);
          }}
        >
          {isUpdating ? "Go back" : "Update Yourself"}
        </button>
      </div>
    </main>
  );
}

export default UserPage