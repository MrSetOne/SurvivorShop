import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import {UserOutlined, LogoutOutlined, ShoppingCartOutlined} from "@ant-design/icons"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
const { token, logout , user, getUser, username} = useContext(UserContext);
const navigate = useNavigate()

  const doLogout = async () =>{
    await navigate("/")
    logout()
  }

  return (
    <div className="Navbar__container">
      <nav className="Navbar">
        <h2 className="Brand">SurvivorShop</h2>
        <div className="links">
          {token?
          <div className="navigate">
            <Link to="/cart"><ShoppingCartOutlined/></Link>
            <Link to="/user">
              <div className="user__icon">
                <p>{username.charAt(0)}</p>
              </div>
            </Link>
            <p onClick={()=>doLogout()}>{<LogoutOutlined />}</p>
          </div>
          :
          <Link to="/logpage"><UserOutlined/></Link>}
        </div>
      </nav>
      <nav className="SubNavBar">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>          
      </nav>
    </div>
  );
};

export default Navbar;
