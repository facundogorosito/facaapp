import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/root";
import "./index.css";
import ItemRoot from "./routes/item";
import Cart from "./routes/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);

import { initializeApp } from "firebase/app";
import { CustomProvider } from "./components/context";

const firebaseConfig = {
  apiKey: "AIzaSyC-5x5KOZNM58dRDH7VL6TqqpKl4gWPkFA",
  authDomain: "facaapp-71a4b.firebaseapp.com",
  projectId: "facaapp-71a4b",
  storageBucket: "facaapp-71a4b.appspot.com",
  messagingSenderId: "359567600741",
  appId: "1:359567600741:web:378a1913664ef13dabea8c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>,
);
