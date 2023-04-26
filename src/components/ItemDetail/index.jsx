import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/index";
import Products from "../../mocks/products";
import "./itemDetail.css";
import { useParams } from "react-router-dom";
import { Button } from "../Button/index";
import { Context } from "../context/index";

const ItemDetail = () => {
  const { id } = useParams();
  const product = Products.find((product) => product.id === parseInt(id));

  const {onAdd} = useContext(Context);
  const [added, setAdded] = useState(0);

  function onAddProduct(count) {
    setAdded(count);

    onAdd(product, count);
  }

  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-container">
        <div className="item-detail-image-container">
          <img className="item-detail-image" src={product.image} alt={product.name} />
        </div>
        <div className="item-detail-info-container">
          <h2>{product.name} - ${product.price}</h2>
          <p className="item-detail-description">{product.detail}</p>
          {added === 0 && <ItemCount stock={product.stock} onAdd={onAddProduct} />}
        </div>
      </div>
  
      {added >= 1 && (
        <div className="item-detail-buttons-container">
          <Link to="/cart">
            <Button>Terminar compra</Button>
          </Link>
          <Link to="/">
            <Button>Seguir comprando</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
