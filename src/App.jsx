import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ItemlistContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

function App() {

  return (
    <div>
      <Navbar />
      <h1>Hola mundo, Bienvenidos a faca SKINS</h1>
      <Button texto="ARMAS"/>
      <Button texto="CUCHILLOS"/>
      <Button texto="PERSONAJES"/>
      <ItemlistContainer greeting={"Soy un greeting"}/>
    </div>
  )
}
export default App
