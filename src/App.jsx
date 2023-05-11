import "./App.css";
import Navbar from "./components/Navbar/index";
import ItemDetail from "./components/ItemDetail/index";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Filter from "./components/Filter/index";
import ItemListContainer from "./components/ItemListContainer/index";
import db from "../db/firebase-confing.js";
import { getDocs, collection } from "firebase/firestore"; 
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart/cart";

function App() {
  const [items, setItem] = useState ([]);
  const itemsRef = collection(db, "items");
  const [loading, setLoading] = useState(true);

  const getItem = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map(doc => ({...doc.data(), id: doc.id,}))
    setItem(items);
    setLoading(false);
  };

  useEffect(() => {
      getItem();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>
  };

  return (
    <CartProvider>
      <Navbar />
        <h1>
          Bienvenidos a una tienda de Skin.
        </h1>
        <Routes>
          <Route path='/' element={ <ItemListContainer items={items}/> } />
          <Route path='/category/AWP' element={<Filter items={items} categoria="AWP"/>} />
          <Route path="/category/AWP/:id" element={<ItemDetail />} />
          <Route path='/category/AMETRALLADORA' element={<Filter items={items}  categoria="AMETRALLADORA"/>} />
          <Route path="/category/AMETRALLADORA/:id" element={<ItemDetail />} />
          <Route path='/:id' element={<ItemDetail />} />
          <Route path="/cart" element={ <Cart items={items}/> }/>
        </Routes>
    </CartProvider>
  );  
};



export default App;
