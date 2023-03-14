import React from "react";
import CartWidget from "../CartWidget";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (

    <div className={styles.container}>
      <a className={styles.a} href="">INICIO</a>
      <a className={styles.a} href="">COMPRAS DE SKINS</a>
      <a className={styles.a} href="">CONTACTO</a>
      <a className={styles.a} href="">SOBRE NOSOTROS</a>
      <a className={styles.a} href="">Carrito <CartWidget icono="https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png" /><p className={styles.numItem}></p></a>
     </div>
  )
}

export default Navbar