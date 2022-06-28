import { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import './LogPage.scss'

const LogPage = () => {

    const initialValue = false;
    const [needSignUp, changeNeedSignUp] = useState(initialValue);

  return (
    <section className="LogPage">
        <div className="LogPage__info">
            <h1>Rick approves</h1>
            <p>and he is still alive...</p>
        </div>
        <div className="LogPage__forms">
        {needSignUp?<SignUp/>:<Login/>}
        {needSignUp?
          <button onClick={()=>changeNeedSignUp(false)} className="LogPage__btn">LogIn</button>:
          <button onClick={()=>changeNeedSignUp(true)} className="LogPage__btn">SignUp</button>
        }
        </div>
    </section>
  )
}

export default LogPage