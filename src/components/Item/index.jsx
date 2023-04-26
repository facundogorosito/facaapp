import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ product }) => {
  return (
    <div className="product-container">
      <Link to={`/item/${product.id}`}>
        <div className="product-card">
          <img className="product-image" src={product.image} alt={product.name} />
          <div className="product-name">
            <h3>{product.name}</h3>
          </div>
          <div className="product-price">
            <h2>${product.price}</h2>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
