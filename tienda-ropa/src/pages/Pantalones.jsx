import { useState } from "react";
import ProductCard from "../components/ProductCard";

import pantalonExcecutive from "../assets/productos/pantalonExcecutive.png";
import pantalonPremium from "../assets/productos/pantalonPremium.png";
import tulipero from "../assets/productos/tulipero.png";
import alerce from "../assets/productos/alerce.png";


function Pantalones({ carrito, setCarrito}) {


    const productos = [
        {
            id: 1,
            nombre: "Pantalón Excecutive Slim",
            precio: 19990,
            imagen: pantalonExcecutive
        },
        {
            id: 2,
            nombre: "Pantalón Premium",
            precio: 19990,
            imagen: pantalonPremium
        },
        {
            id: 3,
            nombre: "Pantalón Cargo Tulipero",
            precio: 21990,
            imagen: tulipero
        },
        {
            id: 4,
            nombre: "Pantalón Cargo Alerce",
            precio: 21990,
            imagen: alerce
        }
    ];

    const agregarAlCarrito = (producto) => {
        
        setCarrito([
            ...carrito,
            producto
        ]);
    }

    return (
<div>
            <h1>Pantalones</h1>

            <h3>Cantidad en el carrito: {carrito.length}</h3>
            
            <div className="container">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-md-6" key={producto.id}>
                            <ProductCard 
                                nombre={producto.nombre} 
                                precio={producto.precio}
                                imagen={producto.imagen} 
                                agregarAlCarrito={() =>
                                    agregarAlCarrito(producto)
                                } 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pantalones;