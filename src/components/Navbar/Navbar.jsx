import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import {UserOutlined, SmileOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const { token, logout , user, getUser, username} = useContext(UserContext);
const navigate = useNavigate()

  const doLogout = async () =>{
    await navigate("/")
    logout()
  }

  return (
    <nav className="Navbar">
      <h2 className="Brand">SurvivorShop</h2>
      <div className="links">
        <Link to="/">Home</Link>
        {token?
        <div style={{display:"flex"}}>
          <Link to="/user">{username}</Link>
          <p onClick={()=>doLogout()}>logout</p>
          <Link to="/cart"><ShoppingCartOutlined/></Link>
        </div>
        :
        <Link to="/logpage"><UserOutlined/></Link>}
      </div>
    </nav>
  );
};

export default Navbar;
