import ItemDetail from "../ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs } from "firebase/firestore";

function ItemDetailContainer({ isItemRoute, itemId }) {

  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log(error));
  }, []);

  const params = useParams()

  return (
    <div>
      <ItemDetail />
    </div>
  );
}

export default ItemDetailContainer;
