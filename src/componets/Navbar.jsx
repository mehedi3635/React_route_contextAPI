import { Link, NavLink} from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { UserContext } from "../contexts/UserContex";
function Navbar() {
  const user = useContext(UserContext);
  return (
    <div className="navbar">
      <p>Welcome, {user.name} email: {user.email}!</p>
      <ul>
        <li style={{ color: "red" }}>
          <NavLink to="/">Home</NavLink>
        </li>

       <li>
  <NavLink
    to="/about"
    style={({ isActive }) => ({
      color: isActive ? "red" : "black",
    })}
  >
    About
  </NavLink>
</li>

        <li style={{ color: "red" }}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;