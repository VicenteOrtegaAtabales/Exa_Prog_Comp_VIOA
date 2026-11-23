function ProductCard(props) {
    return (
        <div className="card mb-3">

            <div className="card-body">

                <h4 className="card-title">{props.nombre}</h4>

                <p className="card-text">${props.precio}</p>

                <button className="btn btn-primary" onClick={() => props.agregarAlCarrito()}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard;