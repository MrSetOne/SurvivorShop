import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import {UserOutlined, SmileOutlined} from "@ant-design/icons"

const Navbar = () => {
const { token, logout , user, getUser, username} = useContext(UserContext);

  const doLogout = () =>{
    console.log("le has dado");
    logout()
  }

  return (
    <nav className="Navbar">
      <h2 className="Brand">SurvivorShop</h2>
      <div className="links">
        <Link to="/">Home</Link>
        {token?
        <div style={{display:"flex"}}>
          <SmileOutlined />
          <h2>{username}</h2>
          <p>update</p>
          <p onClick={()=>doLogout()}>logout</p>
        </div>
        :
        <Link to="/login"><UserOutlined/></Link>}
      </div>
    </nav>
  );
};

export default Navbar;
