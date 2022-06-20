import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
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

        <span>
          <h2>
            <Link to="/login">Login </Link>
          </h2>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
