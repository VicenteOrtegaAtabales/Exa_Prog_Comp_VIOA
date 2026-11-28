function Carrito({ carrito }) {

    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado + producto.precio, 0
    );

    return (
        <div className="container mt-4">

            <h1>Carrito de Compras</h1>

            <h3>Total productos: {carrito.length}</h3>

            <h3>Valor total: ${total}</h3>

            <hr />

            {carrito.length === 0 ? (

                <p>
                    No hay productos en el carrito.
                </p>

            ) : (

                carrito.map((producto, index) => (

                    <div
                        key={index}
                        className="card mb-3"
                    >

                        <div className="card-body">

                            <img
                               src={producto.imagen}
                               alt={producto.nombre}
                               style={{
                                 width: "120px",
                                 height: "120px",
                                 objectFit: "contain"
                               }}
                            />

                            <h5>
                                {producto.nombre}
                            </h5>

                            <p>
                                Precio: ${producto.precio}
                            </p>

                        </div>

                    </div>

                ))

            )}

        </div>
    );
}

export default Carrito;