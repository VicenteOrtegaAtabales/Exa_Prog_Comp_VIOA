import { useState } from "react";
import ProductCard from "../components/ProductCard";


function Chaquetas() {

    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const productos = [
        {
            id: 1,
            nombre: "Parka Fix Oregon",
            precio: 69990
        },
        {
            id: 2,
            nombre: "Chaqueta Softshell Rhelmu",
            precio: 29990
        },
        {
            id: 3,
            nombre: "Parka Corcovado 3x1",
            precio: 49990
        },
        {
            id: 4,
            nombre: "Chaqueta Cortavientos",
            precio: 13990 
        }
    ];

    const agregarAlCarrito = () => {
        setCantidadCarrito(cantidadCarrito + 1);
    }

    return (
        <div>
            <h1>Chaquetas y Parkas</h1>

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

export default Chaquetas;