import React, { useContext } from "react";
import { Context } from "../context/index";
import { Link } from "react-router-dom";

function CartWidget() {
  const { productAdded } = useContext(Context);

  return (
    <Link to={productAdded.length > 0 ? "/cart" : "#"}>
      <button style={{ backgroundColor: "transparent", border: "none" }}>
        <img src="../src/assets/imagenes/carrito.png" style={{ backgroundColor: "none" }} />
        {productAdded.length}
      </button>
    </Link>
  );
}

export default CartWidget;
