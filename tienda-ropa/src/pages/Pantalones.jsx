import { useState } from "react";
import ProductCard from "../components/ProductCard";


function Pantalones() {

    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const productos = [
        {
            id: 1,
            nombre: "Pantalón Excecutive Slim",
            precio: 19990
        },
        {
            id: 2,
            nombre: "Pantalón Premium",
            precio: 19990
        },
        {
            id: 3,
            nombre: "Pantalón Cargo Tulipero",
            precio: 21990
        },
        {
            id: 4,
            nombre: "Pantalón Cargo Alerce",
            precio: 21990
        }
    ];

    const agregarAlCarrito = () => {
        setCantidadCarrito(cantidadCarrito + 1);
    }

    return (
<div>
            <h1>Pantalones</h1>

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
    )
}

export default Pantalones;