import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import CartWidget from "../CartWidget";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Navbar = () => {
    const  [cart] = useContext(CartContext)
    const quantity = cart.reduce((acc, curr) =>{
    return acc + curr.quantity
    }, 0);

    return (
    <nav className={styles.container}>
        <div>
            <NavLink to="/">
                <img src="https://i.ibb.co/nPyGc9j/logo.png" alt="" width="70px" height="70px" />
            </NavLink>
        </div>
        <NavLink to="/category/AWP">
            <p>AWP</p>
        </NavLink>
        <NavLink to="/category/AMETRALLADORA">
            <p>AMETRALLADORA</p>
            </NavLink>
        <NavLink to="/cart" className={styles.quantity}>
            <CartWidget />{quantity}    
        </NavLink>
    </nav>
    );
};

export default Navbar;