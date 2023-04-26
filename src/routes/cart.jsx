import { addDoc, updateDoc, collection, doc, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../components/context/index";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Cart() {
  const { productAdded, clearCart } = useContext(Context);
  const db = getFirestore();
  const navigate = useNavigate();
  const [showThanks, setShowThanks] = useState(false);
  const [showButton, setShowButton] = useState(true);

  function updateOrder(productId, finalStock) {
    const itemRef = doc(db, "items", productId);
    updateDoc(itemRef, { stock: finalStock }).catch((error) => console.log({ error }));
  }

  function sendOrder() {
    const total = productAdded.reduce(
      (acc, product) => acc + product.quantity * product.price,
      0
    );

    const order = {
      buyer: { name: "Facundo", email: "ejemplo@hotmail.com", phone: "0000000" },
      items: productAdded,
      total,
    };

    const collectionRef = collection(db, "orders");
    addDoc(collectionRef, order)
      .then(() => {
        productAdded.map((product) => {
          const finalStock = product.stock - product.quantity;
          updateOrder(product.id, finalStock);
        });
      })
      .catch((error) => console.log({ error }));
  }

  function sendOrderAndNavigateHome() {
    sendOrder();
    clearCart();
    setShowThanks(true);
    setShowButton(false);
    setTimeout(() => {
      setShowThanks(false);
      navigate("/");
    }, 2000);
  }

  return (
    <>
      <NavBar />
      <Container style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {productAdded.map((product) => (
          <div style={{ marginTop: "1rem", fontSize: 20 }}>
            <span>Producto: {product.name}</span>
            <br />
            <span>Precio: {product.price}</span>
            <br />
            <span>Unidades: {product.quantity}</span>
          </div>
        ))}
        {showButton && (
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
            <button onClick={sendOrderAndNavigateHome}>
              Pagar
            </button>
          </div>
        )}
        {showThanks && <div style={{ marginTop: "1rem", fontSize: 30 }}>Gracias por su compra!!</div>}
      </Container>
    </>
  );
}

export default Cart;
