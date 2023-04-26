import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="addRemove-Button">
      <button className="add-button" onClick={() => setCounter(counter - 1)} disabled={counter <=0}> - </button>
      <p>{counter}</p>
      <button className="remove-button" onClick={() => setCounter(counter + 1)} disabled={counter>= stock}> + </button>
      <div className="buy-button-container">
        <Button onClick={() => onAdd(counter)}>
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
