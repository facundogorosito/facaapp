import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import CardDetail from './Components/CardDetail';
import db from "../db/firebase-config"
import { getDocs, collection } from 'firebase/firestore';


function App() {

  const [items, setItems] = useState ([]);
  const itemRef = collection (db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs (itemRef);
    const items = itemcollection.docs.map ((doc) => ({
    ...doc.data(),
    id: doc.id,
    }));
    setItems (items);
  };

  
  // const [productos, setProductos] = useState([])

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/')
  //     .then(response => response.json())
  //     .then(data => {
  //       setProductos(data)
  //     })
  // }, [])

  // console.log(productos);

  // return (
  // <div>
  //   <NavBar />
  //   <Routes>
  //     <Route path="/" element={<Navigate to="/Home" />} />
  //     <Route path="/Home" element={<Home/>} />
  //     <Route path="products" element={<ItemListContainer productos={productos}/>} />
  //     <Route path="/products/:id" element={<CardDetail />} />
  //     <Route path="/category/men's clothing" element={<ItemListContainer productos={productos} category="men's clothing"/> } />
  //     <Route path="/category/men's clothing/:id" element={<CardDetail />} />
  //     <Route path="/category/women's clothing" element={<ItemListContainer productos={productos} category="women's clothing"/>} />
  //     <Route path="/category/women's clothing/:id" element={<CardDetail />} />
  //     <Route path='/category/electronics' element={<ItemListContainer productos={productos} category="electronics"/>} />
  //     <Route path="/category/electronics/:id" element={<CardDetail />} />
  //     <Route path='/category/jewelery' element={<ItemListContainer productos={productos} category="jewelery"/>} />
  //     <Route path="/category/jewelery/:id" element={<CardDetail />} />
  //     <Route path="/404" element={<h1>404 Not Found</h1>} />
  //   </Routes>
  // </div>
  // );
}

export default App;