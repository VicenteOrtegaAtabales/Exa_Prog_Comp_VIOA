import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Poleras() {

    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const productos = [
        {
            id: 1,
            nombre: "Polera Pique MC",
            precio: 9990
        },
        {
            id: 2,
            nombre: "Polera Pique ML",
            precio: 11990
        },
        {
            id: 3,
            nombre: "Polera Pique DryFresh MC",
            precio: 13990
        },
        {
            id: 4,
            nombre: "Polera Pique DryFresh ML",
            precio: 15990
        }
    ];

    const agregarAlCarrito = () => {
        setCantidadCarrito(cantidadCarrito + 1);
    }

    return (
        <div>
            <h1>Poleras</h1>

            <h3>Cantidad en el carrito: {cantidadCarrito}</h3>
            
            <div className="container">
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-md-6" key={producto.id}>
                            <ProductCard 
                                nombre={producto.nombre} 
                                precio={producto.precio} 
                                agregarAlCarrito={agregarAlCarrito} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Poleras;