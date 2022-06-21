import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const LogPage = () => {

    const initialValue = false

    const [needSignUp, changeNeedSignUp] = useState(initialValue);

  return (
    <section className="LogPage">
        <div>
            <h1>HoliHoliHoli</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremq</p>
        </div>
        {needSignUp?<SignUp/>:<Login/>}
        <button onClick={()=>changeNeedSignUp(false)}>LogIn</button>
        <button onClick={()=>changeNeedSignUp(true)}>SignUp</button>
    </section>
  )
}

export default LogPage