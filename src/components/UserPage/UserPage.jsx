import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext/UserState"
import UpdateUser from "./UpdateUser/UpdateUser"
import UserInfo from "./UserInfo/UserInfo"
import {UserOutlined} from "@ant-design/icons";
import '../UserPage/Userpage.scss'

const UserPage = () => {

  const { getUser} = useContext(UserContext)

  const initialValue = {
    needUpdate:false,
    isUpdating:false
  }
  
  const [needUpdate, changeNeedUpdate] = useState(initialValue.needUpdate);
  
  useEffect(()=>{
    getUser();
    window.scrollTo(0,0)
  },[])

  return (
    <main className="UserPage">
      <h1>Your profile</h1>
      <div className="profile-img">
        <UserOutlined />
      </div>
      <div className="UserInfo-div">
        {needUpdate ? <UpdateUser changeNeedUpdate={changeNeedUpdate}/> : <UserInfo />}
      </div>
      <div className="button-div">
        <button
          className="button"
          onClick={() => {
            changeNeedUpdate(!needUpdate);
          }}
        >
          {needUpdate ? "Go back" : "Update Yourself"}
        </button>
      </div>
    </main>
  );
}

export default UserPage