import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item";
import "../ItemList/index.css";

function ItemList({ products }) {
  return (
    <div className="productContainer">
      <ul className="productList">
        {products.map((product) => (
          <Link key={product.id} to={`/item/${product.id}`}>
            <Item product={product} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
