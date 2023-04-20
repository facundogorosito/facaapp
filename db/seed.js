// sedear la base de datos (db) para ejecutar los datos de una sola vez

import {collection, addDoc} from 'firebase/firestore';
import db from "./firebase-config.js";
import products from '../products.js';

const itemsRef = collection (db, "items");


const promises = products.map ((product) => addDoc (itemsRef, product));

Promise.all (promises)
    .then (() => {
        console.log("done");
        process.exit(0);
});
