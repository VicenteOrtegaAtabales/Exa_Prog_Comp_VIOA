import { useState } from "react";
import ProductCard from "../components/ProductCard";
import poleraPiqueMC from "../assets/productos/poleraPiqueMC.png";
import poleraPiqueML from "../assets/productos/poleraPiqueML.png";
import dryfreshMC from "../assets/productos/dryfreshMC.png";
import dryfreshML from "../assets/productos/dryfreshML.png";

function Poleras({ carrito, setCarrito }) {


    const productos = [
        {
            id: 1,
            nombre: "Polera Pique MC",
            precio: 9990,
            imagen: poleraPiqueMC
        },
        {
            id: 2,
            nombre: "Polera Pique ML",
            precio: 11990,
            imagen: poleraPiqueML
        },
        {
            id: 3,
            nombre: "Polera Pique DryFresh MC",
            precio: 13990,
            imagen: dryfreshMC
        },
        {
            id: 4,
            nombre: "Polera Pique DryFresh ML",
            precio: 15990,
            imagen: dryfreshML
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
            <h1>Poleras</h1>

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

export default Poleras;