import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../ItemListContainer/Itemlistcontainer.module.scss";
import Card from "../Card";


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [categorySeleccionada, setCategorySeleccionada] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => {
                setProductos(data);
                const categorysUnicas = [
                    ...new Set(data.map((producto) => producto.category)),
                ];
                setCategorys(categorysUnicas);
            });
    }, []);

    const handleCategoriaClick = (categoria) => {
        setCategorySeleccionada(categoria);
    };

    const productosFiltrados = categorySeleccionada
        ? productos.filter(
            (producto) => producto.category === categorySeleccionada
            )
        : productos;

    return (
        <section>
            <div className={styles.categorysbtn}>
                <div><h3>¡Nuestras Categorias!</h3></div>
                {categorys.map((categoria) => (
                    <NavLink
                        key={categoria}
                        to={`/category/${categoria}`}
                        onClick={() => handleCategoriaClick(categoria)}>
                        <button className={styles.categorysbtn}>{categoria}</button>
                    </NavLink>
                ))}
            </div>

            <div className={styles.container}>
                {productosFiltrados.map((producto) => {
                    return (
                        <Card key={producto.id} producto={producto} />
                    )
                })}
            </div>
        </section>
    );
};

export default ItemListContainer;