import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import {UserOutlined, LogoutOutlined, ShoppingCartOutlined, CloseOutlined} from "@ant-design/icons"
import { Badge } from 'antd';
import { useNavigate } from "react-router-dom";
import Cart from './Cart/Cart'
import { ProductContext } from "../../context/ProductsContext/ProductState";


const Navbar = () => {
const { token, logout , username} = useContext(UserContext);
const {cart} = useContext(ProductContext)
const navigate = useNavigate()

const initialValue = false
let totalArticles = 0

cart.forEach(item => {
  totalArticles += item.amount
});

const [burgerOn, setBurgerOn] = useState(initialValue)

  const doLogout = async () =>{
    await navigate("/")
    logout()
  }

  return (
    <>
      <div className="Navbar__container">
        <nav className="Navbar">
          <h2 className="Brand">SurvivorShop</h2>
          <div className="links">
            {token?
            <div className="navigate">
              <Badge key="CartBadge" count={totalArticles}>
                <ShoppingCartOutlined onClick={()=>setBurgerOn(true)}/>
              </Badge>
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
      <div className={burgerOn?"Cart Cart--on":"Cart"}>
        <CloseOutlined className="Menu__x" onClick={()=>setBurgerOn(false)}/>
        <Cart/>
      </div>
    </>
  );
};

export default Navbar;
