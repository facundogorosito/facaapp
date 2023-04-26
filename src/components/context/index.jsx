import React, { createContext, useState } from "react";

export const Context = createContext();

export function CustomProvider({ children }) {
  const [productAdded, setProductAdded] = useState([]);

  function onAdd(product, quantity) {
    const isAlreadyAdded = isInCart(product);

    if (isAlreadyAdded) {
      const productToModify = productAdded.find(
        (productAdded) => productAdded.id === product.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setProductAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.id === product.id ? productModified : productAdded
        )
      );
    } else {
      setProductAdded((prevState) =>
        prevState.concat({ ...product, quantity })
      );
    }
  }

  function clearCart() {
    setProductAdded([]);
  }

  function isInCart(product) {
    return productAdded.find((productAdded) => productAdded.id === product.id);
  }

  return (
    <Context.Provider value={{ productAdded, onAdd, clearCart }}>
      {children}
    </Context.Provider>
  );
}
