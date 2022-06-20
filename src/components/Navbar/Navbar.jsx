import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Navbar = () => {
const { token, logout } = useContext(UserContext);

const logoutUser = () => {
  logout();
};

  return (
    <nav className="Navbar">
      <h2 className="Brand">SurvivorShop</h2>
      <div className="links">
        
        <span>
          <h2>
            <Link to="/">Home</Link>
          </h2>
        </span>
        <span>
          <h2>
            <Link to="/store">Store </Link>
          </h2>
        </span>
        
        <span onClick={logoutUser}>
          <Link to="/">Logout</Link>
        </span>
        <span>
          <h2>
            <Link to="/login">Login </Link>
          </h2>
        </span>
        <span>
          <h2>
            <Link to="/signup">Sign up </Link>
          </h2>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
