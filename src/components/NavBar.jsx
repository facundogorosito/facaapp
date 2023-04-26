import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

function NavBar() {
  return (
    <div className="NavContainer">
      <NavLink exact to="/">FACA-APP</NavLink>
      <div className="links-container">
        <div className="nav-links">
          <NavLink exact to="/">CATALOGO</NavLink>
          <NavLink to="/category/AWP">AWP</NavLink>
          <NavLink to="/category/AMETRALLADORA">AMETRALLADORA</NavLink>
        </div>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar;