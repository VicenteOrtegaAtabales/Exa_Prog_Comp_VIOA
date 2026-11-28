import { useState } from "react";
import ProductCard from "../components/ProductCard";

import oregon from "../assets/productos/oregon.png";
import softshell from "../assets/productos/softshell.png";
import corcovado from "../assets/productos/corcovado.png";
import cortaviento from "../assets/productos/cortaviento.png";


function Chaquetas({ carrito, setCarrito }) {


    const productos = [
        {
            id: 1,
            nombre: "Parka Fix Oregon",
            precio: 69990,
            imagen: oregon
        },
        {
            id: 2,
            nombre: "Chaqueta Softshell Rhelmu",
            precio: 29990,
            imagen: softshell
        },
        {
            id: 3,
            nombre: "Parka Corcovado 3x1",
            precio: 49990,
            imagen: corcovado
        },
        {
            id: 4,
            nombre: "Chaqueta Cortavientos",
            precio: 13990,
            imagen: cortaviento
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
            <h1>Chaquetas y Parkas</h1>

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
    );
}

export default Chaquetas;